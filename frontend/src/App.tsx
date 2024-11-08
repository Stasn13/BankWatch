import './App.css'
import { Button } from './ui/Button'
import { Card } from './ui/Card'

function App() {

  return (
    <>
      <Card className="bg-foreground-light">
        <section className="mt-8">Historical data of user lend/borrow interaction with calculating of Health Rate</section>
      </Card>
      <section className="mt-8">badges(attestattions) list</section>
      <section className="mt-8">APY of various tokens through some lend/borrow protocols (aave, ...)</section>
      <Button variant="primary">tst</Button>
    </>
  )
}

export default App
