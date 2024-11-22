import Statistics from './components/Statistics'
import { Card } from './ui/Card'
import { Web3Provider } from './web3provider'
import Badges from './components/Badges'
import Banner from './components/Banner'

import bg1 from "./assets/img/purple-gradient.png";
import bg2 from "./assets/img/bg2.png";
import Navigation from './components/Navigation'
import { Typography } from './ui/Typography'
import { VeraxSdk } from '@verax-attestation-registry/verax-sdk'
import { useAccount } from 'wagmi'
import { ConnectKitButton } from 'connectkit'
import ScoreBanner from './components/ScoreBanner'
import { useState } from 'react'

function App() {
  const [loading, setLoading] = useState(false);
  /**
   * TODO:
   * - finish busines logic
   * - implement loaders and error handling
   * - improve layout, fix connectbtn
   * - implement routing
   * - add user guide
   * - write docs/description
   * - prepare release
   * - write post in linkedIn
   * - implement "Coming soon" feaatures
   */

  return (
    <Web3Provider>
      <ConnectKitButton />
      <div className="flex px-4 h-[100vh]">
        <Navigation />
        <main className="flex flex-row gap-2 flex-wrap px-8 overflow-y-auto pt-4">
          <Card
            className="bg-foreground-light"
            wrapperClassName="mb-2"
          >
            <Typography
              size="heading1"
              variant="heading1"
              className="font-black"
            >
              Dashboard
            </Typography>
          </Card>
          <Badges
          // veraxSdk={veraxSdk} 
          />
          <Statistics className="w-[320px]" />
          <Banner wrapperClassName="flex-1"
            bgImg={bg2}
            text="Now you can observe other wallets eligibility"
            btnText="Discover"
            btnClassName="absolute bottom-4 right-4"
          />
          <Card className="bg-foreground-light" wrapperClassName="w-full">
            (comming soon)
            <section className="mb-8">Historical data of user lend/borrow interaction with calculating of Health Rate</section>
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
          <Banner
            wrapperClassName="w-full"
            text="Mint your Bank score Attestation"
            btnText="Claim"
            bgImg={bg1}
            btnProps={{isLoading: loading, onClick: () => setLoading(!loading)}}
          >
            <ScoreBanner />
          </Banner>
          <Card className="bg-foreground-light" wrapperClassName="w-full">
            (comming soon)
            <section className="mt-8 w-full">APY of various tokens through some lend/borrow protocols (aave, ...)</section>
          </Card>
          <footer>powered by Verax (2024)</footer>
        </main>
      </div>
    </Web3Provider>
  )
}

export default App
