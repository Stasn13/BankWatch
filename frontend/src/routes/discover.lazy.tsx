import { createLazyFileRoute, useNavigate } from '@tanstack/react-router'
import { Typography } from '../ui/Typography'
import { Card, CardContent, CardHeader } from '../ui/Card'
import BadgeCard from '../ui/BadgeCard'
import { badgesData, LINEA_SEPOLIA_BANK_SCORE, LINEA_SEPOLIA_PORTAL_ADDRESS } from '../constants'
import Transactions from '../components/Transcations'
import { Input } from '../ui/Input'
import { useEffect, useMemo, useState } from 'react'
import { Button } from '../ui/Button'
import { Attestation, VeraxSdk } from '@verax-attestation-registry/verax-sdk'
import Statistics from '../components/Statistics'
import { abi } from '../abi/aave-contract'
import { useReadContract } from 'wagmi';
import { sepolia } from 'viem/chains'
import { borrowDataAdapter } from '../utils/borrowDataAdapter';
import bg1 from "../assets/img/purple-gradient.png";
import clsx from 'clsx'

// type DiscoverSearch = {
//     address: string
// }

export const Route = createLazyFileRoute('/discover')({
    component: Discover,
})

function Discover() {
    // @ts-ignore
    const { address } = Route.useSearch();
    const navigate = useNavigate();
    const [searchAddress, setSearchAddress] = useState(address);
    const [requestAddress, setRequestAddress] = useState(address);
    const [revealLoading, setRevealLoading] = useState(false);
    const [revealScoreLoading, setRevealScoreLoading] = useState(false);
    const [badgesAttestations, setBadgesAttestations] = useState<typeof badgesData>([]);
    const [scoreAttestations, setScoreAttestations] = useState<Attestation[]>([]);
    const veraxSdk = new VeraxSdk(VeraxSdk.DEFAULT_LINEA_SEPOLIA_FRONTEND, address); // Todo find the way to instaniate only once per app
    //@ts-ignore
    const recentScore = useMemo(() => [...scoreAttestations]?.pop()?.decodedPayload?.[0].bank_score ?? undefined, [scoreAttestations]);

    const revealScoreAttestations = async () => {
        setRevealScoreLoading(true)
        try {
            const scoresList = await veraxSdk.attestation.findBy(50, 0, { portal: LINEA_SEPOLIA_PORTAL_ADDRESS, subject: requestAddress || 0, schema: LINEA_SEPOLIA_BANK_SCORE });
            setScoreAttestations(scoresList);
            console.log(scoresList);
        } catch (e) {
            console.log(`${e}`);
        } finally {
            setRevealScoreLoading(false)
        }
    };

    const revealAttestations = async () => { // TODO: function should be reusable
        setRevealLoading(true);
        try {
            const attestationsList = await veraxSdk.attestation.findBy(
                500,
                0,
                {
                    portal: LINEA_SEPOLIA_PORTAL_ADDRESS,
                    subject: requestAddress || 0
                });
            const attestedBadges = badgesData.filter(badge => attestationsList.filter(attestation => attestation.schema.id === badge.schema).length)
            setBadgesAttestations(attestedBadges)
            console.log(attestedBadges);
        } catch (e) {
            console.log(`${e}`);
        } finally {
            setRevealLoading(false);
        }
    };

    // const revealData = () => {

    // }

    useEffect(() => {
        revealAttestations();
        revealScoreAttestations();
    }, [requestAddress]);

    const { data, isLoading } = useReadContract({
        abi,
        address: "0x6Ae43d3271ff6888e7Fc43Fd7321a503ff738951",
        functionName: 'getUserAccountData',
        chainId: sepolia.id,
        args: [requestAddress],
    })

    const handleSubmit = () => {
        setRequestAddress(searchAddress);
        // @ts-ignore
        navigate({ search: { address: searchAddress } })
    }


    return <div className="flex flex-wrap flex-row gap-2">
        <Card
            className="bg-foreground-light"
            wrapperClassName="mr-[100%] w-[fit-content] mb-2"
        >
            <Typography
                size="heading1"
                variant="heading1"
                className="font-black"
            >
                Discover
            </Typography>
        </Card>
        <div className="mr-[100%] flex gap-4">
            <Input
                className="min-w-[380px]"
                inputClassName="text-[12px] text-secondary-text"
                placeholder='Type address here'
                type="search"
                value={searchAddress}
                onChange={e => setSearchAddress(e.target.value)}
            />
            <Button
                onClick={handleSubmit}
            >
                Check
            </Button>
        </div>
        <Statistics
            wrapperClassName="max-w-[501px] w-full"
            address={address}
            borrowData={borrowDataAdapter(data as bigint[])}
            isLoading={!data && isLoading}
        />
        <Card
            bgImg={bg1}
            wrapperClassName="w-[calc(100%-501px-0.5rem)] overflow-hidden"
        >
            <CardHeader>
                <Typography>Bank Score minted:</Typography>
            </CardHeader>
            <CardContent className="gird">
                <Typography
                    variant="heading1"
                    size="heading1"
                    className={clsx(
                        "place-self-center",
                        revealScoreLoading && "animate-pulse bg-foreground-light text-foreground-light rounded-xl w-[60px] h-[48px]")}
                >
                    {recentScore || "n/a"}
                </Typography>
            </CardContent>
        </Card>
        <Card
            className="bg-foreground-light flex flex-col !p-0 !pb-3"
            wrapperClassName="w-full"
        >
            <Typography
                className="p-6 pb-4"
                size='heading5'
            >
                Claimed Badges:
            </Typography>
            <div className="flex gap-2 w-full overflow-x-auto snap-mandatory">
                {revealLoading ?
                    <BadgeCard
                        wrapperClassName="min-w-[165px] snap-start first:ml-6 last:mr-6 mb-3"
                        badge={badgesData[0]}
                        onClick={() => revealAttestations()}
                        attested
                        loading={false}
                        revealLoading={revealLoading}
                        showOnly />
                    :
                    badgesAttestations.map(badge => (
                        <BadgeCard
                            wrapperClassName="min-w-[165px] snap-start first:ml-6 last:mr-6 mb-3"
                            badge={badge}
                            onClick={() => revealAttestations()}
                            attested
                            loading={false}
                            showOnly
                        />
                    ))}
                {!revealLoading && badgesAttestations.length === 0 && (
                    <div className="h-[251px] grid m-auto">
                        <Typography className="place-self-center">
                            No claimed badges yet ...
                        </Typography>
                    </div>
                )}
            </div>
            {/* TODO: add score */}
        </Card>
        <Transactions />
    </div>
}
