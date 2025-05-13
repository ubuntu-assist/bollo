import { useState } from 'react'
import { Link } from 'react-router'
import logo from '../assets/images/logo.png'
import countryCameroon from '../assets/images/cameroon-flag.png'
import countryNigeria from '../assets/images/nigeria-flag.png'
import countryKenya from '../assets/images/kenya-flag.png'
import countryEthiopia from '../assets/images/ethiopia-flag.png'
import countryGhana from '../assets/images/ghana-flag.png'
import stepsIcon from '../assets/images/steps_icon.png'

type TimePeriod = 'morning' | 'afternoon' | 'evening' | 'night'
type DateType = 'on' | 'before' | 'flexible'
type ServiceType =
  | 'plumbing'
  | 'electrical'
  | 'carpentry'
  | 'cleaning'
  | 'painting'
  | 'general'
type RequirementType = 'equipment' | 'materials' | 'access' | 'permits'

interface TaskFormData {
  // Basic Info
  title: string
  description: string
  serviceType: ServiceType

  // Date & Time
  date: {
    type: DateType
    onDate?: string
    beforeDate?: string
  }
  timePreference: {
    specific: boolean
    period?: TimePeriod
  }

  // Location
  location: {
    isOnSite: boolean
    address: string
    suburb: string
    postcode: string
    accessInstructions?: string
  }

  // Service Details
  details: {
    requirements: {
      type: RequirementType
      description: string
      providedBy: 'customer' | 'service_provider'
    }[]
    specifications: Record<string, unknown>
    additionalNotes: string
  }

  budget: string
  region: string

  account: {
    firstName: string
    lastName: string
    suburb: string
    goal: 'post' | 'earn'
    marketingConsent: boolean
    termsAccepted: boolean
  }
}

const initialFormData: TaskFormData = {
  title: '',
  description: '',
  serviceType: 'general',
  date: { type: 'flexible' },
  timePreference: { specific: false },
  location: {
    isOnSite: true,
    address: '',
    suburb: '',
    postcode: '',
  },
  details: {
    requirements: [],
    specifications: {},
    additionalNotes: '',
  },
  budget: '',
  region: '',
  account: {
    firstName: '',
    lastName: '',
    suburb: '',
    goal: 'post',
    marketingConsent: false,
    termsAccepted: false,
  },
}

const regions = [
  { name: 'Nigeria', image: countryNigeria },
  { name: 'Kenya', image: countryKenya },
  { name: 'Ethiopia', image: countryEthiopia },
  { name: 'Cameroon', image: countryCameroon },
  { name: 'Ghana', image: countryGhana },
]

const serviceTypes: { type: ServiceType; label: string; icon: string }[] = [
  { type: 'plumbing', label: 'Plumbing', icon: 'ph-drop' },
  { type: 'electrical', label: 'Electrical', icon: 'ph-lightning' },
  { type: 'carpentry', label: 'Carpentry', icon: 'ph-hammer' },
  { type: 'cleaning', label: 'Cleaning', icon: 'ph-broom' },
  { type: 'painting', label: 'Painting', icon: 'ph-paint-brush' },
  { type: 'general', label: 'General', icon: 'ph-tools' },
]

