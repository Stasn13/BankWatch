// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {IERC721} from "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import {AbstractPortal} from "@verax-attestation-registry/verax-contracts/contracts/abstracts/AbstractPortal.sol";
import {AttestationPayload} from "@verax-attestation-registry/verax-contracts/contracts/types/Structs.sol";

/**
 * @title eFrogs Portal
 * @author alainnicolas.eth
 * @notice This contract aims to attest of eFrogs ownership
 */
contract HealthScorePortal is AbstractPortal, Ownable {
    IERC721 public aaveContract;

    uint256 public fee;

    mapping(bytes32 => bool) public authorizedSchemas;

    /// @dev Error thrown when the attestation subject is not the sender
    error SenderIsNotSubject();
    /// @dev Error thrown when the attestation subject doesn't own an eFrog
    error SenderIsNotOwner();
    /// @dev Error thrown when the transaction value is insufficient to cover the fee
    error InsufficientFee();
    /// @dev Error thrown when the withdraw fails
    error WithdrawFail();
    /// @dev Error thrown when the Schema is not authorized on this Portal
    error SchemaNotAuthorized();
    /// @dev Error thrown when the token contract is not the eFrogs contract
    error NotAaveContract();
    /// @dev Error thrown when the token balance is incorrect
    error IncorrectBalance();

    constructor(address[] memory modules, address router, address aaveAddress) AbstractPortal(modules, router) {
        aaveContract = IERC721(aaveAddress);
        fee = 0.001 ether;
        authorizedSchemas[0x5dc8bc9158dd69ee8a234bb8f9ab1f4f17bb52c84b6fd4720d58ec82bb43d2f5] = true;
    }

    /**
     * @notice Run before the payload is attested
     * @param attestationPayload the attestation payload to be attested
     * @param value the value sent with the attestation
     * @dev This function checks if
     *          the sender is the subject of the attestation
     *          and if the sender owns an eFrog
     *          and if the value sent is sufficient
     *          and if the schema is authorized
     *          and if the token contract is the eFrogs contract
     *          and if the token balance is correct
     */
    function _onAttest(
        AttestationPayload memory attestationPayload,
        address /*attester*/,
        uint256 value
    ) internal view override {
        address subject = address(0);

        if (attestationPayload.subject.length == 32) subject = abi.decode(attestationPayload.subject, (address));
        if (attestationPayload.subject.length == 20) subject = address(uint160(bytes20(attestationPayload.subject)));
        if (subject != msg.sender) revert SenderIsNotSubject();

        uint256 balance = aaveContract.getUserAccountData(subject);
        /// if (balance < 1) revert SenderIsNotOwner();
        if (value < fee) revert InsufficientFee();

        if (!authorizedSchemas[attestationPayload.schemaId]) revert SchemaNotAuthorized();
        // check schemaId
        if (attestationPayload.schemaId == 0x5dc8bc9158dd69ee8a234bb8f9ab1f4f17bb52c84b6fd4720d58ec82bb43d2f5) {
            (address tokenAddress, uint256 tokenBalance) = abi.decode(
                attestationPayload.attestationData,
                (address, uint256)
            );
            if (tokenAddress != address(aaveContract)) revert NotAaveContract();
            if (tokenBalance != balance) revert IncorrectBalance();
        }
    }

    /**
     * @notice Set the fee required to attest
     * @param attestationFee The fee required to attest
     */
    function setFee(uint256 attestationFee) public onlyOwner {
        fee = attestationFee;
    }

    /**
     * @notice Add a schema to the authorized schemas
     * @param schemaId The schema to authorize
     */
    function addAuthorizedSchema(bytes32 schemaId) public onlyOwner {
        authorizedSchemas[schemaId] = true;
    }

    /**
     * @notice Remove a schema from the authorized schemas
     * @param schemaId The schema to remove
     */
    function removeAuthorizedSchema(bytes32 schemaId) public onlyOwner {
        delete authorizedSchemas[schemaId];
    }

    /**
     * @notice Withdraw funds from the Portal
     * @param to the address to send the funds to
     * @param amount the amount to withdraw
     * @dev Only the owner can withdraw funds
     */
    function withdraw(address payable to, uint256 amount) external override onlyOwner {
        (bool s, ) = to.call{value: amount}("");
        if (!s) revert WithdrawFail();
    }
}