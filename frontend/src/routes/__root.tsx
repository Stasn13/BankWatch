import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Navigation from '../components/Navigation'
import { ConnectKitButton } from 'connectkit'
import { Web3Provider } from '../web3provider'

export const Route = createRootRoute({
    component: () => (
        <Web3Provider>
            <div className="absolute right-8 top-4 z-20">
                <ConnectKitButton />
            </div>
            <div className="flex px-4 h-[100vh] overflow-hidden">
                <Navigation />
                <main
                    className="w-full px-8 overflow-y-auto pt-4"
                // flex flex-row gap-2 flex-wrap
                >
                    <Outlet />
                    <TanStackRouterDevtools />
                </main>
            </div>
        </Web3Provider>
    ),
})