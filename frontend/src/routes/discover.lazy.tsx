import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import { Typography } from '../ui/Typography'
import { Card } from '../ui/Card'
import Badges from '../components/Badges'
import BadgeCard from '../ui/BadgeCard'
import { badgesData } from '../constants'
import Transactions from '../components/Transcations'

export const Route = createLazyFileRoute('/discover')({
    component: Discover,
})

function Discover() {
    const { address } = Route.useSearch()

    return <>
        <Card
            className="bg-foreground-light"
            wrapperClassName="mb-2"
        >
            <Typography
                size="heading1"
                variant="heading1"
                className="font-black mb-2"
            >
                Discover
            </Typography>
            <Typography
                size="heading3"
                variant="heading1"
                className="font-black"
            >
                {address}
            </Typography>
        </Card>
        <Card
            className="bg-foreground-light"
            wrapperClassName="mb-2"
        >
            <BadgeCard badge={badgesData[0]} onClick={function (): void {
                throw new Error('Function not implemented.')
            }} attested={false} loading={false} />
        </Card>
        <Transactions />
    </>
}
