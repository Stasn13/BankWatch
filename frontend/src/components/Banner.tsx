import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import clsx from 'clsx';
import bg1 from "../assets/img/purple-gradient.png";
import bg2 from "../assets/img/bg2.png";
import { Typography } from '../ui/Typography';

type BannerProps = {
    className?: string
    wrapperClassName?: string
}

const Banner = ({ className, wrapperClassName }: BannerProps) => {

    return (
        <Card
            className={clsx(className, "bg-foreground-light text-left")}
            wrapperClassName={clsx(wrapperClassName, "overflow-hidden")}
            bgImg={bg2}
        >
            <Typography
                size='heading5'>
                Commercial with CTA to check eligibility another wallet
            </Typography>
            <Button
                variant="primary"
                className="absolute bottom-4 right-4"
            >
                tst
            </Button>
        </Card>
    )
}

export default Banner
