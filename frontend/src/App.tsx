import { WagmiConfig } from 'wagmi'
import './App.css'
import Statistics from './components/Statistics'
import { Button } from './ui/Button'
import { Card } from './ui/Card'
import { wagmiConfig as config, Web3Provider } from './web3provider'

function App() {

  return (
    <Web3Provider>
      <Statistics />
      <section className="mt-8">badges(attestattions) list</section>
      <section className="mt-8">APY of various tokens through some lend/borrow protocols (aave, ...)</section>
      <Button variant="primary">tst</Button>
    </Web3Provider>
  )
}

export default App
