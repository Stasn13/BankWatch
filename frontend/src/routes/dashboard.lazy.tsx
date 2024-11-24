import * as React from 'react'
import { createLazyFileRoute, useNavigate } from '@tanstack/react-router'
import Badges from '../components/Badges'
import Banner from '../components/Banner'
import ScoreBanner from '../components/ScoreBanner'
import Statistics from '../components/Statistics'
import { Card } from '../ui/Card'
import { Typography } from '../ui/Typography'
import { VeraxSdk } from '@verax-attestation-registry/verax-sdk'
import { useAccount, useReadContract } from 'wagmi';
import bg2 from "../assets/img/bg2.png";
import { abi } from '../abi/aave-contract';
import { sepolia } from 'wagmi/chains';
import { formatUnits, etherUnits } from 'viem';

export const Route = createLazyFileRoute('/dashboard')({
    component: Dashboard,
})

function Dashboard() {
    const { address } = useAccount();
    const navigate = useNavigate();
    const veraxSdk = new VeraxSdk(VeraxSdk.DEFAULT_LINEA_SEPOLIA_FRONTEND, address);
    if (!address) return
    const { data, isLoading } = useReadContract({
        abi,
        address: "0x6Ae43d3271ff6888e7Fc43Fd7321a503ff738951",
        functionName: 'getUserAccountData',
        chainId: sepolia.id,
        args: [address],
        // old - 0x0562453c3DAFBB5e625483af58f4E6D668c44e19
    })

    if (isLoading) return; // todo implement skeleton

    const healthScore = Number(formatUnits((data as bigint[])[5], etherUnits.wei)).toFixed(2); // > 3 = yellow, > 2 = red
    const totalDebt = (Number(formatUnits((data as bigint[])[1], etherUnits.gwei)) * 10).toFixed(2);
    const totalCollateralBase = (Number(formatUnits((data as bigint[])[0], etherUnits.gwei)) * 10).toFixed(2)
    const borrowData = [
        { name: "Health score:", value: healthScore, color: Number(healthScore) > 3 ? "text-accept" : "desctructive" },
        { name: "Total debt:", value: `${totalDebt}$` },
        { name: "Total collateral:", value: `${totalCollateralBase}$` },
    ];
    const userStatistics = {
        healthScore,
        totalDebt,
        totalCollateralBase
    }

    return (
        <>
            <Card
                className="bg-foreground-light"
                wrapperClassName="mb-2"
            >
                <Typography
                    size="heading1"
                    variant="heading1"
                    className="font-black"
                >
                    Dashboard
                </Typography>
            </Card>
            <Badges
                veraxSdk={veraxSdk}
                userStatistics={userStatistics}
            />
            <Statistics
                className="w-[320px]"
                address={address}
                borrowData={borrowData}
            />
            <Banner wrapperClassName="flex-1"
                bgImg={bg2}
                text="Now you can observe other wallets eligibility"
                btnText="Discover"
                btnProps={{
                    onClick: () => navigate({ to: '/discover', search: { address: '0x230cDe8909aeBBc48CfBDf6fCc9A642439d77F83' } })
                }}
                btnClassName="absolute bottom-4 right-4"
            />
            <Card className="bg-foreground-light" wrapperClassName="w-full">
                (comming soon)
                <section className="mb-8">Historical data of user lend/borrow interaction with calculating of Health Rate</section>
                {/* {
  repays(where:{user: "0x230cDe8909aeBBc48CfBDf6fCc9A642439d77F83"}, orderBy: blockTimestamp, orderDirection: desc) {
    user
    amount
    blockTimestamp
    reserve
  }
  borrows(where:{user: "0x230cDe8909aeBBc48CfBDf6fCc9A642439d77F83"}) {
    id
    reserve
    user
    onBehalfOf
    amount
  }
} */}
            </Card>
            <ScoreBanner
                veraxSdk={veraxSdk}
                address={address}
                userStatistics={userStatistics}
            />
            <Card className="bg-foreground-light" wrapperClassName="w-full">
                (comming soon)
                <section className="mt-8 w-full">APY of various tokens through some lend/borrow protocols (aave, ...)</section>
            </Card>
        </>
    )
}
