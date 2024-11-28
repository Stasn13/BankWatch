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
import Transactions from '../components/Transcations'
import { borrowDataAdapter } from '../utils/borrowDataAdapter'
import { userStatisticsAdapter } from '../utils/userStatisticsAdapter'
import { ConnectKitButton } from 'connectkit'
import clsx from 'clsx'

export const Route = createLazyFileRoute('/dashboard')({
    component: Dashboard,
})

function Dashboard() {
    const { address, isConnected } = useAccount();
    const navigate = useNavigate();
    const veraxSdk = new VeraxSdk(VeraxSdk.DEFAULT_LINEA_SEPOLIA_FRONTEND, address);

    const { data, isLoading } = useReadContract({
        abi,
        address: "0x6Ae43d3271ff6888e7Fc43Fd7321a503ff738951",
        functionName: 'getUserAccountData',
        chainId: sepolia.id,
        args: [address],
        // old - 0x0562453c3DAFBB5e625483af58f4E6D668c44e19
    })

    const userStatistics = userStatisticsAdapter(data as bigint[]);

    return (
        <div className={clsx(!isConnected && "h-[98vh] overflow-hidden", "flex flex-row flex-wrap gap-2 relative")}>
            {!isConnected &&
                <div
                    className="absolute w-full h-full z-10 grid"
                    style={{
                        background: "linear-gradient(to top, rgb(0, 0, 0) 42%, transparent)"
                    }}>
                    <div className='place-self-center'>
                        <ConnectKitButton />
                    </div>
                </div>
            }
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
                borrowData={borrowDataAdapter(data as bigint[])}
                isLoading={isLoading}
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
            <Transactions />
            <ScoreBanner
                veraxSdk={veraxSdk}
                address={address}
                userStatistics={userStatistics}
            />
            <Card className="bg-foreground-light" wrapperClassName="w-full relative h-[120px]">
                <Typography
                    className="mb-4"
                    size='heading5'
                >
                    APY of various tokens on different lend/borrow protocols
                </Typography>

                <Typography className="rounded-xl border px-2 absolute top-3 right-3 font-black">Coming soon ...</Typography>
            </Card>
        </div>
    )
}
