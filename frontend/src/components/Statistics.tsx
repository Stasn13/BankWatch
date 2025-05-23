import { Card } from '../ui/Card';
import clsx from 'clsx';
import { Typography } from '../ui/Typography';
import { CardComponentProps } from '../ui/Card/types';

type StatisticsProps = CardComponentProps & {
    className?: string
    address?: `0x${string}`
    borrowData: {
        name: string;
        value: string;
        color?: string;
    }[]
    isLoading?: boolean
}

const Statistics = ({ className, borrowData, isLoading, wrapperClassName }: StatisticsProps) => {

    return (
        <Card
            className={clsx(className, "bg-foreground-light text-left")}
            wrapperClassName={wrapperClassName}
        >
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
