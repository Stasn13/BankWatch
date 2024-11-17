import Statistics from './components/Statistics'
import { Card } from './ui/Card'
import { wagmiConfig as config, Web3Provider } from './web3provider'
import Badges from './components/Badges'
import Banner from './components/Banner'

import bg1 from "./assets/img/purple-gradient.png";
import bg2 from "./assets/img/bg2.png";
import Navigation from './components/Navigation'

function App() {

  return (
    <Web3Provider>
      <div className="flex gap-8 p-4 h-[100vh]">
        <Navigation />
        <main className="flex flex-row gap-4 flex-wrap px-8 overflow-y-auto">
          <Badges />
          <Statistics className="w-[320px]" />
          <Banner wrapperClassName="flex-1"
            bgImg={bg2}
            text="Now you can observe other wallets eligibility"
            buttonText="Discover"
          />
          <Card className="bg-foreground-light" wrapperClassName="w-full">badges(attestattions) list</Card>
          <section className="mt-8 w-full">APY of various tokens through some lend/borrow protocols (aave, ...)</section>
          <Banner
            wrapperClassName="w-full"
            text="Mint your Bank score Attestation"
            buttonText="Claim"
            bgImg={bg1}
          />
          <footer>powered by Verax (2024)</footer>
        </main>
      </div>
    </Web3Provider>
  )
}

export default App
