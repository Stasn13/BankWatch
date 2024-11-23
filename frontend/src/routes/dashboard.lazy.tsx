import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import Badges from '../components/Badges'
import Banner from '../components/Banner'
import ScoreBanner from '../components/ScoreBanner'
import Statistics from '../components/Statistics'
import { Card } from '../ui/Card'
import { Typography } from '../ui/Typography'
import { VeraxSdk } from '@verax-attestation-registry/verax-sdk'
import { useAccount } from 'wagmi'
import bg2 from "../assets/img/bg2.png";

export const Route = createLazyFileRoute('/dashboard')({
    component: Dashboard,
})

function Dashboard() {
    const { address, chainId, isConnected, chain } = useAccount();
  const veraxSdk = new VeraxSdk(VeraxSdk.DEFAULT_LINEA_SEPOLIA_FRONTEND, address);
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
            />
            <Statistics className="w-[320px]" />
            <Banner wrapperClassName="flex-1"
                bgImg={bg2}
                text="Now you can observe other wallets eligibility"
                btnText="Discover"
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
            <ScoreBanner veraxSdk={veraxSdk} address={address} />
            <Card className="bg-foreground-light" wrapperClassName="w-full">
                (comming soon)
                <section className="mt-8 w-full">APY of various tokens through some lend/borrow protocols (aave, ...)</section>
            </Card>
        </>
    )
}
