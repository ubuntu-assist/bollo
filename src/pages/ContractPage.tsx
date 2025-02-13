import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import logo from '../assets/images/logo.png'
import stepsIcon from '../assets/images/steps_icon.png'

type ServiceType =
  | 'plumbing'
  | 'electrical'
  | 'carpentry'
  | 'cleaning'
  | 'painting'
  | 'general'
type PaymentTerms = 'full' | 'milestone' | 'escrow'
type DisputeResolution = 'mediation' | 'arbitration' | 'platform'
type PaymentReleaseTerms = 'completion' | 'milestone' | 'inspection'

interface SmartContractData {
  // Service Details
  serviceType: ServiceType
  title: string
  description: string

  // Contract Terms
  terms: {
    completionDeadline: string
    paymentTerms: PaymentTerms
    milestones: Array<{
      id: string
      description: string
      amount: number
      dueDate: string
    }>
    depositRequired: boolean
    depositAmount: string
    penalties: {
      lateCompletion: boolean
      lateCompletionFee: string
    }
  }

  // Verification
  verification: {
    requirePhotos: boolean
    requireInspection: boolean
    requireClientApproval: boolean
    disputeResolution: DisputeResolution
  }

  // Payment
  payment: {
    amount: string
    releaseTerms: PaymentReleaseTerms
    escrowRequired: boolean
  }
}

const serviceTypes = [
  { type: 'plumbing', label: 'Plumbing', icon: 'ph-drop' },
  { type: 'electrical', label: 'Electrical', icon: 'ph-lightning' },
  { type: 'carpentry', label: 'Carpentry', icon: 'ph-hammer' },
  { type: 'cleaning', label: 'Cleaning', icon: 'ph-broom' },
  { type: 'painting', label: 'Painting', icon: 'ph-paint-brush' },
  { type: 'general', label: 'General', icon: 'ph-tools' },
] as const

