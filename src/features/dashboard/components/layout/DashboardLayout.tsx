import Header from './Header'
import { Outlet } from 'react-router'

const DashboardLayout = () => {
  return (
    <div className='bg-n20 pb-10'>
      <Header />
      <Outlet />
    </div>
  )
}

export default DashboardLayout
