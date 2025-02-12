import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import './index.css'
import App from './App.tsx'
import 'aos/dist/aos.css'
import 'cropperjs/dist/cropper.css'
import logo from './assets/images/logo.png'

import { Web3OnboardProvider, init } from '@web3-onboard/react'
import walletConnectModule from '@web3-onboard/walletconnect'
import injectedModule from '@web3-onboard/injected-wallets'

const INFURA_KEY = import.meta.env.VITE_INFURA_ID

const chains = [
  {
    id: 1,
    token: 'ETH',
    label: 'Ethereum Mainnet',
    rpcUrl: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
  },
]

const wcInitOptions = {
  projectId: import.meta.env.VITE_PROJECT_ID,
  requiredChains: [1],
  dappUrl: 'test.app',
}

const walletConnect = walletConnectModule(wcInitOptions)
const injected = injectedModule()

const web3Onboard = init({
  wallets: [injected, walletConnect],
  chains,
  appMetadata: {
    name: 'Bollo',
    icon: logo,
    description: 'Bollo connects trusted home service providers with customers',
  },
  theme: 'dark',
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Web3OnboardProvider web3Onboard={web3Onboard}>
      <App />
    </Web3OnboardProvider>
  </StrictMode>
)
