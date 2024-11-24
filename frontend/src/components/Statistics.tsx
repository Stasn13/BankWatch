import { Card } from '../ui/Card';
import clsx from 'clsx';
import { Typography } from '../ui/Typography';

type StatisticsProps = {
    className?: string
    address?: `0x${string}`
    borrowData: {
        name: string;
        value: string;
        color?: string;
    }[]
}

const Statistics = ({ className, borrowData }: StatisticsProps) => {

    return (
        <Card className={clsx(className, "bg-foreground-light text-left")}>
            <Typography
                className="mb-4"
                size='heading5'
            >
                Wallet borrow data:
            </Typography>
            <div>
                {borrowData.map(({ name, value, color }) => (
                    <div className="flex justify-between mb-1" key={name}>
                        <span>{name}</span>
                        <span className={color}>{value}</span>
                    </div>
                ))}
            </div>
        </Card>
    )
}

export default Statistics
