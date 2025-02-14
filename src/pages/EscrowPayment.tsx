import React, { useState } from 'react'
import { useConnectWallet } from '@web3-onboard/react'
import logo from '../assets/images/logo.png'
import {
  Lock,
  Info,
  CheckCircle2,
  X,
  Wallet,
  ExternalLink,
  AlertCircle,
} from 'lucide-react'
import { Link } from 'react-router'
import TransactionModal from 'react-modal'
import TransactionLoader from '../components/core/TransactionLoader/TransactionLoader'

interface ContractData {
  title: string
  serviceType: string
  payment: {
    amount: string
    token: string
  }
  description: string
  contractAddress: string
  network: string
}

interface PaymentStatus {
  status: null | 'processing' | 'success' | 'error'
  error: string | null
}

type TimelineStep = {
  label: string
  status: 'pending' | 'active' | 'completed'
}

const Alert: React.FC<{ message: string }> = ({ message }) => (
  <div className='bg-red-50 text-red-600 rounded-xl p-4 flex items-center gap-2'>
    <AlertCircle className='h-5 w-5 shrink-0' />
    <p className='text-sm'>{message}</p>
  </div>
)

TransactionModal.setAppElement('#root')

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#0a0b0d',
    padding: 0,
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(10, 11, 13, 0.75)',
  },
}

