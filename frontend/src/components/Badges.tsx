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

const Badges = () => {

    return (
        <Card className="bg-foreground-light">
            <section className="mb-8">Historical data of user lend/borrow interaction with calculating of Health Rate</section>
            <div className="flex gap-3">
                {badgesData.map(badge => <BadgeCard badge={badge} key={badge.name}/>)}
                {/* <BadgeCard />
                <BadgeCard />
                <BadgeCard /> */}
            </div>
        </Card>
    )
}

export default Badges
