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
    isLoading?: boolean
}

const Statistics = ({ className, borrowData, isLoading }: StatisticsProps) => {

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
                        {isLoading ?
                            <div className="animate-pulse bg-foreground-light text-foreground-light rounded-xl w-[80px] h-[24px]" />
                            :
                            <span className={color}>{value}</span>
                        }
                    </div>
                ))}
            </div>
        </Card>
    )
}

export default Statistics
