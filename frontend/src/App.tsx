import { WagmiConfig } from 'wagmi'
import './App.css'
import Statistics from './components/Statistics'
import { Button } from './ui/Button'
import { Card } from './ui/Card'
import { wagmiConfig as config, Web3Provider } from './web3provider'
import Badges from './components/Badges'
import Banner from './components/Banner'

import bg1 from "./assets/img/purple-gradient.png";
import bg2 from "./assets/img/bg2.png";

function App() {

  return (
    <Web3Provider>
      <div className="flex gap-8">
        <div className="bg-foreground-light">menu</div>
        <div className="flex flex-row gap-4 flex-wrap">
          <Badges />
          <Statistics className="w-[320px]" />
          <Banner wrapperClassName="flex-1"
            bgImg={bg2}
          />
          <Card className="bg-foreground-light" wrapperClassName="w-full">badges(attestattions) list</Card>
          <section className="mt-8 w-full">APY of various tokens through some lend/borrow protocols (aave, ...)</section>
          <Banner
            wrapperClassName="w-full"
            bgImg={bg1}
          />
        </div>
      </div>
      powered by Verax (2024)
    </Web3Provider>
  )
}

export default App
