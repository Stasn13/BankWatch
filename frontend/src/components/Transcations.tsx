import { Card, CardHeader } from '../ui/Card';
import { Button } from '../ui/Button';
import clsx from 'clsx';

import { Typography } from '../ui/Typography';
import { CardComponentProps } from '../ui/Card/types';
import { ReactNode } from 'react';
import { ButtonProps } from '../ui/Button/types';

type TransactionsProps = CardComponentProps & {
    text?: string
    btnText?: string
    btnClassName?: string
    children?: ReactNode
    btnProps?: ButtonProps
}

const Transactions = ({ className, wrapperClassName, bgImg, text, btnText, children, btnClassName, btnProps }: TransactionsProps) => {

    return (
        <Card
            className={clsx(className, "bg-foreground-light text-left")}
            wrapperClassName={clsx(wrapperClassName, "overflow-hidden")}
        >
            transactions coming soon...
            {/* {
  repays(where:{user: "0x230cDe8909aeBBc48CfBDf6fCc9A642439d77F83"}, orderBy: blockTimestamp, orderDirection: desc) {
    user
    amount
    blockTimestamp
    reserve
  }
  borrows(where:{user: "0x230cDe8909aeBBc48CfBDf6fCc9A642439d77F83"}) {
    id
    reserve
    user
    onBehalfOf
    amount
  }
} */}
        </Card>
    )
}

export default Transactions
