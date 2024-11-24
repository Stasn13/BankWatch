import clsx from "clsx";
import { CheckIcon } from "../../assets/icons/Check";
import { badgesData } from "../../constants";
import { Button } from "../Button";
import { Card } from "../Card"
import { Typography } from "../Typography";


const BadgeCard = ({ className, badge, onClick, attested, loading, disabled }: { className?: string, badge: typeof badgesData[0], onClick: () => void, attested: boolean, loading: boolean, disabled?: boolean }) => {
    const { img, name, description } = badge

    return (
        <Card
            className="bg-black" // pb-8
            wrapperClassName={clsx(className, disabled && "opacity-30", "min-w-[220px] basis-1/4 relative")}
        >
            <Typography
                component="p"
                className="text-primary-text text-left mb-2"
            >
                {name}
            </Typography>
            <img src={img} alt={name} className="mb-4 rounded-lg"
                style={{
                    background: "linear-gradient(217deg, #000, rgba(255,0,0,0) 70.71%), linear-gradient(138deg, #000000, rgba(0,255,0,0) 70.71%), linear-gradient(319deg, #434343, rgba(0,0,255,0) 90.71%)"
                }} />
            <Typography
                size="body3"
                className="text-secondary-text text-left mb-2"
            >
                {description}
            </Typography>
            {!disabled &&
                <Button
                    className={clsx(attested && "disabled:opacity-100 px-0", "ml-auto")}
                    size="sm"
                    variant={attested ? "ghost" : "outline"}
                    disabled={attested}
                    onClick={onClick}
                    isLoading={loading}
                >
                    {attested ? "Attested" : "Mint"}
                </Button>
            }
            <CheckIcon
                size={28}
                className="absolute top-2 right-2"
                checked={attested}
            />
        </Card>
    )
}

export default BadgeCard;
