import React from 'react'
import { Link, useNavigate } from 'react-router'
import { BreadcrumbSection } from '../components'
import clientProfileImg from '../assets/images/people_small1.png'
import taskDetailsImg from '../assets/images/worker-portfolio-img-1.png'
import verifyBadge from '../assets/images/verify-badge.png'

// Define type for time of day preference
type TimePeriod = 'morning' | 'afternoon' | 'evening' | 'night'

// Define type for date preference
type DateType = 'on' | 'before' | 'flexible'

// Define type for service category
type ServiceType =
  | 'plumbing'
  | 'electrical'
  | 'carpentry'
  | 'cleaning'
  | 'painting'
  | 'general'

// Define type for requirement type
type RequirementType = 'equipment' | 'materials' | 'access' | 'permits'

// Define type for who provides the requirement
type ProvidedBy = 'customer' | 'service_provider'

// Define type for budget type
type BudgetType = 'fixed' | 'hourly'

// Define task requirement interface
interface TaskRequirement {
  type: RequirementType
  description: string
  providedBy: ProvidedBy
}

// Define task location interface
interface TaskLocation {
  isOnSite: boolean
  address: string
  suburb: string
  city: string
  country: string
}

// Define task deadline interface
interface TaskDeadline {
  type: DateType
  date: string
}

// Define task time preference interface
interface TaskTimePreference {
  specific: boolean
  period?: TimePeriod
}

// Define task budget interface
interface TaskBudget {
  amount: string
  currency: string
  type: BudgetType
}

// Define client interface
interface TaskClient {
  id: string
  name: string
  location: string
  memberSince: string
  tasksPosted: number
  tasksCompleted: number
  rating: number
  isVerified: boolean
}

// Define task interface
interface Task {
  id: string
  title: string
  description: string
  status: 'active' | 'pending' | 'completed' | 'cancelled'
  postDate: string
  deadline: TaskDeadline
  timePreference: TaskTimePreference
  location: TaskLocation
  budget: TaskBudget
  serviceType: ServiceType
  requirements: TaskRequirement[]
  additionalNotes?: string
  client: TaskClient
  proposals: number
  views: number
}

