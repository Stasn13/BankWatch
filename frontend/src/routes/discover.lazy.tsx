import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import { Typography } from '../ui/Typography'
import { Card } from '../ui/Card'
import Badges from '../components/Badges'
import BadgeCard from '../ui/BadgeCard'
import { badgesData, LINEA_SEPOLIA_PORTAL_ADDRESS } from '../constants'
import Transactions from '../components/Transcations'
import { Input } from '../ui/Input'
import { useEffect, useState } from 'react'
import { Button } from '../ui/Button'
import { Attestation, VeraxSdk } from '@verax-attestation-registry/verax-sdk'
import Statistics from '../components/Statistics'
import { abi } from '../abi/aave-contract'
import { useReadContract } from 'wagmi';
import { sepolia } from 'viem/chains'
import { formatUnits, etherUnits } from 'viem';

export const Route = createLazyFileRoute('/discover')({
    component: Discover,
})

function Discover() {
    const { address } = Route.useSearch();
    const [searchAddress, setSearchAddress] = useState(address);
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

    const revealData = () => {

    }

    useEffect(() => {
        revealAttestations()
    }, [searchAddress]);

    const { data, isLoading } = useReadContract({
        abi,
        address: "0x6Ae43d3271ff6888e7Fc43Fd7321a503ff738951",
        functionName: 'getUserAccountData',
        chainId: sepolia.id,
        args: [searchAddress],
        // old - 0x0562453c3DAFBB5e625483af58f4E6D668c44e19
    })

    // if (isLoading) return; // todo implement skeleton

    const healthScore = Number(formatUnits((data as bigint[])?.[5] || 0n, etherUnits.wei)).toFixed(2);
    const totalDebt = (Number(formatUnits((data as bigint[])?.[1] || 0n, etherUnits.gwei)) * 10).toFixed(2);
    const totalCollateralBase = (Number(formatUnits((data as bigint[])?.[0] || 0n, etherUnits.gwei)) * 10).toFixed(2);
    const borrowData = [
        { name: "Health score:", value: healthScore, color: Number(healthScore) > 3 ? "text-accept" : "desctructive" },
        { name: "Total debt:", value: `${totalDebt}$` },
        { name: "Total collateral:", value: `${totalCollateralBase}$` },
    ];// todo: should be reusable or wrapped in hook

    return <div className="flex flex-wrap flex-col gap-2">
        <Card
            className="bg-foreground-light"
            wrapperClassName="mr-[100%] w-[fit-content]"
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
                inputClassName="text-[12px]"
                type="search"
                value={searchAddress}
                onChange={setSearchAddress}
            />
            <Button>Check</Button>
        </div>
        <Statistics
            className="max-w-[501px]"
            address={address}
            borrowData={borrowData}
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
                {badgesAttestations.map(badge => (
                    <BadgeCard
                        className="min-w-[180px]"
                        badge={badge}
                        onClick={function (): void {
                            throw new Error('Function not implemented.')
                        }}
                        attested
                        loading={false}
                        showOnly
                    />
                ))}
            </div>
        </Card>
        <Transactions />
    </div>
}
