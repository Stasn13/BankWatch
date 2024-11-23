import Statistics from './Statistics'
import { Card } from '../ui/Card'
import Badges from './Badges'
import Banner from './Banner'

import bg2 from "../assets/img/bg2.png";
import Navigation from './Navigation'
import { Typography } from '../ui/Typography'
import { VeraxSdk } from '@verax-attestation-registry/verax-sdk'
import { useAccount } from 'wagmi'
import ScoreBanner from './ScoreBanner'

function Main() {
  const { address, chainId, isConnected, chain } = useAccount();
  const veraxSdk = new VeraxSdk(VeraxSdk.DEFAULT_LINEA_SEPOLIA_FRONTEND, address);
  /**
   * TODO:
   * - connect score attestations
   * - finish busines logic
   * - implement loaders and error handling
   * - implement routing and build other pages
   * - add user guide
   * - write docs/description
   * - prepare release
   * - write post in linkedIn
   * - add new badges, enhance svg's
   * - implement "Coming soon" feaatures
   * 
   * Done:
   * - improve layout, fix connectbtn
   */

  return (
      <div className="flex px-4 h-[100vh] overflow-hidden">
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
            veraxSdk={veraxSdk}
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
          <ScoreBanner veraxSdk={veraxSdk} address={address} />
          <Card className="bg-foreground-light" wrapperClassName="w-full">
            (comming soon)
            <section className="mt-8 w-full">APY of various tokens through some lend/borrow protocols (aave, ...)</section>
          </Card>
          <footer>powered by Verax (2024)</footer>
        </main>
      </div>
  )
}

export default Main
