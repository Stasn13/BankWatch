import { useReadContract } from 'wagmi';
import { abi } from '../abi/aave-contract'

import { lineaSepolia, sepolia } from 'wagmi/chains';
import { Card } from '../ui/Card';
import clsx from 'clsx';
import { formatUnits, etherUnits } from 'viem'
import { Typography } from '../ui/Typography';

type StatisticsProps = {
    className?: string
}

const Statistics = ({ className }: StatisticsProps) => {
    const { data, isLoading } = useReadContract({
        abi,
        address: "0x6Ae43d3271ff6888e7Fc43Fd7321a503ff738951",
        functionName: 'getUserAccountData',
        chainId: sepolia.id,
        // chainId: lineaSepolia.id,
        args: ['0x230cDe8909aeBBc48CfBDf6fCc9A642439d77F83'], // todo: Change to user address
        // contract to read 0x6Ae43d3271ff6888e7Fc43Fd7321a503ff738951
        // old - 0x0562453c3DAFBB5e625483af58f4E6D668c44e19
    })

    if (isLoading) return;

    const healthScore = Number(formatUnits((data as bigint[])[5], etherUnits.wei)).toFixed(2); // > 3 = yellow, > 2 = red
    const totalDebt = (Number(formatUnits((data as bigint[])[1], etherUnits.gwei)) * 10).toFixed(2);
    const totalCollateralBase = (Number(formatUnits((data as bigint[])[0], etherUnits.gwei)) * 10).toFixed(2)
    const borrowData = [
        { name: "Health score:", value: healthScore },
        { name: "Total debt:", value: `${totalDebt}$` },
        { name: "Total collateral:", value: `${totalCollateralBase}$` },
    ]

    console.log(data, healthScore)

    return (
        <Card className={clsx(className, "bg-foreground-light text-left")}>
            <Typography
                className="mb-4"
                size='heading5'
            >Wallet borrow data:
            </Typography>
            <div>
                {borrowData.map(({ name, value }) => (
                    <div className="flex justify-between mb-1">
                        <span>{name}</span>
                        <span>{value}</span>
                    </div>
                ))}
            </div>
        </Card>
    )
}

export default Statistics
