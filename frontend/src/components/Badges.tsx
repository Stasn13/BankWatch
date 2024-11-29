import { Card } from '../ui/Card';
import BadgeCard from '../ui/BadgeCard';
import { useAccount } from 'wagmi';
import { badgesData, LINEA_SEPOLIA_PORTAL_ADDRESS, UserStatistics } from '../constants';
import { useEffect, useState } from 'react';
import { Attestation, VeraxSdk } from '@verax-attestation-registry/verax-sdk';
import { Typography } from '../ui/Typography';
import clsx from 'clsx';
import { waitForTransactionReceipt } from 'viem/actions';
import { wagmiConfig } from '../web3provider';

type BadgesProps = {
    className?: string
    veraxSdk: VeraxSdk
    userStatistics: UserStatistics
}

const Badges = ({ className, veraxSdk, userStatistics }: BadgesProps) => {
    const { address, isConnected } = useAccount();
    const [attestations, setAttestations] = useState<Attestation[]>([]);
    const [issueLoading, setIssueLoading] = useState<string | boolean>(false);
    const [revealLoading, setRevealLoading] = useState(false);


    const issueAttestation = async (schemaId: string, badgeName: string) => {
        if (!address) return;
        setIssueLoading(badgeName);
        try {
            let receipt = await veraxSdk.portal.attest(
                LINEA_SEPOLIA_PORTAL_ADDRESS,
                {
                    schemaId,
                    expirationDate: 1756741729,
                    subject: address,
                    attestationData: [{ badge_claimed: true, [badgeName]: address }],
                },
                [],
            );
            if (receipt.transactionHash) {
                receipt = await waitForTransactionReceipt(wagmiConfig.getClient(), {
                    hash: receipt.transactionHash,
                });
            } else {
                console.log("Error during receipt");
            }
        } catch (e) {
            console.error(e);
            if (e instanceof Error) {
                if (e.message.includes('User rejected the request')) {
                    console.log('User denied transaction signature');
                } else {
                    console.log(` - ${e}`);
                }
            } else {
                console.log('unexpected');
            }
        } finally {
            setIssueLoading(false);
            revealAttestations();
        }
    };

    const revealAttestations = async () => {
        setRevealLoading(true);
        try {
            const attestationsList = await veraxSdk.attestation.findBy(500, 0, { portal: LINEA_SEPOLIA_PORTAL_ADDRESS, subject: address });
            setAttestations(attestationsList)
            console.log(attestationsList);
        } catch (e) {
            console.log(`${e}`);
        } finally {
            setRevealLoading(false);
        }
    };

    useEffect(() => {
        if (address) {
            revealAttestations();
        }
    }, [address]);

    return (
        <Card
            className={clsx(className, "bg-foreground-light !p-0 !pb-3")}
            wrapperClassName="w-full"
        >
            <Typography
                className="p-6 pb-4"
                size='heading5'
            >
                Badges:
            </Typography>
            <div className="flex gap-3 w-full overflow-x-auto snap-mandatory">
                {badgesData.map(badge => {
                    // @ts-ignore
                    const attested = !!attestations.filter(attestation => (attestation.schema.id === badge.schema && attestation.decodedPayload[0].badge_claimed)).length;
                    return (
                        <BadgeCard
                            wrapperClassName="snap-start first:ml-6 last:mr-6 mb-3"
                            badge={badge}
                            key={badge.name}
                            onClick={() => issueAttestation(badge.schema, badge.badgeName)}
                            attested={attested}
                            disabled={!attested && !badge.eligible(userStatistics)}
                            // attested={false} // to test conditions
                            loading={!isConnected || revealLoading || (issueLoading === badge.badgeName)} // todo implement reveal laoding as skeleton
                            revealLoading={!isConnected}
                        />)
                })}
            </div>
            {/* TODO: implement context for Toasts */}
            {/* <Toast success/>  */}
        </Card>
    )
}

export default Badges
