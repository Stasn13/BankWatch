import { borrowDataNumbers } from "./borrowDataAdapter";

export const userStatisticsAdapter = (data?: bigint[]) => {
    const { healthScore, totalDebt, totalCollateralBase } = borrowDataNumbers(data);
    return {
        healthScore,
        totalDebt,
        totalCollateralBase
    }
}