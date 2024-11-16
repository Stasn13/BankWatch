import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import clsx from 'clsx';

import { Typography } from '../ui/Typography';
import { CardComponentProps } from '../ui/Card/types';

type BannerProps = CardComponentProps & {
    text?: string
    buttonText?: string
}

const Banner = ({ className, wrapperClassName, bgImg, text, buttonText }: BannerProps) => {

    return (
        <Card
            className={clsx(className, "bg-foreground-light text-left")}
            wrapperClassName={clsx(wrapperClassName, "overflow-hidden")}
            bgImg={bgImg}
        >
            <Typography
                size='heading5'
            >
                {text}
            </Typography>
            <Button
                variant="primary"
                className="absolute bottom-4 right-4"
            >
                {buttonText}
            </Button>
        </Card>
    )
}

export default Banner
