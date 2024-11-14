import { Card } from "../Card"


const BadgeCard = ({badge}) => {
    const {img, name} = badge

    return (
        <Card className="bg-black">
            <img src={img} alt={name} />
        </Card>
    )
}

export default BadgeCard;