const TaskDetails: React.FC = () => {
  const navigate = useNavigate()

  const task: Task = {
    id: 'TASK-12345',
    title: 'Fix Leaking Bathroom Tap and Replace Shower Head',
    description:
      "I have a leaking tap in the master bathroom that needs to be fixed as soon as possible. It's dripping constantly and wasting water. Additionally, I'd like to replace the old shower head with a new one that I've already purchased. The bathroom was renovated about 5 years ago, and I believe the fixtures are standard models.",
    status: 'active',
    postDate: '2025-04-10',
    deadline: {
      type: 'before',
      date: '2025-04-20',
    },
    timePreference: {
      specific: true,
      period: 'morning',
    },
    location: {
      isOnSite: true,
      address: '123 Bole Avenue',
      suburb: 'Bole',
      city: 'Addis Ababa',
      country: 'Ethiopia',
    },
    budget: {
      amount: '500-800',
      currency: 'XAF',
      type: 'fixed',
    },
    serviceType: 'plumbing',
    requirements: [
      {
        type: 'equipment',
        description: 'Plumbing tools',
        providedBy: 'service_provider',
      },
      {
        type: 'materials',
        description: 'Shower head (already purchased)',
        providedBy: 'customer',
      },
    ],
    additionalNotes:
      'The water shut-off valve for the bathroom is located under the sink. Please ensure the area is kept clean during the service.',
    client: {
      id: 'CLIENT-789',
      name: 'Amara Okafor',
      location: 'Addis Ababa, Ethiopia',
      memberSince: 'January 2024',
      tasksPosted: 12,
      tasksCompleted: 9,
      rating: 4.8,
      isVerified: true,
    },
    proposals: 3,
    views: 27,
  }

  return (
    <>
      <BreadcrumbSection />
      <section className='sbp-30 stp-30'>
        <div className='container grid grid-cols-12 gap-6'>
          {/* Main Content */}
          <div className='col-span-12 lg:col-span-8'>
            <div className='grid grid-cols-12 gap-6'>
              {/* Task Image */}
              <div className='col-span-12 overflow-hidden rounded-xl md:col-span-6'>
                <img
                  src={taskDetailsImg}
                  className='w-full rounded-xl'
                  alt='Task detail'
                />
              </div>

              {/* Task Header */}
              <div className='col-span-12 flex flex-col items-start justify-start lg:col-span-6'>
                <div className='flex flex-col items-start justify-start'>
                  <div className='flex items-center gap-2 text-b300 mb-2'>
                    <i className='ph-fill ph-drop text-xl'></i>
                    <span className='font-medium'>
                      {task.serviceType.charAt(0).toUpperCase() +
                        task.serviceType.slice(1)}
                    </span>
                  </div>
                  <h3 className='heading-3 pb-3'>{task.title}</h3>
                  <div className='flex items-center justify-start gap-3 mb-2'>
                    <span className='rounded-full bg-g300 px-3 py-1 text-sm font-medium text-white'>
                      Active
                    </span>
                    <p className='text-sm text-n300'>
                      Posted on {task.postDate}
                    </p>
                  </div>
                  <p className='font-medium text-n300'>
                    Deadline: {task.deadline.type === 'on' ? 'On' : 'Before'}{' '}
                    {task.deadline.date}
                  </p>
                  <div className='flex items-center justify-start gap-3 pt-3'>
                    <div className='relative max-md:overflow-hidden'>
                      <img
                        src={clientProfileImg}
                        alt='Client profile'
                        className='rounded-full w-16 h-16 object-cover'
                      />
                      {task.client.isVerified && (
                        <div className='absolute bottom-0 right-0 z-30'>
                          <img src={verifyBadge} alt='Verified' className='' />
                        </div>
                      )}
                    </div>
                    <div className='max-[350px]:max-w-20'>
                      <div className='flex items-center justify-center gap-3'>
                        <h5 className='heading-5'>{task.client.name}</h5>
                      </div>
                      <p className='text-sm text-n300'>
                        {task.client.location}
                      </p>
                    </div>
                  </div>
                </div>

                <div className='mt-4 flex w-full items-center justify-between border-y border-n30 py-3'>
                  <div className='flex items-center justify-start gap-2'>
                    <i className='ph-fill ph-star text-2xl !leading-none text-b300'></i>
                    <p className='text-n300'>{task.client.rating} Rating</p>
                  </div>
                  <div className='flex items-center gap-4'>
                    <div className='flex items-center justify-start gap-2'>
                      <i className='ph-fill ph-list-bullets text-xl !leading-none text-b300'></i>
                      <p className='text-n300'>
                        {task.client.tasksPosted} Tasks Posted
                      </p>
                    </div>
                    <i className='ph-fill ph-share-network text-2xl !leading-none text-b300'></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Task Description */}
            <div className='stp-15 sbp-15'>
              <h3 className='heading-3 border-b border-n30 pb-5'>
                About this task
              </h3>
              <div className='flex flex-col gap-6 pt-5 text-lg'>
                <p className='text-n300'>{task.description}</p>

                {/* Requirements Section */}
                <div className='flex flex-col gap-3'>
                  <h4 className='heading-4'>Requirements:</h4>
                  <ul className='ml-4 flex list-disc flex-col gap-3 text-n300 marker:text-[10px] marker:text-n900'>
                    {task.requirements.map((req, index) => (
                      <li key={index}>
                        <strong>
                          {req.type.charAt(0).toUpperCase() + req.type.slice(1)}
                          :
                        </strong>{' '}
                        {req.description}
                        <span className='text-b300'>
                          {' '}
                          (Provided by{' '}
                          {req.providedBy === 'customer'
                            ? 'Client'
                            : 'Service Provider'}
                          )
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Location */}
                {task.location.isOnSite && (
                  <div className='flex flex-col gap-3'>
                    <h4 className='heading-4'>Location:</h4>
                    <p className='text-n300'>
                      This task requires on-site service at{' '}
                      {task.location.address}, {task.location.suburb},{' '}
                      {task.location.city}, {task.location.country}.
                    </p>
                  </div>
                )}

                {/* Schedule */}
                <div className='flex flex-col gap-3'>
                  <h4 className='heading-4'>Schedule:</h4>
                  <p className='text-n300'>
                    This task needs to be completed{' '}
                    {task.deadline.type === 'on' ? 'on' : 'before'}{' '}
                    {task.deadline.date}.
                    {task.timePreference.specific &&
                      task.timePreference.period && (
                        <span>
                          {' '}
                          The client prefers the service to be done in the{' '}
                          {task.timePreference.period}.
                        </span>
                      )}
                  </p>
                </div>

                {/* Additional Notes */}
                {task.additionalNotes && (
                  <div className='flex flex-col gap-3'>
                    <h4 className='heading-4'>Additional Notes:</h4>
                    <p className='text-n300'>{task.additionalNotes}</p>
                  </div>
                )}
              </div>
            </div>

            <div className='stp-15 sbp-15 flex flex-col items-center justify-center gap-8 border-y border-n30 py-8'>
              <h2 className='heading-2'>Interested in this task?</h2>
              <div className='max-w-[300px]'>
                <button
                  onClick={() => navigate('/proposal-submission')}
                  className='relative block w-full overflow-hidden rounded-full bg-b300 px-6 py-3 text-sm font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]'
                >
                  <div className='relative z-20 flex items-center justify-center gap-3'>
                    <i className='ph ph-paper-plane-tilt text-xl !leading-none'></i>
                    <span>Submit a Proposal</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Similar Tasks */}
            <div className='mt-6 rounded-xl border border-n30 p-4 sm:mt-14 sm:p-8'>
              <h5 className='heading-5'>Similar Tasks</h5>

              <div className='flex flex-col gap-4 pt-10'>
                {[1, 2].map((item) => (
                  <div key={item} className='rounded-2xl border border-n30 p-5'>
                    <div className='flex flex-col gap-3'>
                      <div className='flex items-center gap-2 text-b300'>
                        <i className='ph-fill ph-drop text-xl'></i>
                        <span className='font-medium'>Plumbing</span>
                      </div>
                      <h5 className='heading-5'>
                        Replace Kitchen Sink Faucet and Fix Drain
                      </h5>
                      <div className='flex flex-wrap items-center gap-3 text-sm text-n300'>
                        <p className='flex items-center gap-2'>
                          <i className='ph-fill ph-map-pin'></i>
                          <span>Bole, Addis Ababa</span>
                        </p>
                        <p className='flex items-center gap-2'>
                          <i className='ph-fill ph-currency-dollar'></i>
                          <span>500-700 XAF</span>
                        </p>
                        <p className='flex items-center gap-2'>
                          <i className='ph-fill ph-calendar'></i>
                          <span>Due April 25, 2025</span>
                        </p>
                      </div>
                      <div className='flex justify-between items-center mt-3'>
                        <p className='text-sm text-n300'>Posted 2 days ago</p>
                        <Link
                          to='/task/123'
                          className='relative flex items-center justify-center overflow-hidden rounded-full bg-b300 px-3 py-2 text-sm font-medium text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]'
                        >
                          <span className='relative z-10'>View Task</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className='col-span-12 lg:col-span-4'>
            <div className='sticky top-32'>
              <div className='items-center rounded-2xl border border-n30 px-6 py-8 text-n300'>
                <div className='border-b border-n30 pb-6'>
                  <p className='text-sm font-semibold'>BUDGET</p>
                  <p className='heading-5 py-1 font-semibold text-r300'>
                    {task.budget.amount} {task.budget.currency}
                  </p>
                  <p className='text-sm font-medium'>
                    {task.budget.type === 'fixed'
                      ? 'Fixed Price'
                      : 'Hourly Rate'}
                  </p>

                  <div className='pt-6'>
                    <button
                      onClick={() => navigate('/proposal-submission')}
                      className='relative block w-full overflow-hidden rounded-full bg-b300 px-6 py-3 text-sm font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]'
                    >
                      <div className='relative z-20 flex items-center justify-center gap-3'>
                        <i className='ph ph-paper-plane-tilt text-xl !leading-none'></i>
                        <span>Submit a Proposal</span>
                      </div>
                    </button>
                  </div>
                </div>

                <div className='flex flex-col items-start justify-start pt-6'>
                  <p className='text-sm font-medium'>Task Details</p>

                  <div className='flex flex-col gap-3 w-full pt-3'>
                    <div className='flex justify-between items-center'>
                      <p className='flex items-center gap-2 text-sm'>
                        <i className='ph-fill ph-calendar text-xl text-b300'></i>
                        Posted on
                      </p>
                      <p className='text-sm'>{task.postDate}</p>
                    </div>

                    <div className='flex justify-between items-center'>
                      <p className='flex items-center gap-2 text-sm'>
                        <i className='ph-fill ph-clock text-xl text-b300'></i>
                        Deadline
                      </p>
                      <p className='text-sm'>{task.deadline.date}</p>
                    </div>

                    <div className='flex justify-between items-center'>
                      <p className='flex items-center gap-2 text-sm'>
                        <i className='ph-fill ph-map-pin text-xl text-b300'></i>
                        Location
                      </p>
                      <p className='text-sm'>{task.location.suburb}</p>
                    </div>

                    <div className='flex justify-between items-center'>
                      <p className='flex items-center gap-2 text-sm'>
                        <i className='ph-fill ph-users text-xl text-b300'></i>
                        Proposals
                      </p>
                      <p className='text-sm'>{task.proposals}</p>
                    </div>

                    <div className='flex justify-between items-center'>
                      <p className='flex items-center gap-2 text-sm'>
                        <i className='ph-fill ph-eye text-xl text-b300'></i>
                        Views
                      </p>
                      <p className='text-sm'>{task.views}</p>
                    </div>
                  </div>

                  <p className='pt-6 text-sm font-medium'>Required Skills</p>
                  <div className='flex flex-wrap gap-1 pt-3 text-sm text-n400'>
                    <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2'>
                      <span>Plumbing</span>
                    </p>
                    <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2'>
                      <span>Fixture Installation</span>
                    </p>
                    <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2'>
                      <span>Tap Repair</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TaskDetails
