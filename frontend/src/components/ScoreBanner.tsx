import clsx from 'clsx';
import { Typography } from '../ui/Typography';
import { Attestation, VeraxSdk } from '@verax-attestation-registry/verax-sdk';
import Banner from './Banner';
import { useEffect, useMemo, useState } from 'react';
import bg1 from "../assets/img/purple-gradient.png";
import { LINEA_SEPOLIA_BANK_SCORE, LINEA_SEPOLIA_PORTAL_ADDRESS, UserStatistics } from '../constants';
import { calculateScore } from '../utils/calculateScore';
import { wagmiConfig } from '../web3provider';
import { waitForTransactionReceipt } from 'viem/actions';

type ScoreBannerProps = {
    className?: string
    veraxSdk: VeraxSdk
    address?: `0x${string}`
    userStatistics: UserStatistics
}

const ScoreBanner = ({ className, veraxSdk, address, userStatistics }: ScoreBannerProps) => {
    const [loading, setLoading] = useState(false);
    const [revealLoading, setRevealLoading] = useState(false);
    const [scoreAttestations, setScoreAttestations] = useState<Attestation[]>([]);
    // @ts-ignore
    const recentScore = useMemo(() => scoreAttestations?.pop()?.decodedPayload?.[0].bank_score ?? undefined, [scoreAttestations]);
    const currentScore = useMemo(() => {
        if (!userStatistics) return 0;
        const { healthScoreAdapted, totalCollateralBase, totalDebt } = userStatistics;
        return calculateScore(Number(healthScoreAdapted), Number(totalCollateralBase), Number(totalDebt));

    }, [userStatistics?.healthScore, userStatistics?.totalCollateralBase, userStatistics?.totalDebt]);

    const revealScoreAttestations = async () => {
        setRevealLoading(true)
        try {
            const scoresList = await veraxSdk.attestation.findBy(50, 0, { portal: LINEA_SEPOLIA_PORTAL_ADDRESS, subject: address, schema: LINEA_SEPOLIA_BANK_SCORE });
            setScoreAttestations(scoresList)
        } catch (e) {
            console.log(`${e}`);
        } finally {
            setRevealLoading(false)
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
            setRevealLoading(true);
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
                    {revealLoading ? (
                        <div className="animate-pulse bg-foreground-light text-foreground-light rounded-xl w-[210px] h-[36px]" />)
                        :
                        recentScore &&
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
                        </>
                    }
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