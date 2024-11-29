import clsx from "clsx";
import { CheckIcon } from "../../assets/icons/Check";
import { badgesData } from "../../constants";
import { Button } from "../Button";
import { Card } from "../Card"
import { Typography } from "../Typography";


const BadgeCard = ({ className, wrapperClassName, badge, onClick, attested, loading, revealLoading, disabled, showOnly }: { className?: string, wrapperClassName?: string, badge: typeof badgesData[0], onClick: () => void, attested: boolean, loading: boolean, revealLoading?: boolean, disabled?: boolean, showOnly?: boolean }) => {
    const { img, name, description } = badge
    return (
        <Card
            className={clsx(className, "bg-black")} // pb-8
            wrapperClassName={clsx(wrapperClassName,
                disabled && "opacity-30",
                revealLoading && "animate-pulse bg-foreground-light opacity-70",
                "min-w-[220px] basis-[calc(33.33333%-0.75rem)] lg:basis-[calc(25%-0.75rem)] relative")}
        >
            <Typography
                component="p"
                className={clsx(showOnly && "text-[12px]",
                    "text-primary-text text-left mb-2",
                    revealLoading && "animate-pulse bg-foreground-light !text-[#fafafa00]")}
            >
                {name}
            </Typography>
            <img src={img} alt={name} className={clsx(revealLoading && "animate-pulse object-[-400px]", "mb-4 rounded-lg")}
                style={{
                    background: "linear-gradient(217deg, #000, rgba(255,0,0,0) 70.71%), linear-gradient(138deg, #000000, rgba(0,255,0,0) 70.71%), linear-gradient(319deg, #434343, rgba(0,0,255,0) 90.71%)"
                }} />
            {!showOnly && (
                <>
                    <Typography
                        size="body3"
                        className="text-secondary-text text-left mb-2 h-[96px]"
                    >
                        {description}
                    </Typography>
                </>
            )}
            {!disabled &&
                <Button
                    className={clsx(attested && "disabled:opacity-100 px-0", 
                    revealLoading && "animate-pulse bg-foreground-light text-[#ffffff00]",
                    "ml-auto")}
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
