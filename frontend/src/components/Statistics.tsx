import { useReadContract } from 'wagmi';
import { Card } from '../ui/Card';
import BadgeCard from '../ui/BadgeCard';

import badge1 from '../assets/64182.svg';
import badge2 from '../assets/64183.svg';
import badge3 from '../assets/66917.svg';
import badge4 from '../assets/66918.svg';

const badgesData = [
    {
        name: "Badge",
        description: "Lorem ipsum dolor sit amet",
        img: badge1
    },
    {
        name: "Badge",
        description: "Lorem ipsum dolor sit amet",
        img: badge2
    },
    {
        name: "Badge",
        description: "Lorem ipsum dolor sit amet",
        img: badge3
    },
    {
        name: "Badge",
        description: "Lorem ipsum dolor sit amet",
        img: badge4
    }
]

const Statistics = () => {

    const { data } = useReadContract({
        // ...wagmiContractConfig,
        functionName: 'balanceOf',
        args: ['0x230cDe8909aeBBc48CfBDf6fCc9A642439d77F83'], // todo: Change to user address
    })

    console.log(data)

    return (
        <Card className="bg-foreground-light">
            <section className="mt-8">Historical data of user lend/borrow interaction with calculating of Health Rate</section>
            <div className="flex gap-3">
                {badgesData.map(badge => <BadgeCard badge={badge}/>)}
                {/* <BadgeCard />
                <BadgeCard />
                <BadgeCard /> */}
            </div>
        </Card>
    )
}

export default Statistics