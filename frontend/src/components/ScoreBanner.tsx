import clsx from 'clsx';
import { Typography } from '../ui/Typography';
import { Attestation, VeraxSdk } from '@verax-attestation-registry/verax-sdk';
import Banner from './Banner';
import { useEffect, useState } from 'react';
import bg1 from "../assets/img/purple-gradient.png";
import { LINEA_SEPOLIA_BANK_SCORE, LINEA_SEPOLIA_PORTAL_ADDRESS } from '../constants';

type ScoreBannerProps = {
    className?: string
    veraxSdk: VeraxSdk
    address?: `0x${string}`
}

const ScoreBanner = ({ className, veraxSdk, address }: ScoreBannerProps) => {
    const [loading, setLoading] = useState(false);
    const [revealLoading, setRevealLoading] = useState(false);
    const [scoreAttestations, setScoreAttestations] = useState<Attestation[]>([]);
    const recentScore = scoreAttestations?.[0]?.decodedPayload?.[0].bank_score ?? undefined;
    const currentScore = Math.floor(Math.random() * 100) + 1; // Todo: improve score based on values

    const revealScoreAttestations = async () => {
        try {
            const scoresList = await veraxSdk.attestation.findBy(1, 0, { portal: LINEA_SEPOLIA_PORTAL_ADDRESS, subject: address, schema: LINEA_SEPOLIA_BANK_SCORE });
            setScoreAttestations(scoresList)
            console.log(scoresList);
        } catch (e) {
            console.log(`${e}`);
        }
    };

    useEffect(() => {
        if (address) {
            revealScoreAttestations();
        }
    }, [address]);

    const claimScore = async () => {
        setLoading(true);
        if (!address) return;
        try {
            let receipt = await veraxSdk.portal.attest(
                LINEA_SEPOLIA_PORTAL_ADDRESS,
                {
                    schemaId: LINEA_SEPOLIA_BANK_SCORE,
                    expirationDate: 1756741729,
                    subject: address,
                    attestationData: [{ bank_score: currentScore }],
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
            setLoading(false);
            revealScoreAttestations();
        }
    };

    return (
        <Banner
            wrapperClassName="w-full"
            text="Mint your Bank score Attestation"
            btnText="Claim"
            bgImg={bg1}
            btnProps={{ isLoading: loading, onClick: () => claimScore() }}
        >
            <div className={clsx(className, "flex justify-between")}>
                <div className="flex items-baseline">
                    {recentScore &&
                        <>
                            <span className="mr-2">
                                You have scored previously:
                            </span>
                            <Typography
                                className="!font-black !text-accept" // todo: apply different colors
                                variant="heading2"
                            >
                                {recentScore}
                            </Typography>
                        </>}
                </div>
                <div className="flex items-baseline">
                    <span className="mr-2">
                        You are eligible to claim
                    </span>
                    <Typography
                        className={clsx(currentScore > (recentScore ?? 0) && "!text-accept", "!font-black")} // todo: apply different colors
                        variant="heading2"
                    >
                        {currentScore}
                    </Typography>
                </div>
            </div>
        </Banner>
    )
}

export default ScoreBanner