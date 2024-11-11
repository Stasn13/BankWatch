import { useReadContract } from 'wagmi';
import { Card } from '../ui/Card';

const Statistics = () => {

    const { data } = useReadContract({
        // ...wagmiContractConfig,
        functionName: 'balanceOf',
        args: ['0x230cDe8909aeBBc48CfBDf6fCc9A642439d77F83'], // todo: Change to user address
    })

    console.log(data)

    return (
        <Card className="bg-foreground-light">
            <section className="mt-8">Historical data of user lend/borrow interaction with calculating of Health Rate</section>
        </Card>
    )
}

export default Statistics