const SmartContractForm = () => {
  const [step, setStep] = useState(1)

  const navigate = useNavigate()
  const [formData, setFormData] = useState<SmartContractData>({
    serviceType: 'general',
    title: '',
    description: '',
    terms: {
      completionDeadline: '',
      paymentTerms: 'full',
      milestones: [],
      depositRequired: false,
      depositAmount: '',
      penalties: {
        lateCompletion: false,
        lateCompletionFee: '',
      },
    },
    verification: {
      requirePhotos: false,
      requireInspection: false,
      requireClientApproval: true,
      disputeResolution: 'mediation',
    },
    payment: {
      amount: '',
      releaseTerms: 'completion',
      escrowRequired: true,
    },
  })

  const handleInputChange = (
    section: keyof SmartContractData,
    field: string,
    value: unknown
  ) => {
    setFormData((prev) => ({
      ...prev,
      [section]:
        typeof prev[section] === 'object'
          ? { ...prev[section], [field]: value }
          : value,
    }))
  }

  const renderStepIndicator = () => (
    <div className='col-span-12 md:col-span-4 xl:col-span-3 xl:col-start-2'>
      <div className='rounded-3xl border border-n30 p-4 sm:p-8'>
        <ul className='flex flex-col gap-8'>
          {[
            { number: 1, title: 'Service Type' },
            { number: 2, title: 'Contract Terms' },
            { number: 3, title: 'Requirements' },
            { number: 4, title: 'Payment Setup' },
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

  const renderServiceSelection = () => (
    <div className='col-span-12 md:col-span-8 xl:col-span-6 xl:col-start-6'>
      <div className='rounded-3xl border border-n30 p-6 sm:p-8'>
        <h4 className='heading-4'>Select Service Type</h4>

        <div className='pt-6'>
          <p className='pb-4 font-medium text-n300'>
            What type of service do you need?*
          </p>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
            {serviceTypes.map((service) => (
              <button
                key={service.type}
                onClick={() =>
                  handleInputChange('serviceType', '', service.type)
                }
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

        <div className='pt-6'>
          <p className='pb-4'>Contract Title*</p>
          <input
            type='text'
            value={formData.title}
            onChange={(e) => handleInputChange('title', '', e.target.value)}
            placeholder='Give your contract a clear title'
            className='w-full rounded-2xl bg-n30 p-3 outline-none'
          />
        </div>

        <div className='pt-6'>
          <p className='pb-4'>Contract Description*</p>
          <textarea
            value={formData.description}
            onChange={(e) =>
              handleInputChange('description', '', e.target.value)
            }
            placeholder='Describe the service requirements in detail...'
            className='w-full rounded-2xl bg-n30 p-3 min-h-[100px] outline-none'
          />
        </div>

        <div className='stp-15 flex items-center justify-end'>
          <button
            onClick={() => setStep(2)}
            className='relative flex w-1/2 items-center justify-center overflow-hidden rounded-full bg-b300 px-4 py-2 text-lg font-medium text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] lg:px-8 lg:py-3'
          >
            <span className='relative z-10'>Next</span>
          </button>
        </div>
      </div>
    </div>
  )

  const renderContractTerms = () => (
    <div className='col-span-12 md:col-span-8 xl:col-span-6 xl:col-start-6'>
      <div className='rounded-3xl border border-n30 p-6 sm:p-8'>
        <h4 className='heading-4'>Define Contract Terms</h4>

        <div className='pt-6'>
          <p className='pb-4 font-medium text-n300'>Completion Deadline*</p>
          <input
            type='date'
            value={formData.terms.completionDeadline}
            onChange={(e) =>
              handleInputChange('terms', 'completionDeadline', e.target.value)
            }
            className='w-full rounded-2xl bg-n30 p-3 outline-none'
          />
        </div>

        <div className='pt-6'>
          <p className='pb-4 font-medium text-n300'>Payment Structure*</p>
          <div className='flex w-full items-center justify-start font-medium'>
            {['full', 'milestone', 'escrow'].map((term) => (
              <button
                key={term}
                onClick={() => handleInputChange('terms', 'paymentTerms', term)}
                className={`rounded-lg ${
                  formData.terms.paymentTerms === term
                    ? 'bg-n900 text-white'
                    : 'bg-n30'
                } px-4 py-3 mr-2`}
              >
                {term.charAt(0).toUpperCase() + term.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {formData.terms.paymentTerms === 'milestone' && (
          <div className='pt-6'>
            <p className='pb-4 font-medium text-n300'>Milestones</p>
            {formData.terms.milestones.map((milestone, index) => (
              <div key={milestone.id} className='mb-4 p-4 bg-n30 rounded-xl'>
                <input
                  type='text'
                  value={milestone.description}
                  onChange={(e) => {
                    const newMilestones = [...formData.terms.milestones]
                    newMilestones[index].description = e.target.value
                    handleInputChange('terms', 'milestones', newMilestones)
                  }}
                  placeholder='Milestone description'
                  className='w-full mb-2 bg-transparent outline-none'
                />
                <div className='flex gap-4'>
                  <input
                    type='number'
                    value={milestone.amount}
                    onChange={(e) => {
                      const newMilestones = [...formData.terms.milestones]
                      newMilestones[index].amount = Number(e.target.value)
                      handleInputChange('terms', 'milestones', newMilestones)
                    }}
                    placeholder='Amount'
                    className='w-1/2 bg-transparent outline-none'
                  />
                  <input
                    type='date'
                    value={milestone.dueDate}
                    onChange={(e) => {
                      const newMilestones = [...formData.terms.milestones]
                      newMilestones[index].dueDate = e.target.value
                      handleInputChange('terms', 'milestones', newMilestones)
                    }}
                    className='w-1/2 bg-transparent outline-none'
                  />
                </div>
              </div>
            ))}
            <button
              onClick={() => {
                const newMilestones = [...formData.terms.milestones]
                newMilestones.push({
                  id: Date.now().toString(),
                  description: '',
                  amount: 0,
                  dueDate: '',
                })
                handleInputChange('terms', 'milestones', newMilestones)
              }}
              className='text-b300 flex items-center gap-2'
            >
              <i className='ph-bold ph-plus'></i>
              Add Milestone
            </button>
          </div>
        )}

        <div className='stp-15 flex items-center justify-between gap-6 mt-6'>
          <button
            onClick={() => setStep(1)}
            className='relative flex w-full items-center justify-center overflow-hidden rounded-full bg-n30 px-4 py-2 text-lg font-medium duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] lg:px-8 lg:py-3'
          >
            <span className='relative z-10'>Back</span>
          </button>
          <button
            onClick={() => setStep(3)}
            className='relative flex w-full items-center justify-center overflow-hidden rounded-full bg-b300 px-4 py-2 text-lg font-medium text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] lg:px-8 lg:py-3'
          >
            <span className='relative z-10'>Next</span>
          </button>
        </div>
      </div>
    </div>
  )

  const renderRequirements = () => (
    <div className='col-span-12 md:col-span-8 xl:col-span-6 xl:col-start-6'>
      <div className='rounded-3xl border border-n30 p-6 sm:p-8'>
        <h4 className='heading-4'>Service Requirements</h4>

        <div className='pt-6'>
          <p className='pb-4 font-medium text-n300'>
            Verification Requirements
          </p>
          <div className='space-y-4'>
            <label className='flex items-center gap-2'>
              <input
                type='checkbox'
                checked={formData.verification.requirePhotos}
                onChange={(e) =>
                  handleInputChange(
                    'verification',
                    'requirePhotos',
                    e.target.checked
                  )
                }
                className='rounded'
              />
              <span>Require before/after photos</span>
            </label>

            <label className='flex items-center gap-2'>
              <input
                type='checkbox'
                checked={formData.verification.requireInspection}
                onChange={(e) =>
                  handleInputChange(
                    'verification',
                    'requireInspection',
                    e.target.checked
                  )
                }
                className='rounded'
              />
              <span>Require final inspection</span>
            </label>

            <label className='flex items-center gap-2'>
              <input
                type='checkbox'
                checked={formData.verification.requireClientApproval}
                onChange={(e) =>
                  handleInputChange(
                    'verification',
                    'requireClientApproval',
                    e.target.checked
                  )
                }
                className='rounded'
              />
              <span>Require client approval before payment release</span>
            </label>
          </div>
        </div>

        <div className='pt-6'>
          <p className='pb-4 font-medium text-n300'>
            Dispute Resolution Method*
          </p>
          <div className='grid grid-cols-3 gap-4'>
            {['mediation', 'arbitration', 'platform'].map((method) => (
              <button
                key={method}
                onClick={() =>
                  handleInputChange('verification', 'disputeResolution', method)
                }
                className={`rounded-lg p-4 ${
                  formData.verification.disputeResolution === method
                    ? 'bg-n900 text-white'
                    : 'bg-n30'
                }`}
              >
                {method.charAt(0).toUpperCase() + method.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className='stp-15 flex items-center justify-between gap-6 mt-6'>
          <button
            onClick={() => setStep(2)}
            className='relative flex w-full items-center justify-center overflow-hidden rounded-full bg-n30 px-4 py-2 text-lg font-medium duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] lg:px-8 lg:py-3'
          >
            <span className='relative z-10'>Back</span>
          </button>
          <button
            onClick={() => setStep(4)}
            className='relative flex w-full items-center justify-center overflow-hidden rounded-full bg-b300 px-4 py-2 text-lg font-medium text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] lg:px-8 lg:py-3'
          >
            <span className='relative z-10'>Next</span>
          </button>
        </div>
      </div>
    </div>
  )

  const renderPaymentSetup = () => (
    <div className='col-span-12 md:col-span-8 xl:col-span-6 xl:col-start-6'>
      <div className='rounded-3xl border border-n30 p-6 sm:p-8'>
        <h4 className='heading-4'>Payment Setup</h4>

        <div className='pt-6'>
          <p className='pb-4 font-medium text-n300'>Service Amount*</p>
          <div className='flex items-center justify-start gap-3 rounded-2xl bg-n30 p-3'>
            <i className='ph-bold ph-currency-dollar'></i>
            <input
              type='number'
              value={formData.payment.amount}
              onChange={(e) =>
                handleInputChange('payment', 'amount', e.target.value)
              }
              className='w-full bg-transparent outline-none placeholder:font-medium placeholder:text-n900'
              placeholder='Enter amount'
            />
          </div>
        </div>

        <div className='pt-6'>
          <p className='pb-4 font-medium text-n300'>Payment Release Terms*</p>
          <div className='flex flex-wrap items-center justify-start gap-3'>
            {['completion', 'milestone', 'inspection'].map((term) => (
              <button
                key={term}
                onClick={() =>
                  handleInputChange('payment', 'releaseTerms', term)
                }
                className={`rounded-2xl px-6 py-3 ${
                  formData.payment.releaseTerms === term
                    ? 'bg-n900 text-white'
                    : 'bg-n30'
                }`}
              >
                {term.charAt(0).toUpperCase() + term.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className='pt-6'>
          <label className='flex items-center gap-2'>
            <input
              type='checkbox'
              checked={formData.payment.escrowRequired}
              onChange={(e) =>
                handleInputChange('payment', 'escrowRequired', e.target.checked)
              }
              className='rounded'
            />
            <span className='font-medium'>Enable Escrow Protection</span>
          </label>
          {formData.payment.escrowRequired && (
            <p className='mt-2 text-sm text-n300'>
              Funds will be held in escrow until service completion and
              verification
            </p>
          )}
        </div>

        <div className='stp-15 flex items-center justify-between gap-6 mt-6'>
          <button
            onClick={() => setStep(3)}
            className='relative flex w-full items-center justify-center overflow-hidden rounded-full bg-n30 px-4 py-2 text-lg font-medium duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] lg:px-8 lg:py-3'
          >
            <span className='relative z-10'>Back</span>
          </button>
          <button
            onClick={() => navigate('/pay')}
            className='relative flex w-full items-center justify-center overflow-hidden rounded-full bg-b300 px-4 py-2 text-lg font-medium text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] lg:px-8 lg:py-3'
          >
            <span className='relative z-10'>Create Contract</span>
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <section>
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

      <div className='stp-30 container grid grid-cols-12 gap-6'>
        {renderStepIndicator()}
        {step === 1 && renderServiceSelection()}
        {step === 2 && renderContractTerms()}
        {step === 3 && renderRequirements()}
        {step === 4 && renderPaymentSetup()}
      </div>
    </section>
  )
}

export default SmartContractForm
