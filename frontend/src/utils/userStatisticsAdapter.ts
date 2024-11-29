import { borrowDataNumbers } from "./borrowDataAdapter";

export const userStatisticsAdapter = (data?: bigint[]) => {
    const { healthScore, healthScoreAdapted, totalDebt, totalCollateralBase } = borrowDataNumbers(data);
    return {
        healthScore,
        totalDebt,
        healthScoreAdapted,
        totalCollateralBase
    }
}