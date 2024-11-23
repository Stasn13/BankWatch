import { Web3Provider } from './web3provider'
import { ConnectKitButton } from 'connectkit'
import Main from './components/Main'

function App() {

  return (
    <Web3Provider>
      <div className="absolute right-8 top-4 z-100">
        <ConnectKitButton />
      </div>
      <Main />
    </Web3Provider>
  )
}

export default App
