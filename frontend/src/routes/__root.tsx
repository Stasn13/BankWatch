import { createRootRoute, Outlet } from '@tanstack/react-router'
import Navigation from '../components/Navigation'
import { ConnectKitButton } from 'connectkit'
import { Web3Provider } from '../web3provider'
import React from 'react'

const TanStackRouterDevtools =
  process.env.NODE_ENV === 'production'
    ? () => null // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import('@tanstack/router-devtools').then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        })),
      )

export const Route = createRootRoute({
    component: () => (
        <Web3Provider>
            <div className="absolute right-8 top-4 z-20">
                <ConnectKitButton />
            </div>
            <div className="flex px-4 h-[100vh] overflow-hidden">
                <Navigation />
                <main
                    className="w-full px-8 overflow-y-auto pt-4 pb-12 max-w-[1200px] mx-auto"
                    // flex flex-row gap-2 flex-wrap
                >
                    <Outlet />
                    <TanStackRouterDevtools />
                </main>
            </div>
        </Web3Provider>
    ),
})