import { Button } from "../Button";
import { Card } from "../Card"
import { Typography } from "../Typography";


const BadgeCard = ({ badge }) => {
    const { img, name, description } = badge

    return (
        <Card className="bg-black pb-8">
            <Typography component="p" className="text-primary-text text-left mb-2">{name}</Typography>
            <img src={img} alt={name} className="mb-4 rounded-lg"
                style={{
                    background: "linear-gradient(217deg, #000, rgba(255,0,0,0) 70.71%), linear-gradient(138deg, #000000, rgba(0,255,0,0) 70.71%), linear-gradient(319deg, #434343, rgba(0,0,255,0) 90.71%)"
                }} />
            <Typography className="text-left mb-2">{description}</Typography>
            <Button className="ml-auto" size="sm" variant="outline">Mint</Button>
        </Card>
    )
}

export default BadgeCard;