const EscrowPayment: React.FC = () => {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()

  const mockContractData: ContractData = {
    title: 'Home Renovation Service',
    serviceType: 'plumbing',
    payment: {
      amount: '2,500.00',
      token: 'USDC',
    },
    description: 'Complete bathroom renovation including fixture replacement',
    contractAddress: '0x1234...5678',
    network: 'Ethereum Mainnet',
  }

  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>({
    status: null,
    error: null,
  })

  const timelineSteps: TimelineStep[] = [
    { label: 'Contract Deployment', status: 'completed' },
    { label: 'Payment Locked', status: 'active' },
    { label: 'Service Verification', status: 'pending' },
    { label: 'Payment Release', status: 'pending' },
  ]

  const handlePayment = async (): Promise<void> => {
    try {
      setPaymentStatus({ status: 'processing', error: null })
      await new Promise((resolve) => setTimeout(resolve, 20000))
      setPaymentStatus({ status: 'success', error: null })
    } catch (error) {
      console.log(error)
      setPaymentStatus({
        status: 'error',
        error: 'Transaction failed. Please try again.',
      })
    }
  }

  const formatAddress = (address: string | undefined): string => {
    if (!address) return ''
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  const renderWalletConnection = (): JSX.Element => {
    return (
      <div className='space-y-4'>
        <h3 className='text-lg font-medium text-gray-900'>Connect Wallet</h3>
        <button
          onClick={() => connect()}
          disabled={connecting}
          className='w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl py-3 font-medium transition-colors flex items-center justify-center gap-2'
        >
          <Wallet className='h-5 w-5' />
          {connecting ? 'Connecting...' : 'Connect Wallet'}
        </button>
      </div>
    )
  }

  const renderSuccessState = (): JSX.Element => {
    return (
      <div className='text-center py-6'>
        <div className='w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4'>
          <CheckCircle2 className='h-8 w-8 text-green-500' />
        </div>
        <h3 className='text-xl font-semibold text-gray-900 mb-2'>
          Payment Complete!
        </h3>
        <p className='text-gray-600 mb-6'>Transaction confirmed on-chain</p>
        <button className='w-full bg-gray-900 hover:bg-gray-800 text-white rounded-xl py-3 font-medium transition-colors'>
          View on Explorer
        </button>
      </div>
    )
  }

  const renderPaymentAction = (): JSX.Element => {
    return (
      <div className='space-y-4'>
        <div className='flex items-center justify-between'>
          <div>
            <p className='text-sm text-gray-500'>Connected Wallet</p>
            <p className='font-medium text-gray-900'>
              {formatAddress(wallet?.accounts[0].address)}
            </p>
          </div>
          <button
            onClick={() => wallet && disconnect(wallet)}
            className='text-gray-400 hover:text-gray-600 p-2 rounded-lg hover:bg-gray-50 transition-colors'
          >
            <X className='h-5 w-5' />
          </button>
        </div>

        {paymentStatus.error && <Alert message={paymentStatus.error} />}

        <button
          onClick={handlePayment}
          disabled={paymentStatus.status === 'processing'}
          className='w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl py-3 font-medium transition-colors flex items-center justify-center gap-2'
        >
          <Lock className='h-5 w-5' />
          {paymentStatus.status === 'processing'
            ? 'Confirming...'
            : 'Confirm Payment'}
        </button>

        <div className='pt-4 border-t border-gray-100'>
          <div className='flex items-center gap-2 text-sm text-gray-500'>
            <Info className='h-4 w-4' />
            <span>Protected by Smart Contract</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className='min-h-screen bg-gradient-to-b from-gray-50 to-white'>
        <div className='4xl:large-container flex items-center justify-between pt-6 max-4xl:container'>
          <Link to='/'>
            <img src={logo} alt='Logo' className='w-auto h-14' />
          </Link>
          <Link
            to='/'
            className='flex items-center justify-start gap-2 text-lg font-medium duration-500 hover:text-r300'
          >
            Cancel <i className='ph-bold ph-x !leading-none'></i>
          </Link>
        </div>
        <div className='max-w-7xl mx-auto px-4 py-8'>
          {/* Header */}
          <div className='mb-8'>
            <h1 className='text-3xl font-bold text-gray-900'>
              Secure Escrow Payment
            </h1>
            <p className='text-gray-600 mt-2'>
              Verified Smart Contract Protection
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {/* Contract Details */}
            <div className='lg:col-span-2 space-y-6'>
              {/* Smart Contract Info */}
              <div className='bg-white rounded-3xl shadow-sm border border-gray-100 p-6'>
                <div className='flex items-center gap-4 mb-6'>
                  <div className='p-3 bg-blue-50 rounded-xl'>
                    <Lock className='h-6 w-6 text-blue-500' />
                  </div>
                  <div>
                    <p className='text-sm text-gray-500'>Smart Contract</p>
                    <div className='flex items-center gap-2'>
                      <p className='text-sm font-mono text-gray-900'>
                        {mockContractData.contractAddress}
                      </p>
                      <ExternalLink className='h-4 w-4 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors' />
                    </div>
                  </div>
                </div>

                <div className='grid grid-cols-2 gap-6 mb-6'>
                  <div>
                    <p className='text-sm text-gray-500'>Payment Amount</p>
                    <div className='flex items-center gap-2 mt-1'>
                      <p className='text-2xl font-bold text-gray-900'>
                        {mockContractData.payment.amount}
                      </p>
                      <span className='text-blue-600'>
                        {mockContractData.payment.token}
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className='text-sm text-gray-500'>Network</p>
                    <p className='text-lg mt-1 text-gray-900'>
                      {mockContractData.network}
                    </p>
                  </div>
                </div>

                <div className='bg-gradient-to-r from-blue-50 to-blue-50/50 rounded-2xl p-6'>
                  <div className='flex items-start gap-3'>
                    <Info className='h-5 w-5 text-blue-500 mt-1 shrink-0' />
                    <div>
                      <h3 className='font-medium text-gray-900 mb-2'>
                        Escrow Protection
                      </h3>
                      <ul className='space-y-3'>
                        <li className='flex items-center gap-2 text-sm text-gray-600'>
                          <CheckCircle2 className='h-4 w-4 text-green-500 shrink-0' />
                          <span>Funds held in audited smart contract</span>
                        </li>
                        <li className='flex items-center gap-2 text-sm text-gray-600'>
                          <CheckCircle2 className='h-4 w-4 text-green-500 shrink-0' />
                          <span>Automatic release upon service completion</span>
                        </li>
                        <li className='flex items-center gap-2 text-sm text-gray-600'>
                          <CheckCircle2 className='h-4 w-4 text-green-500 shrink-0' />
                          <span>Dispute resolution by DAO governance</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Transaction Timeline */}
              <div className='bg-white rounded-3xl shadow-sm border border-gray-100 p-6'>
                <h3 className='text-lg font-medium text-gray-900 mb-4'>
                  Transaction Timeline
                </h3>
                <div className='space-y-4'>
                  {timelineSteps.map((step, index) => (
                    <div key={index} className='flex items-center gap-3'>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center
                      ${
                        step.status === 'completed'
                          ? 'bg-green-50 text-green-500'
                          : step.status === 'active'
                          ? 'bg-blue-50 text-blue-500'
                          : 'bg-gray-100 text-gray-400'
                      }`}
                      >
                        <span className='text-sm'>{index + 1}</span>
                      </div>
                      <p
                        className={`${
                          step.status === 'completed'
                            ? 'text-green-600'
                            : step.status === 'active'
                            ? 'text-blue-600'
                            : 'text-gray-500'
                        }`}
                      >
                        {step.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Payment Action */}
            <div className='lg:col-span-1'>
              <div className='bg-white rounded-3xl shadow-sm border border-gray-100 p-6'>
                {!wallet
                  ? renderWalletConnection()
                  : paymentStatus.status === 'success'
                  ? renderSuccessState()
                  : renderPaymentAction()}
              </div>
            </div>
          </div>
        </div>
      </div>
      <TransactionModal
        isOpen={paymentStatus.status === 'processing'}
        style={customStyles}
      >
        <TransactionLoader type='escrow' />
      </TransactionModal>
    </>
  )
}

export default EscrowPayment
