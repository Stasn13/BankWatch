import { Card } from '../ui/Card';
import BadgeCard from '../ui/BadgeCard';
import { useAccount, useReadContract } from 'wagmi';
import { badgesData, LINEA_SEPOLIA_HEALTH10_BADGE, LINEA_SEPOLIA_PORTAL_ADDRESS } from '../constants';
import { useEffect, useState } from 'react';
import { Attestation, VeraxSdk } from '@verax-attestation-registry/verax-sdk';
import { Typography } from '../ui/Typography';
import clsx from 'clsx';

const Badges = ({ className, veraxSdk }: { className?: string, veraxSdk: VeraxSdk }) => {
    // const [address, setAddress] = useState("0x230cDe8909aeBBc48CfBDf6fCc9A642439d77F83")
    const { address, chainId, isConnected, chain } = useAccount();
    const [attestations, setAttestations] = useState<Attestation[]>([]);
    const [issueLoading, setIssueLoading] = useState(false);
    const [revealLoading, setRevealLoading] = useState(false);
    

    const issueAttestation = async (schemaId: string) => {
        if (!address) return;
        setIssueLoading(true);
        try {
            let receipt = await veraxSdk.portal.attest(
                LINEA_SEPOLIA_PORTAL_ADDRESS,
                {
                    schemaId,
                    expirationDate: 1756741729,
                    subject: address,
                    // claimed_by: address
                    attestationData: [{ badge_claimed: true }], // todo: check args
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
        } finally {
            setIssueLoading(false);
        }
    };

    const revealAttestations = async () => {
        setRevealLoading(true);
        try {
            const attestationsList = await veraxSdk.attestation.findBy(1, 0, { portal: LINEA_SEPOLIA_PORTAL_ADDRESS, subject: address });
            setAttestations(attestationsList)
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
                            onClick={() => issueAttestation(badge.schema)}
                            attested={attested}
                            loading={revealLoading || issueLoading}
                        />)
                })}
            </div>
        </Card>
    )
}

export default Badges
