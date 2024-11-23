import { Card } from '../ui/Card';
import BadgeCard from '../ui/BadgeCard';
import { useAccount, useReadContract } from 'wagmi';
import { badgesData, LINEA_SEPOLIA_HEALTH10_BADGE, LINEA_SEPOLIA_PORTAL_ADDRESS } from '../constants';
import { useEffect, useState } from 'react';
import { Attestation, VeraxSdk } from '@verax-attestation-registry/verax-sdk';
import { Typography } from '../ui/Typography';
import clsx from 'clsx';
import Toast from '../ui/Toast';

const Badges = ({ className, veraxSdk }: { className?: string, veraxSdk: VeraxSdk }) => {
    // const [address, setAddress] = useState("0x230cDe8909aeBBc48CfBDf6fCc9A642439d77F83")
    const { address, chainId, isConnected, chain } = useAccount();
    const [attestations, setAttestations] = useState<Attestation[]>([]);
    const [issueLoading, setIssueLoading] = useState<string | boolean>(false);
    const [revealLoading, setRevealLoading] = useState(false);


    const issueAttestation = async (schemaId: string, badgeName: string) => {
        if (!address) return;
        setIssueLoading(badgeName);
        console.log({ badge_claimed: true, [badgeName]: address })
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
            const attestationsList = await veraxSdk.attestation.findBy(500, 0, { portal: LINEA_SEPOLIA_PORTAL_ADDRESS, subject: address });
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
                    console.log(attestations);
                    return (
                        <BadgeCard
                            badge={badge}
                            key={badge.name}
                            onClick={() => issueAttestation(badge.schema, badge.badgeName)}
                            attested={attested}
                            loading={revealLoading || (issueLoading === badge.badgeName)}
                        />)
                })}
            </div>
            {/* TODO: implement context for Toasts */}
            {/* <Toast success/>  */}
        </Card>
    )
}

export default Badges
