import { formatUnits, etherUnits } from 'viem';

export const borrowDataNumbers = (data?: bigint[]) => {
    const healthScore = Number(formatUnits((data as bigint[])?.[5] || 0n, etherUnits.wei));
    const healthScoreAdapted = healthScore > 10000 ? "n/a" : healthScore.toFixed(2);
    const totalDebt = (Number(formatUnits((data as bigint[])?.[1] || 0n, etherUnits.gwei)) * 10).toFixed(2);
    const totalCollateralBase = (Number(formatUnits((data as bigint[])?.[0] || 0n, etherUnits.gwei)) * 10).toFixed(2);

    return {
        healthScore,
        healthScoreAdapted,
        totalDebt: Number(totalDebt),
        totalCollateralBase: Number(totalCollateralBase)
    }
}

export const borrowDataAdapter = (data?: bigint[]) => {
    const { healthScoreAdapted, totalDebt, totalCollateralBase } = borrowDataNumbers(data);

    const borrowData = [
        {
            name: "Health score:",
            value: healthScoreAdapted,
            color: Number(healthScoreAdapted) > 3 ? "text-accept" : "text-destructive"
        },
        { name: "Total debt:", value: `${totalDebt}$` },
        { name: "Total collateral:", value: `${totalCollateralBase}$` },
    ];

    return borrowData
}