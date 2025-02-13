import React, { useState } from 'react'
import { Link } from 'react-router'
import logo from '../assets/images/logo.png'
import { useConnectWallet } from '@web3-onboard/react'

interface ContractData {
  title: string
  serviceType: string
  payment: {
    amount: string
  }
  description: string
}

interface WalletStatus {
  connected: boolean
  address: string
  isConnecting: boolean
}

interface PaymentStatus {
  status: null | 'processing' | 'success' | 'error'
  error: string | null
}

const EscrowPayment: React.FC = () => {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()

  // Simulated contract data
  const mockContractData: ContractData = {
    title: 'Home Renovation Service',
    serviceType: 'plumbing',
    payment: {
      amount: '2,500.00',
    },
    description: 'Complete bathroom renovation including fixture replacement',
  }

  const [walletStatus, setWalletStatus] = useState<WalletStatus>({
    connected: false,
    address: '',
    isConnecting: false,
  })

  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>({
    status: null,
    error: null,
  })

  const handlePayment = async (): Promise<void> => {
    try {
      setPaymentStatus({ status: 'processing', error: null })
      // Simulated payment delay
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setPaymentStatus({ status: 'success', error: null })
    } catch (error) {
      console.log(error)
      setPaymentStatus({
        status: 'error',
        error: 'Payment failed. Please try again.',
      })
    }
  }

  const formatAddress = (address: string): string => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  const escrowSteps: string[] = [
    'Service completion is confirmed',
    'Quality verification is performed',
    'Your approval is received',
  ]

  return (
    <section className='min-h-screen bg-gradient-to-b from-gray-50 to-white'>
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
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8'>
        <div className='flex items-center justify-between mb-12'>
          <div>
            <h1 className='text-3xl font-bold text-gray-900'>
              Complete Payment
            </h1>
            <p className='mt-2 text-gray-600'>
              Secure your service with escrow protection
            </p>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Left Column - Contract Details */}
          <div className='lg:col-span-2'>
            <div className='bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden'>
              {/* Contract Summary Header */}
              <div className='border-b border-gray-100 p-6'>
                <div className='flex items-center gap-4'>
                  <div className='bg-blue-50 rounded-xl p-3'>
                    <i className='ph-fill ph-drop text-blue-500 text-2xl'></i>
                  </div>
                  <div>
                    <h2 className='text-xl font-semibold text-gray-900'>
                      {mockContractData.title}
                    </h2>
                    <p className='text-gray-500 capitalize'>
                      {mockContractData.serviceType}
                    </p>
                  </div>
                </div>
              </div>

              {/* Contract Details */}
              <div className='p-6 space-y-6'>
                <div className='grid grid-cols-2 gap-6'>
                  <div>
                    <p className='text-sm text-gray-500 mb-1'>Service Amount</p>
                    <p className='text-2xl font-semibold text-gray-900'>
                      ${mockContractData.payment.amount}
                    </p>
                  </div>
                  <div>
                    <p className='text-sm text-gray-500 mb-1'>Protection</p>
                    <div className='flex items-center gap-2 text-green-600'>
                      <i className='ph-fill ph-shield-check text-xl'></i>
                      <span className='font-medium'>Escrow Protected</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <p className='text-sm text-gray-500 mb-2'>
                    Service Description
                  </p>
                  <p className='text-gray-700'>
                    {mockContractData.description}
                  </p>
                </div>

                {/* Escrow Info */}
                <div className='bg-gradient-to-r from-blue-50 to-blue-50/50 rounded-2xl p-6'>
                  <div className='flex items-start gap-4'>
                    <i className='ph-fill ph-info text-blue-500 text-xl mt-1'></i>
                    <div>
                      <h3 className='font-medium text-gray-900 mb-2'>
                        Payment Protection
                      </h3>
                      <p className='text-gray-600 text-sm leading-relaxed'>
                        Your payment will be held securely in escrow and only
                        released to the service provider after:
                      </p>
                      <ul className='mt-3 space-y-2'>
                        {escrowSteps.map((item, i) => (
                          <li
                            key={i}
                            className='flex items-center gap-2 text-sm text-gray-600'
                          >
                            <i className='ph-bold ph-check-circle text-green-500'></i>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Payment Actions */}
          <div className='lg:col-span-1'>
            <div className='bg-white rounded-3xl shadow-sm border border-gray-100 p-6 space-y-6'>
              {!walletStatus.connected ? (
                <div>
                  <h3 className='text-lg font-semibold text-gray-900 mb-4'>
                    Connect Wallet
                  </h3>
                  <button
                    disabled={connecting}
                    onClick={() => (wallet ? disconnect(wallet) : connect())}
                    className='w-full bg-blue-600 text-white rounded-xl py-3 font-medium hover:bg-blue-700 disabled:opacity-75 transition-colors flex items-center justify-center gap-2'
                  >
                    {connecting
                      ? 'connecting'
                      : wallet
                      ? 'Disconnect Wallet'
                      : 'Connect Wallet'}
                  </button>
                </div>
              ) : paymentStatus.status === 'success' ? (
                <div className='text-center py-6'>
                  <div className='w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <i className='ph-fill ph-check-circle text-3xl text-green-500'></i>
                  </div>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                    Payment Complete!
                  </h3>
                  <p className='text-gray-600 mb-6'>
                    Your funds are now securely held in escrow
                  </p>
                  <Link
                    to='/dashboard'
                    className='inline-block w-full bg-gray-900 text-white rounded-xl py-3 font-medium hover:bg-gray-800 transition-colors text-center'
                  >
                    View Contract Status
                  </Link>
                </div>
              ) : (
                <div>
                  <div className='flex items-center justify-between mb-6'>
                    <div>
                      <p className='text-sm text-gray-500'>Connected Wallet</p>
                      <p className='font-medium text-gray-900'>
                        {formatAddress(walletStatus.address)}
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        setWalletStatus({
                          connected: false,
                          address: '',
                          isConnecting: false,
                        })
                      }
                      className='text-gray-400 hover:text-gray-600'
                    >
                      <i className='ph-bold ph-x'></i>
                    </button>
                  </div>

                  {paymentStatus.error && (
                    <div className='bg-red-50 text-red-600 rounded-xl p-4 mb-4 flex items-center gap-2'>
                      <i className='ph-fill ph-warning'></i>
                      <p className='text-sm'>{paymentStatus.error}</p>
                    </div>
                  )}

                  <button
                    onClick={handlePayment}
                    disabled={paymentStatus.status === 'processing'}
                    className='w-full bg-blue-600 text-white rounded-xl py-3 font-medium hover:bg-blue-700 disabled:opacity-75 transition-colors flex items-center justify-center gap-2'
                  >
                    {paymentStatus.status === 'processing' ? (
                      <>
                        <i className='ph-bold ph-circle-notch animate-spin'></i>
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <i className='ph-fill ph-lock'></i>
                        <span>Pay to Escrow</span>
                      </>
                    )}
                  </button>
                </div>
              )}

              {/* Additional Info */}
              <div className='pt-4 border-t border-gray-100'>
                <div className='flex items-center gap-2 text-sm text-gray-500'>
                  <i className='ph-fill ph-shield'></i>
                  <span>Secure payment processing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EscrowPayment
