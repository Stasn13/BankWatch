import { WagmiConfig } from 'wagmi'
import './App.css'
import Statistics from './components/Statistics'
import { Button } from './ui/Button'
import { Card } from './ui/Card'
import { wagmiConfig as config, Web3Provider } from './web3provider'
import Badges from './components/Badges'

function App() {

  return (
    <Web3Provider>
      <div className="flex gap-8">
        <div className="bg-foreground-light">menu</div>
        <div className="flex flex-row gap-4 flex-wrap">
          <Badges />
          <Statistics className="w-[320px]"/>
          <Card className="bg-foreground-light flex-1">commercial with CTA to check eligibility another wallet <Button variant="primary">tst</Button></Card>
          <Card className="bg-foreground-light" wrapperClassName="w-full">badges(attestattions) list</Card>
          <section className="mt-8 w-full">APY of various tokens through some lend/borrow protocols (aave, ...)</section>
        </div>
      </div>
      powered by Verax (2024)
    </Web3Provider>
  )
}

export default App
