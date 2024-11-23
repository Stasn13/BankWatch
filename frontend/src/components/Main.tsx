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
   * - add user guide and onboarding dasboard
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
          
          <footer>powered by Verax (2024)</footer>
        </main>
      </div>
  )
}

export default Main
