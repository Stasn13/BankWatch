import { createLazyFileRoute, useNavigate } from '@tanstack/react-router'
import { Typography } from '../ui/Typography'
import { Card, CardContent, CardHeader } from '../ui/Card'
import Banner from '../components/Banner'
import bg2 from "../assets/img/bg2.png";
import { HealthIcon } from '../assets/icons/Health';
import { PiggyBankIcon } from '../assets/icons/PiggyBank';
import { ShieldIcon } from '../assets/icons/Shield';
import { CoinsIcon } from '../assets/icons/Coins';

export const Route = createLazyFileRoute('/')({
    component: Home,
})

const keyFeatures = [
    {
        title: "Trustworthy Attestations",
        desc: "Receive blockchain-based badges that validate your lending and borrowing activities.",
        icon: <CoinsIcon className='place-self-center' />
    },
    {
        title: "Health Score Analysis",
        desc: "Get detailed evaluations of your financial activity with a unique health score metric.",
        icon: <HealthIcon className='place-self-center' />
    },
    {
        title: "Collateral Management",
        desc: "Evaluate and track the value of your collateral with ease.",
        icon: <PiggyBankIcon className='place-self-center' />
    },
    {
        title: "Decentralized Verification",
        desc: "Proof of financial integrity is now accessible and verifiable.",
        icon: <ShieldIcon className='place-self-center' />
    },
]

function Home() {
    const navigate = useNavigate();
    return (
        <>
            <section
                className="h-[100vh] rounded-xl grid"
                style={{ background: "radial-gradient(100% 100% at 50% 0,rgba(105, 105, 255, .7) 0,transparent 100%),#0a0a0a" }}
            >
                <div className='place-self-center max-w-[960px] w-full flex flex-col align-start p-4 pb-10'>
                    <Typography
                        variant='heading1'
                        className="rounded-lg bg-black grid justify-center font-black px-4 py-2 mb-4 w-[fit-content]"
                    >
                        BankWatch
                    </Typography>
                    <Typography
                        variant='heading2'
                        size='heading3'
                        className="font-bold px-4 mb-2"
                    >
                        Empowering Transparency in Lending and Borrowing
                    </Typography>
                    <Typography
                        variant='heading4'
                        size='body2'
                        className="px-4 font-medium max-w-[600px] leading-[1.7]"
                    >
                        A Decentralized Solution for Attesting Financial Activities powered by &nbsp;
                        <a
                            target='_blank'
                            href='https://explorer.ver.ax/linea-sepolia'
                            className="text-primary text-lg font-bold"
                        >
                            Verax
                        </a>.
                        BankWatch revolutionizes the lending and borrowing ecosystem by providing decentralized, verifiable, and transparent evaluations of financial activity. Build trust and accountability with blockchain-powered attestations.
                    </Typography>
                </div>
            </section>
            <Card className="bg-foreground-light mb-6">
                <CardHeader>
                    <Typography
                        variant='heading2'
                        size='heading3'
                        className="font-bold mb-2"
                    >
                        What is BankWatch?
                    </Typography>
                </CardHeader>
                <CardContent className="font-medium max-w-[600px]">
                    BankWatch is a cutting-edge decentralized application designed to evaluate and attest to the health and activity of lending and borrowing on the blockchain. Our platform ensures transparency, credibility, and efficiency in the financial ecosystem by leveraging the power of decentralized technology.
                </CardContent>
            </Card>
            <section className="mb-6">
                <Typography
                    variant='heading2'
                    size='heading3'
                    className="font-black mb-4 text-left pl-6"
                >
                    Key Features:
                </Typography>
                <div className="flex gap-2 flex-wrap">
                    {keyFeatures.map(({ title, desc, icon }) => (
                        <Card
                            className="bg-foreground-light flex gap-6"
                            wrapperClassName="basis-[calc(50%-0.25rem)] lg:basis-[calc(33.333%-0.38rem)]"
                            key={title}
                        >
                            <div className="grid">{icon}</div>
                            <div>
                                <Typography className="mb-3 font-bold" variant="body1">
                                    {title}
                                </Typography>
                                <Typography size="body2" className="font-normal">
                                    {desc}
                                </Typography>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>
            <Banner wrapperClassName="flex-1 mb-6"
                bgImg={bg2}
                text="Get an example how addresses might be attested"
                btnText="Show me"
                btnProps={{
                    onClick: () => navigate({ to: '/discover', search: { address: '0x230cDe8909aeBBc48CfBDf6fCc9A642439d77F83' } })
                }}
            // btnClassName="absolute bottom-4 right-4"
            />
            <section>
                <Card className="bg-foreground-light max-w-[960px] mb-6">
                    <CardHeader>
                        <Typography
                            variant='heading2'
                            size='heading3'
                            className="font-bold mb-2"
                        >
                            How It Works:
                        </Typography>
                    </CardHeader>
                    <CardContent>
                        <Typography
                            variant='body1'
                            // size='heading3'
                            className="font-bold mb-2"
                        >
                            1. Connect Your Wallet
                        </Typography>
                        <Typography
                            variant='heading2'
                            size='body2'
                            className="font-normal mb-4"
                        >
                            Start by securely connecting your wallet to BankWatch.
                        </Typography>
                        <Typography
                            variant='body1'
                            className="font-bold mb-2"
                        >
                            2.	Get Evaluated
                        </Typography>
                        <Typography
                            variant='heading2'
                            size='body2'
                            className="font-normal mb-4"
                        >
                            Allow our system to assess your lending/borrowing activity on the &nbsp;
                            <a
                                target='_blank'
                                href='https://alpha.zerolend.xyz/dashboard/?marketName=proto_sepolia_v3'
                                className="text-primary font-bold"
                            >
                                ZeroLend
                            </a>
                            , generating a comprehensive report.
                            {/* https://alpha.zerolend.xyz/dashboard/?marketName=proto_sepolia_v3 */}
                        </Typography>
                        <Typography
                            variant='body1'
                            // size='heading3'
                            className="font-bold mb-2"
                        >
                            3.	Receive Attestations
                        </Typography>
                        <Typography
                            variant='heading2'
                            size='body2'
                            className="font-normal mb-4"
                        >
                            Earn decentralized badges or min your Bank Score
                        </Typography>
                        <Typography
                            variant='body1'
                            // size='heading3'
                            className="font-bold mb-2"
                        >
                            4.	Share and Grow
                        </Typography>
                        <Typography
                            variant='heading2'
                            size='body2'
                            className="font-normal mb-4"
                        >
                            Share your attestations with potential lenders or borrowers to build trust and unlock better financial opportunities.
                        </Typography>
                    </CardContent>
                </Card>
                {/* todo: add link to zeroLend */}
            </section>
        </>
    )
}
