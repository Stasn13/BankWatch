import clsx from 'clsx';
import { Typography } from '../ui/Typography';

type ScoreBannerProps = {
    className?: string
}

const ScoreBanner = ({ className }: ScoreBannerProps) => {

    return (
        <div className={clsx(className, "flex justify-between")}>
            <div className="flex items-baseline">
                <span className="mr-2">
                    You have scored previously:
                </span>
                <Typography
                    className="!font-black text-accept" // todo: apply different colors
                    variant="heading2"
                >
                    34
                </Typography>
            </div>
            <div className="flex items-baseline">
                <span className="mr-2">
                    You are eligible to claim
                </span>
                <Typography
                    className="!font-black text-accept" // todo: apply different colors
                    variant="heading2"
                >
                    48
                </Typography>
            </div>
        </div>
    )
}

export default ScoreBanner