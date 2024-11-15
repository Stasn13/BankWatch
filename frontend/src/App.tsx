import { WagmiConfig } from 'wagmi'
import './App.css'
import Statistics from './components/Statistics'
import { Button } from './ui/Button'
import { Card } from './ui/Card'
import { wagmiConfig as config, Web3Provider } from './web3provider'

function App() {

  return (
    <Web3Provider>
      <div className="flex flex-row gap-4 flex-wrap">
        <Statistics />
        <Card className="bg-foreground-light w-[320px]">statistics list (health score, available value, percentage etc)</Card>
        <Card className="bg-foreground-light flex-1">commercial with CTA to check eligibility another wallet</Card>
        <Card className="bg-foreground-light" wrapperClassName="w-full">badges(attestattions) list</Card>
        <section className="mt-8 w-full">APY of various tokens through some lend/borrow protocols (aave, ...)</section>
        <Button variant="primary">tst</Button>
      </div>
    </Web3Provider>
  )
}

export default App