const TaskPostingForm = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<TaskFormData>(initialFormData)

  const updateFormData = (updates: Partial<TaskFormData>) => {
    setFormData((prev) => ({
      ...prev,
      ...updates,
    }))
  }

  const handleDateTypeChange = (type: DateType) => {
    setFormData((prev) => ({
      ...prev,
      date: {
        ...prev.date,
        type,
      },
    }))
  }

  const handleNext = () => {
    setStep((prev) => Math.min(prev + 1, 6))
  }

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1))
  }

  const renderStepIndicator = () => (
    <div className='col-span-12 md:col-span-4 xl:col-span-3 xl:col-start-2'>
      <div className='rounded-3xl border border-n30 p-4 sm:p-8'>
        <ul className='flex flex-col gap-8'>
          {[
            { number: 1, title: 'Service & Date' },
            { number: 2, title: 'Location' },
            { number: 3, title: 'Details' },
            { number: 4, title: 'Budget' },
          ].map((item, index) => (
            <li key={item.number} className='relative'>
              <div
                className={`flex w-full items-center justify-start gap-4 rounded-full ${
                  step === item.number ? 'bg-b50' : ''
                } p-2`}
              >
                <div
                  className={`flex size-9 items-center justify-center rounded-full 
                  ${
                    step > item.number
                      ? 'bg-b300 text-white'
                      : step === item.number
                      ? 'bg-b300 text-white'
                      : 'border-2 border-n300 text-n300'
                  } p-2 !leading-none`}
                >
                  {step > item.number ? (
                    <i className='ph-bold ph-check'></i>
                  ) : (
                    <span className='text-sm'>{item.number}</span>
                  )}
                </div>
                <p
                  className={`text-sm font-medium ${
                    step === item.number ? '' : 'text-n300'
                  }`}
                >
                  {item.title}
                </p>
              </div>
              {index < 3 && (
                <img
                  src={stepsIcon}
                  className='absolute -bottom-8 left-6'
                  alt=''
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )

  const renderStep1 = () => (
    <div className='col-span-12 md:col-span-8 xl:col-span-6 xl:col-start-6'>
      <div className='rounded-3xl border border-n30 p-6 sm:p-8'>
        <h4 className='heading-4'>Let's start with the basics</h4>

        {/* Service Type Selection */}
        <div className='pt-6'>
          <p className='pb-4 font-medium text-n300'>
            What type of service do you need?*
          </p>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
            {serviceTypes.map((service) => (
              <button
                key={service.type}
                onClick={() => updateFormData({ serviceType: service.type })}
                className={`rounded-lg p-4 flex flex-col items-center justify-center gap-2
                  ${
                    formData.serviceType === service.type
                      ? 'bg-n900 text-white'
                      : 'bg-n30'
                  }`}
              >
                <i className={`${service.icon} text-2xl`}></i>
                <span>{service.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Task Title */}
        <div className='pt-6'>
          <p className='pb-4'>Briefly describe what you need done*</p>
          <input
            type='text'
            value={formData.title}
            onChange={(e) => updateFormData({ title: e.target.value })}
            placeholder="e.g., 'Fix leaking bathroom tap' or 'Install new light fixture'"
            className='w-full rounded-2xl bg-n30 p-3 outline-none'
          />
        </div>

        {/* Detailed Description */}
        <div className='pt-6'>
          <p className='pb-4'>Provide more details about your task*</p>
          <textarea
            value={formData.description}
            onChange={(e) => updateFormData({ description: e.target.value })}
            placeholder='Describe your task in detail...'
            className='w-full rounded-2xl bg-n30 p-3 min-h-[100px] outline-none'
          />
        </div>

        {/* Date Selection */}
        <div className='pt-6'>
          <p className='pb-4 font-medium text-n300'>
            When do you need this done?*
          </p>
          <div className='flex flex-wrap items-center justify-start gap-2'>
            <div>
              <p className='pb-3 font-semibold'>On Date</p>
              <input
                type='date'
                value={formData.date.onDate}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    date: { type: 'on', onDate: e.target.value },
                  }))
                }
                className='rounded-full border border-n900 px-4 py-3 outline-none'
              />
            </div>

            <div>
              <p className='pb-3 font-semibold'>Before Date</p>
              <input
                type='date'
                value={formData.date.beforeDate}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    date: { type: 'before', beforeDate: e.target.value },
                  }))
                }
                className='rounded-full border border-n900 px-4 py-3 outline-none'
              />
            </div>

            <div>
              <p className='pb-3 font-semibold'>Anytime</p>
              <button
                onClick={() => handleDateTypeChange('flexible')}
                className={`rounded-full border border-n900 px-4 py-3 font-medium ${
                  formData.date.type === 'flexible' ? 'bg-n900 text-white' : ''
                }`}
              >
                I'm flexible
              </button>
            </div>
          </div>
        </div>

        {/* Time Preference */}
        <div className='flex items-center justify-start gap-2 pb-6 pt-6 font-medium lg:pb-10'>
          <input
            type='checkbox'
            checked={formData.timePreference.specific}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                timePreference: {
                  ...prev.timePreference,
                  specific: e.target.checked,
                },
              }))
            }
          />
          <p>I need a certain time of day</p>
        </div>

        {formData.timePreference.specific && (
          <div className='flex flex-wrap items-center justify-start gap-3'>
            {['Morning', 'Afternoon', 'Evening', 'Night'].map((period) => (
              <div
                key={period}
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    timePreference: {
                      ...prev.timePreference,
                      period: period.toLowerCase() as TimePeriod,
                    },
                  }))
                }
                className={`cursor-pointer rounded-2xl ${
                  formData.timePreference.period === period.toLowerCase()
                    ? 'bg-n900 text-white'
                    : 'bg-n30'
                } px-3 py-3 text-center duration-500 hover:bg-n900 hover:text-white lg:px-5 lg:py-6`}
              >
                <p className='font-semibold'>{period}</p>
                <p className='text-sm font-medium'>
                  Before {period === 'Morning' ? '10am' : '4pm'}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className='stp-15 flex items-center justify-end'>
          <button
            onClick={handleNext}
            className='relative flex w-1/2 items-center justify-center overflow-hidden rounded-full bg-b300 px-4 py-2 text-lg font-medium text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] lg:px-8 lg:py-3'
          >
            <span className='relative z-10'>Next</span>
          </button>
        </div>
      </div>
    </div>
  )

  const renderStep2 = () => (
    <div className='col-span-12 md:col-span-8 xl:col-span-6 xl:col-start-6'>
      <div className='rounded-3xl border border-n30 p-6 sm:p-8'>
        <h4 className='heading-4'>Tell us where</h4>

        {/* On-site Service */}
        <div className='pt-6 lg:pt-10'>
          <p className='pb-4 font-medium text-n300'>
            Does this task require on-site service?*
          </p>
          <div className='flex items-center justify-start font-medium'>
            <button
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  location: { ...prev.location, isOnSite: true },
                }))
              }
              className={`rounded-lg ${
                formData.location.isOnSite ? 'bg-n900 text-white' : 'bg-n30'
              } px-10 py-3 lg:px-15`}
            >
              Yes
            </button>
            <button
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  location: { ...prev.location, isOnSite: false },
                }))
              }
              className={`rounded-lg ${
                !formData.location.isOnSite ? 'bg-n900 text-white' : 'bg-n30'
              } px-10 py-3 lg:px-15`}
            >
              No
            </button>
          </div>
        </div>

        {/* Address Fields */}
        {formData.location.isOnSite && (
          <>
            <div className='mt-6'>
              <p className='pb-4'>Street Address*</p>
              <input
                type='text'
                value={formData.location.address}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    location: { ...prev.location, address: e.target.value },
                  }))
                }
                className='w-full rounded-2xl bg-n30 p-3 outline-none'
                placeholder='Enter street address'
              />
            </div>

            <div className='mt-6'>
              <p className='pb-4'>Suburb*</p>
              <input
                type='text'
                value={formData.location.suburb}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    location: { ...prev.location, suburb: e.target.value },
                  }))
                }
                className='w-full rounded-2xl bg-n30 p-3 outline-none'
                placeholder='Enter suburb'
              />
            </div>

            <div className='mt-6'>
              <p className='pb-4'>Postcode*</p>
              <input
                type='text'
                value={formData.location.postcode}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    location: { ...prev.location, postcode: e.target.value },
                  }))
                }
                className='w-full rounded-2xl bg-n30 p-3 outline-none'
                placeholder='Enter postcode'
              />
            </div>

            <div className='mt-6'>
              <p className='pb-4'>Access Instructions</p>
              <textarea
                value={formData.location.accessInstructions}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    location: {
                      ...prev.location,
                      accessInstructions: e.target.value,
                    },
                  }))
                }
                className='w-full rounded-2xl bg-n30 p-3 min-h-[100px] outline-none'
                placeholder='Any specific instructions for accessing the location?'
              />
            </div>
          </>
        )}

        <div className='stp-15 flex items-center justify-between gap-6 mt-6'>
          <button
            onClick={handleBack}
            className='relative flex w-full items-center justify-center overflow-hidden rounded-full bg-n30 px-4 py-2 text-lg font-medium duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] lg:px-8 lg:py-3'
          >
            <span className='relative z-10'>Back</span>
          </button>
          <button
            onClick={handleNext}
            className='relative flex w-full items-center justify-center overflow-hidden rounded-full bg-b300 px-4 py-2 text-lg font-medium text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] lg:px-8 lg:py-3'
          >
            <span className='relative z-10'>Next</span>
          </button>
        </div>
      </div>
    </div>
  )

  const renderStep3 = () => (
    <div className='col-span-12 md:col-span-8 xl:col-span-6 xl:col-start-6'>
      <div className='rounded-3xl border border-n30 p-6 sm:p-8'>
        <h4 className='heading-4'>Service Requirements</h4>

        {/* Requirements Section */}
        <div className='pt-6 lg:pt-10'>
          <p className='pb-4 font-medium text-n300'>Requirements*</p>
          {formData.details.requirements.map((req, index) => (
            <div key={index} className='mb-4 p-4 bg-n30 rounded-xl'>
              <div className='flex justify-between items-center'>
                <select
                  value={req.type}
                  onChange={(e) => {
                    const newReqs = [...formData.details.requirements]
                    newReqs[index].type = e.target.value as RequirementType
                    setFormData((prev) => ({
                      ...prev,
                      details: { ...prev.details, requirements: newReqs },
                    }))
                  }}
                  className='bg-transparent outline-none'
                >
                  <option value='equipment'>Equipment</option>
                  <option value='materials'>Materials</option>
                  <option value='access'>Access</option>
                  <option value='permits'>Permits</option>
                </select>
                <button
                  onClick={() => {
                    const newReqs = formData.details.requirements.filter(
                      (_, i) => i !== index
                    )
                    setFormData((prev) => ({
                      ...prev,
                      details: { ...prev.details, requirements: newReqs },
                    }))
                  }}
                  className='text-r300'
                >
                  <i className='ph-bold ph-x'></i>
                </button>
              </div>
              <input
                type='text'
                value={req.description}
                onChange={(e) => {
                  const newReqs = [...formData.details.requirements]
                  newReqs[index].description = e.target.value
                  setFormData((prev) => ({
                    ...prev,
                    details: { ...prev.details, requirements: newReqs },
                  }))
                }}
                placeholder='Describe the requirement'
                className='w-full mt-2 bg-transparent outline-none'
              />
              <select
                value={req.providedBy}
                onChange={(e) => {
                  const newReqs = [...formData.details.requirements]
                  newReqs[index].providedBy = e.target.value as
                    | 'customer'
                    | 'service_provider'
                  setFormData((prev) => ({
                    ...prev,
                    details: { ...prev.details, requirements: newReqs },
                  }))
                }}
                className='mt-2 bg-transparent outline-none'
              >
                <option value='customer'>I will provide</option>
                <option value='service_provider'>
                  Service provider should provide
                </option>
              </select>
            </div>
          ))}
          <button
            onClick={() => {
              setFormData((prev) => ({
                ...prev,
                details: {
                  ...prev.details,
                  requirements: [
                    ...prev.details.requirements,
                    {
                      type: 'equipment',
                      description: '',
                      providedBy: 'customer',
                    },
                  ],
                },
              }))
            }}
            className='text-b300 flex items-center gap-2'
          >
            <i className='ph-bold ph-plus'></i>
            Add Requirement
          </button>
        </div>

        {/* Additional Notes */}
        <div className='pt-6'>
          <p className='pb-4 font-medium text-n300'>Additional Notes</p>
          <textarea
            value={formData.details.additionalNotes}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                details: {
                  ...prev.details,
                  additionalNotes: e.target.value,
                },
              }))
            }
            placeholder='Any other details the service provider should know?'
            className='w-full rounded-2xl bg-n30 p-3 min-h-[150px] outline-none'
          />
        </div>

        <div className='stp-15 flex items-center justify-between gap-6 mt-6'>
          <button
            onClick={handleBack}
            className='relative flex w-full items-center justify-center overflow-hidden rounded-full bg-n30 px-4 py-2 text-lg font-medium duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] lg:px-8 lg:py-3'
          >
            <span className='relative z-10'>Back</span>
          </button>
          <button
            onClick={handleNext}
            className='relative flex w-full items-center justify-center overflow-hidden rounded-full bg-b300 px-4 py-2 text-lg font-medium text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] lg:px-8 lg:py-3'
          >
            <span className='relative z-10'>Next</span>
          </button>
        </div>
      </div>
    </div>
  )

  const renderStep4 = () => (
    <div className='col-span-12 md:col-span-8 xl:col-span-6 xl:col-start-6'>
      <div className='rounded-3xl border border-n30 p-6 sm:p-8'>
        <h4 className='heading-4'>Budget</h4>

        <p className='pt-10 font-medium text-n300'>What is your budget?*</p>
        <p className='pt-1 text-n300'>
          You can always negotiate the final price with the service provider.
        </p>

        <div className='mt-4 flex items-center justify-start gap-3 rounded-2xl bg-n30 p-3'>
          <i className='ph-bold ph-currency-dollar-simple'></i>
          <input
            type='text'
            value={formData.budget}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, budget: e.target.value }))
            }
            className='w-full bg-transparent outline-none placeholder:font-medium placeholder:text-n900'
            placeholder='Enter budget'
          />
        </div>

        <div className='stp-15 flex items-center justify-between gap-6 mt-6'>
          <button
            onClick={handleBack}
            className='relative flex w-full items-center justify-center overflow-hidden rounded-full bg-n30 px-4 py-2 text-lg font-medium duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] lg:px-8 lg:py-3'
          >
            <span className='relative z-10'>Back</span>
          </button>
          <button
            onClick={handleNext}
            className='relative flex w-full items-center justify-center overflow-hidden rounded-full bg-b300 px-4 py-2 text-lg font-medium text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] lg:px-8 lg:py-3'
          >
            <span className='relative z-10'>Next</span>
          </button>
        </div>
      </div>
    </div>
  )

  const renderStep5 = () => (
    <>
      <div className='container grid grid-cols-12 pt-20'>
        <div className='col-span-12 sm:col-span-6 sm:col-start-4 lg:col-span-4 lg:col-start-5'>
          <h4 className='heading-4'>Select your region</h4>
          <div className='flex flex-col gap-10 pt-10'>
            {regions.map((region) => (
              <button
                key={region.name}
                onClick={() => {
                  setFormData((prev) => ({ ...prev, region: region.name }))
                }}
                className='flex items-center justify-between hover:bg-gray-50 p-2 rounded-lg transition-colors'
              >
                <div className='flex items-center justify-start gap-6'>
                  <img
                    src={region.image}
                    alt={region.name}
                    width={70}
                    height={50}
                  />
                  <p className='text-lg font-medium'>{region.name}</p>
                </div>
                <div className='text-xl'>
                  <i className='ph-bold ph-caret-right'></i>
                </div>
              </button>
            ))}
          </div>
          <div className='stp-15 flex items-center justify-between gap-6 mt-10'>
            <button
              onClick={handleBack}
              className='relative flex w-full items-center justify-center overflow-hidden rounded-full bg-n30 px-4 py-2 text-lg font-medium duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] lg:px-8 lg:py-3'
            >
              <span className='relative z-10'>Back</span>
            </button>
            <button
              onClick={handleNext}
              className='relative flex w-full items-center justify-center overflow-hidden rounded-full bg-b300 px-4 py-2 text-lg font-medium text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] lg:px-8 lg:py-3'
            >
              <span className='relative z-10'>Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )

  const renderStep6 = () => (
    <div className='sbp-30 container grid grid-cols-12 pt-20'>
      <div className='col-span-12 rounded-2xl border border-n30 p-4 sm:p-10 md:col-span-8 md:col-start-3 xxl:col-span-6 xxl:col-start-4'>
        <h4 className='heading-4 flex items-center justify-center gap-2'>
          <i className='ph-bold ph-caret-left'></i> Set up your account
        </h4>
        <div className='flex flex-col gap-4 pt-6 sm:gap-6 lg:pt-10'>
          <div>
            <p className='pb-4'>First name *</p>
            <input
              type='text'
              value={formData.account.firstName}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  account: { ...prev.account, firstName: e.target.value },
                }))
              }
              className='w-full rounded-xl bg-n30 p-3 outline-none'
            />
          </div>
          <div>
            <p className='pb-4'>Last name *</p>
            <input
              type='text'
              value={formData.account.lastName}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  account: { ...prev.account, lastName: e.target.value },
                }))
              }
              className='w-full rounded-xl bg-n30 p-3 outline-none'
            />
          </div>
          <div>
            <p className='pb-4'>Enter your home suburb *</p>
            <input
              type='text'
              value={formData.account.suburb}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  account: { ...prev.account, suburb: e.target.value },
                }))
              }
              className='w-full rounded-xl bg-n30 p-3 outline-none'
            />
          </div>
          <div>
            <p className='pb-4'>What is your main goal on Bollo? *</p>
            <div className='flex w-full items-center justify-start font-medium max-sm:flex-wrap'>
              <button
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    account: { ...prev.account, goal: 'post' },
                  }))
                }
                className={`rounded-lg ${
                  formData.account.goal === 'post'
                    ? 'bg-n900 text-white'
                    : 'bg-n30'
                } px-4 py-3 sm:w-full sm:px-10 lg:px-15`}
              >
                <i className='ph-bold ph-notepad block text-xl leading-none'></i>
                <span className='block pt-2'>Post Jobs</span>
              </button>
              <button
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    account: { ...prev.account, goal: 'earn' },
                  }))
                }
                className={`rounded-lg ${
                  formData.account.goal === 'earn'
                    ? 'bg-n900 text-white'
                    : 'bg-n30'
                } px-4 py-3 duration-500 hover:bg-n900 hover:text-white sm:w-full sm:px-10 lg:px-15`}
              >
                <i className='ph-bold ph-money block text-xl leading-none'></i>
                <span className='block pt-2'>Earn Money</span>
              </button>
            </div>
          </div>
          <div className='flex items-center justify-start gap-3'>
            <input
              type='checkbox'
              checked={formData.account.marketingConsent}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  account: {
                    ...prev.account,
                    marketingConsent: e.target.checked,
                  },
                }))
              }
            />
            <p className='text-sm text-n300'>
              I agree to receive product updates, marketing materials and
              special offers via email, SMS, and push notifications
            </p>
          </div>
          <div className='flex items-center justify-start gap-3'>
            <input
              type='checkbox'
              checked={formData.account.termsAccepted}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  account: { ...prev.account, termsAccepted: e.target.checked },
                }))
              }
            />
            <p className='text-sm text-n300'>
              I agree to the Bollo
              <a href='./terms-conditions' className='text-b300'>
                {' '}
                Terms & Conditions
              </a>
              , Community Guidelines, and
              <a href='./privacy-policy' className='text-b300'>
                {' '}
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
        <div className='w-full pt-10'>
          <button
            onClick={handleSubmit}
            className='relative flex w-full items-center justify-center overflow-hidden rounded-full bg-b300 px-4 py-2 text-lg font-medium text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] lg:px-8 lg:py-3'
          >
            <span className='relative z-10'>Create Account</span>
          </button>
        </div>
      </div>
    </div>
  )

  const handleSubmit = () => {
    console.log('Final form submission:', formData)
    // Handle form submission
  }

  return (
    <section>
      <div className='4xl:large-container flex items-center justify-between pt-6 max-4xl:container'>
        <Link to='/'>
          <img src={logo} alt='Bollo logo' className='w-auto h-14' />
        </Link>
        <Link
          to='/'
          className='flex items-center justify-start gap-2 text-lg font-medium duration-500 hover:text-r300'
        >
          Cancel <i className='ph-bold ph-x !leading-none'></i>
        </Link>
      </div>
      {step < 5 ? (
        <div className='stp-30 container grid grid-cols-12 gap-6'>
          {renderStepIndicator()}
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}
          {step === 4 && renderStep4()}
        </div>
      ) : (
        <>
          {step === 5 && renderStep5()}
          {step === 6 && renderStep6()}
        </>
      )}
    </section>
  )
}

export default TaskPostingForm
