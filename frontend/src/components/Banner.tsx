import { Card, CardHeader } from '../ui/Card';
import { Button } from '../ui/Button';
import clsx from 'clsx';

import { Typography } from '../ui/Typography';
import { CardComponentProps } from '../ui/Card/types';
import { ReactNode } from 'react';

type BannerProps = CardComponentProps & {
    text?: string
    btnText?: string
    btnClassName?: string
    children?: ReactNode
}

const Banner = ({ className, wrapperClassName, bgImg, text, btnText, children, btnClassName }: BannerProps) => {

    return (
        <Card
            className={clsx(className, "bg-foreground-light text-left")}
            wrapperClassName={clsx(wrapperClassName, "overflow-hidden")}
            bgImg={bgImg}
        >
            <CardHeader>
                <Typography
                    size='heading5'
                >
                    {text}
                </Typography>
                <Button
                    variant="primary"
                    className={btnClassName}
                >
                    {btnText}
                </Button>
            </CardHeader>
            {children}
        </Card>
    )
}

export default Banner
