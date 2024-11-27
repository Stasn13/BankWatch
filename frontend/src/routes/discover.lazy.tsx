import { createLazyFileRoute, useNavigate } from '@tanstack/react-router'
import { Typography } from '../ui/Typography'
import { Card } from '../ui/Card'
import BadgeCard from '../ui/BadgeCard'
import { badgesData, LINEA_SEPOLIA_PORTAL_ADDRESS } from '../constants'
import Transactions from '../components/Transcations'
import { Input } from '../ui/Input'
import { useEffect, useState } from 'react'
import { Button } from '../ui/Button'
import { VeraxSdk } from '@verax-attestation-registry/verax-sdk'
import Statistics from '../components/Statistics'
import { abi } from '../abi/aave-contract'
import { useReadContract } from 'wagmi';
import { sepolia } from 'viem/chains'
import { borrowDataAdapter } from '../utils/borrowDataAdapter'

type DiscoverSearch = {
    address: number
}

export const Route = createLazyFileRoute('/discover')({
    component: Discover,
})

function Discover() {
    const { address } = Route.useSearch();
    const navigate = useNavigate();
    const [searchAddress, setSearchAddress] = useState(address);
    const [requestAddress, setRequestAddress] = useState(address);
    const [revealLoading, setRevealLoading] = useState(false);
    const [badgesAttestations, setBadgesAttestations] = useState<typeof badgesData>([]);
    const veraxSdk = new VeraxSdk(VeraxSdk.DEFAULT_LINEA_SEPOLIA_FRONTEND, address); // Todo find the way to instaniate only once per app

    const revealAttestations = async () => { // TODO: function should be reusable
        setRevealLoading(true);
        try {
            const attestationsList = await veraxSdk.attestation.findBy(
                500,
                0,
                {
                    portal: LINEA_SEPOLIA_PORTAL_ADDRESS,
                    subject: address || 0
                });
            const attestedBadges = badgesData.filter(badge => attestationsList.filter(attestation => attestation.schema.id === badge.schema).length)
            setBadgesAttestations(attestedBadges)
            console.log(attestationsList);
        } catch (e) {
            console.log(`${e}`);
        } finally {
            setRevealLoading(false);
        }
    };

    // const revealData = () => {

    // }

    useEffect(() => {
        revealAttestations()
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
        navigate({ search: { address: searchAddress } })
    }


    return <div className="flex flex-wrap flex-col gap-2">
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
                inputClassName="text-[12px] text-primary-text"
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
            className="max-w-[501px]"
            wrapperClassName="w-full"
            address={address}
            borrowData={borrowDataAdapter(data as bigint[])}
            isLoading={isLoading}
        />
        <Card
            className="bg-foreground-light flex flex-col"
            wrapperClassName="w-full"
        >
            <Typography
                className="mb-4"
                size='heading5'
            >
                Claimed Badges:
            </Typography>
            <div className="flex gap-2 flex-wrap">
                {revealLoading ? // true

                    <BadgeCard
                        className="min-w-[165px]"
                        badge={badgesData[0]}
                        onClick={() => revealAttestations()}
                        attested
                        loading={false}
                        revealLoading={revealLoading}
                        showOnly />
                    :
                    badgesAttestations.map(badge => (
                        <BadgeCard
                            className="min-w-[165px]"
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
