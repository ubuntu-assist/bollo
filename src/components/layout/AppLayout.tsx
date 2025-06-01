import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router'
import JoinWaitlistCTA from '../common/join-waitlist-cta'

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <JoinWaitlistCTA />
    </>
  )
}

export default AppLayout
