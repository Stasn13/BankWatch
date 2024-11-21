import { Card } from '../ui/Card';
import BadgeCard from '../ui/BadgeCard';
import { useAccount, useReadContract } from 'wagmi';
import { badgesData, LINEA_SEPOLIA_HEALTH10_BADGE, LINEA_SEPOLIA_PORTAL_ADDRESS } from '../constants';
import { useEffect, useState } from 'react';
import { Attestation, VeraxSdk } from '@verax-attestation-registry/verax-sdk';
import { Typography } from '../ui/Typography';
import clsx from 'clsx';

const Badges = ({ className }: { className?: string }) => {
    // const [address, setAddress] = useState("0x230cDe8909aeBBc48CfBDf6fCc9A642439d77F83")
    const { address, chainId, isConnected, chain } = useAccount();
    const [attestations, setAttestations] = useState<Attestation[]>([]);
    const veraxSdk = new VeraxSdk(VeraxSdk.DEFAULT_LINEA_SEPOLIA_FRONTEND, address);

    const issueAttestation = async () => {
        console.log('issued')
        // transactionHash = "0x3beaec19b94570367e944458a997c51804032da1b85c11c12ed7a0fef99b9cf4"   
        if (!address) return;
        const test = await veraxSdk.portal.findOneById(LINEA_SEPOLIA_PORTAL_ADDRESS);
        const testSchema = await veraxSdk.schema.findOneById(LINEA_SEPOLIA_HEALTH10_BADGE);
        console.log(test, testSchema);
        try {
            let receipt = await veraxSdk.portal.attest(
                LINEA_SEPOLIA_PORTAL_ADDRESS,
                {
                    schemaId: LINEA_SEPOLIA_HEALTH10_BADGE,
                    expirationDate: 1693583329,
                    subject: address,
                    // claimed_by: address
                    attestationData: [{ badge_claimed: true }],
                },
                [],
            );
            console.log(receipt)
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
        }
    };

    const revealAttestations = async () => {
        console.log('reveal')
        try {
            const attestationsList = await veraxSdk.attestation.findBy(1, 0, { portal: LINEA_SEPOLIA_PORTAL_ADDRESS, subject: address });
            setAttestations(attestationsList)
            console.log(attestations);
        } catch (e) {
            console.log(`${e}`);
        }
    };

    useEffect(() => {
        if (address) {
            revealAttestations();
        }
    }, [address]);

    return (
        <Card className={clsx(className, "bg-foreground-light")}>
            <Typography
                className="mb-4"
                size='heading5'
            >
                Badges:
            </Typography>
            <div className="flex flex-wrap gap-3">
                {badgesData.map(badge => {
                    const attested = !!attestations.filter(attestation => attestation.schema.id === badge.schema).length;
                    return (
                        <BadgeCard
                            badge={badge}
                            key={badge.name}
                            onClick={issueAttestation}
                            attested={attested}
                        />)
                })}
            </div>
        </Card>
    )
}

export default Badges
