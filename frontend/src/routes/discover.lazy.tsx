import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import { Typography } from '../ui/Typography'
import { Card } from '../ui/Card'
import Badges from '../components/Badges'
import BadgeCard from '../ui/BadgeCard'
import { badgesData } from '../constants'
import Transactions from '../components/Transcations'
import { Input } from '../ui/Input'
import { useState } from 'react'
import { Button } from '../ui/Button'

export const Route = createLazyFileRoute('/discover')({
    component: Discover,
})

function Discover() {
    const { address } = Route.useSearch();
    const [searchAddress, setSearchAddress] = useState(address)

    return <div className="flex flex-wrap gap-2">
        <Card
            className="bg-foreground-light"
            wrapperClassName="mr-[100%] w-[fit-content]"
        >
            <Typography
                size="heading1"
                variant="heading1"
                className="font-black"
            >
                Discover
            </Typography>
        </Card>
        <div className="mr-[100%] flex gap-4">
            <Input
                className="min-w-[380px]"
                inputClassName="text-[12px]"
                type="search"
                value={searchAddress}
                onChange={setSearchAddress}
            />
            <Button>Check</Button>
        </div>
        <Card
            className="bg-foreground-light"
            wrapperClassName="mb-2"
        >
            <BadgeCard badge={badgesData[0]} onClick={function (): void {
                throw new Error('Function not implemented.')
            }} attested={false} loading={false} />
        </Card>
        <Transactions />
    </div>
}
