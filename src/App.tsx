import { useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router'
import { Routes } from 'react-router'
import { AppLayout, ScrollToTop } from './components'
import {
  BecomeTasker,
  BrowseTasks,
  ChatPage,
  EscrowPayment,
  FindWorkers,
  HireMe,
  Home,
  NotFoundPage,
  ProposalSubmissionPage,
  ServiceDetails,
  Services,
  SignIn,
  SignUp,
  SmartContractForm,
  TaskDetails,
  WorkerPortfolio,
  WorkerProfile,
  WorkingProcessed,
} from './pages'
import { initAos } from './utils/init-aos'
import DashboardLayout from './features/dashboard/components/layout/DashboardLayout'
import {
  DashboardHome,
  EditProfile,
  Profile,
  Whishlist,
  DashboardServices,
  Reviews,
  Payments,
  AddEditService,
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
          <Route path='chat' element={<ChatPage />} />
          <Route path='find-workers' element={<FindWorkers />} />
          <Route path='browse-tasks' element={<BrowseTasks />} />
          <Route path='task-details' element={<TaskDetails />} />
        </Route>
        <Route path='/dashboard' element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path='profile' element={<Profile />} />
          <Route path='edit-profile' element={<EditProfile />} />
          <Route path='wishlist' element={<Whishlist />} />
          <Route path='services' element={<DashboardServices />} />
          <Route path='reviews' element={<Reviews />} />
          <Route path='payments' element={<Payments />} />
          <Route path='services/:slug/edit' element={<AddEditService />} />
        </Route>
        <Route path='signin' element={<SignIn />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='*' element={<NotFoundPage />} />
        <Route path='post-task' element={<WorkingProcessed />} />
        <Route
          path='proposal-submission'
          element={<ProposalSubmissionPage />}
        />
        <Route path='create-contract' element={<SmartContractForm />} />
        <Route path='worker-portfolio' element={<WorkerPortfolio />} />
        <Route path='pay' element={<EscrowPayment />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
