import { useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router'
import { Routes } from 'react-router'
import { AppLayout, ScrollToTop } from './components'
import {
  BecomeTasker,
  HireMe,
  Home,
  NotFoundPage,
  ServiceDetails,
  Services,
  SignIn,
  WorkerProfile,
} from './pages'
import { initAos } from './utils/init-aos'
import DashboardLayout from './features/dashboard/components/layout/DashboardLayout'
import {
  DashboardHome,
  EditProfile,
  Profile,
  Whishlist,
  DashboardServices,
} from './pages/dashboard'

function App() {
  useEffect(() => {
    initAos()
  }, [])

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path='become-tasker' element={<BecomeTasker />} />
          <Route path='services' element={<Services />} />
          <Route path='services/:slug' element={<ServiceDetails />} />
          <Route path='hire-me' element={<HireMe />} />
          <Route path='worker-profile' element={<WorkerProfile />} />
        </Route>
        <Route path='/dashboard' element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path='profile' element={<Profile />} />
          <Route path='edit-profile' element={<EditProfile />} />
          <Route path='wishlist' element={<Whishlist />} />
          <Route path='services' element={<DashboardServices />} />
        </Route>
        <Route path='signin' element={<SignIn />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
