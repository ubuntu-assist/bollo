import { HashLoader, FadeLoader } from 'react-spinners'
import './style.css'

const TransactionLoader = ({ type }: { type: string }) => {
  const renderLoader = () => {
    switch (type) {
      case 'escrow':
        return (
          <>
            <div className='transaction-loader-text'>Processing escrow...</div>
            <FadeLoader
              className='bounce-loader'
              color={'#000'}
              loading={true}
            />
          </>
        )
      case 'verify':
        return (
          <>
            <div className='transaction-loader-text'>
              Verification in progress...
            </div>
            <HashLoader
              className='hash-loader'
              color={'#000'}
              loading={true}
              size={50}
            />
          </>
        )
      default:
        return null
    }
  }

  return <div className='transaction-loader'>{renderLoader()}</div>
}

export default TransactionLoader
