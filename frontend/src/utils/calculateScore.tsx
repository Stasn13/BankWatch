export const calculateScore = (healthScore: number, totalCollateralBase: number, totalDebt: number) => {
    const healthRate = () => {
        switch (true) {
            case healthScore >= 25:
                return 25;
            case healthScore >= 10:
                return 15;
            case healthScore >= 3:
                return 18;
            case healthScore >= 1:
                return 9;
            default:
                return 2;
        }
    }

    const debtRate = () => {
        switch (true) {
            case totalDebt >= 10000:
                return 2;
            case totalDebt >= 5000:
                return 6;
            case totalDebt >= 1000:
                return 12;
            case totalDebt >= 500:
                return 28;
            case totalDebt >= 100:
                return 25;
            default:
                return 21;
        }
    }
    const collateralRate = () => {
        switch (true) {
            case totalCollateralBase >= 20000:
                return 25;
            case totalCollateralBase >= 15000:
                return 18;
            case totalCollateralBase >= 10000:
                return 12;
            case totalCollateralBase >= 1000:
                return 9;
            case totalCollateralBase >= 500:
                return 3;
            default:
                return 21;
        }
    }

    return healthRate() + debtRate() + collateralRate()

}