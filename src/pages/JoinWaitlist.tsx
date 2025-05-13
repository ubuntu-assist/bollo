import React, { useState } from 'react'
import { Link } from 'react-router'
import waitlistImage from '../assets/images/waitlist-illustration.jpg'
import logoIcon from '../assets/images/logo.png'
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconCheck,
  IconBellRinging,
  IconDevices,
  IconUsers,
  IconArrowRight,
  IconBrandX,
} from '@tabler/icons-react'

// Define form field interface
interface FormField {
  id: string
  label: string
  type: string
  placeholder: string
  required: boolean
  value: string
}

// Define waitlist benefit interface
interface WaitlistBenefit {
  icon: React.ReactNode
  title: string
  description: string
}

const JoinWaitlist: React.FC = () => {
  // Form fields state
  const [formFields, setFormFields] = useState<FormField[]>([
    {
      id: 'fullName',
      label: 'Full Name',
      type: 'text',
      placeholder: 'Enter your full name',
      required: true,
      value: '',
    },
    {
      id: 'email',
      label: 'Email Address',
      type: 'email',
      placeholder: 'Enter your email address',
      required: true,
      value: '',
    },
    {
      id: 'phone',
      label: 'Phone Number',
      type: 'tel',
      placeholder: 'Enter your phone number',
      required: false,
      value: '',
    },
    {
      id: 'interest',
      label: 'I am interested as a',
      type: 'select',
      placeholder: 'Select your interest',
      required: true,
      value: '',
    },
  ])

  // Interest options
  const interestOptions = [
    { value: '', label: 'Select your interest' },
    { value: 'customer', label: 'Customer looking for services' },
    { value: 'worker', label: 'Service provider looking for work' },
    { value: 'both', label: 'Both customer and service provider' },
  ]

  // Waitlist benefits
  const waitlistBenefits: WaitlistBenefit[] = [
    {
      icon: (
        <IconBellRinging size={24} stroke={1.5} className='text-[#1B3B86]' />
      ),
      title: 'Early Access',
      description: 'Be the first to experience our platform when we launch',
    },
    {
      icon: <IconDevices size={24} stroke={1.5} className='text-[#1B3B86]' />,
      title: 'Special Offers',
      description: 'Exclusive deals and promotions only for waitlist members',
    },
    {
      icon: <IconUsers size={24} stroke={1.5} className='text-[#1B3B86]' />,
      title: 'Priority Support',
      description: 'Get dedicated onboarding and premium support from our team',
    },
  ]

  // Form submission count
  const [submissionCount, setSubmissionCount] = useState<number>(1352)
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  // Handle form input changes
  const handleInputChange = (id: string, value: string) => {
    setFormFields((prevFields) =>
      prevFields.map((field) => (field.id === id ? { ...field, value } : field))
    )
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setSubmissionCount((prevCount) => prevCount + 1)
    // In a real implementation, you would send this data to your backend
  }

  return (
    <>
      <section className='sbp-30 stp-30'>
        <div className='container grid grid-cols-12 gap-6'>
          {/* Main Content */}
          <div className='col-span-12 lg:col-span-8'>
            <div className='grid grid-cols-12 gap-6'>
              {/* Waitlist Image */}
              <div className='col-span-12 overflow-hidden rounded-xl md:col-span-6'>
                <img
                  src={waitlistImage}
                  className='w-full rounded-xl'
                  alt='Join our waitlist'
                />
              </div>

              {/* Waitlist Header */}
              <div className='col-span-12 flex flex-col items-start justify-start lg:col-span-6'>
                <div className='flex flex-col items-start justify-start'>
                  <div className='flex items-center gap-2 text-b300 mb-2'>
                    <IconBellRinging size={24} stroke={1.5} />
                    <span className='font-medium'>Coming Soon</span>
                  </div>
                  <h3 className='heading-3 pb-3'>
                    Join Our Exclusive Waitlist
                  </h3>
                  <p className='text-n300 mb-4'>
                    Be the first to experience our revolutionary platform
                    connecting customers with skilled service providers across
                    Africa. Sign up now to secure your spot and receive
                    exclusive benefits when we launch.
                  </p>

                  <div className='flex items-center justify-start gap-3 mb-2'>
                    <span className='rounded-full bg-g300 px-3 py-1 text-sm font-medium text-white'>
                      Limited Spots
                    </span>
                    <p className='text-sm text-n300'>
                      {submissionCount} people already joined
                    </p>
                  </div>
                </div>

                <div className='mt-4 flex w-full items-center justify-between border-y border-n30 py-3'>
                  <div className='flex items-center justify-start gap-2'>
                    <i className='ph-fill ph-star text-2xl !leading-none text-b300'></i>
                    <p className='text-n300'>Share with friends</p>
                  </div>
                  <div className='flex items-center gap-4'>
                    <IconBrandFacebook
                      size={24}
                      stroke={1.5}
                      className='text-b300 cursor-pointer hover:text-[#E31C79] transition-colors'
                    />
                    <IconBrandX
                      size={24}
                      stroke={1.5}
                      className='text-b300 cursor-pointer hover:text-[#E31C79] transition-colors'
                    />
                    <IconBrandInstagram
                      size={24}
                      stroke={1.5}
                      className='text-b300 cursor-pointer hover:text-[#E31C79] transition-colors'
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className='stp-15 sbp-15'>
              <h3 className='heading-3 border-b border-n30 pb-5'>
                Waitlist Benefits
              </h3>

              <div className='grid grid-cols-1 md:grid-cols-3 gap-6 pt-8'>
                {waitlistBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className='rounded-xl border border-n30 p-6 transition-all hover:border-b300 hover:shadow-md'
                  >
                    <div className='flex flex-col gap-4'>
                      <div className='rounded-full bg-b50 w-12 h-12 flex items-center justify-center'>
                        {benefit.icon}
                      </div>
                      <h4 className='heading-4'>{benefit.title}</h4>
                      <p className='text-n300'>{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Registration Form Section */}
            {!isSubmitted ? (
              <div className='stp-15 sbp-15'>
                <h3 className='heading-3 border-b border-n30 pb-5'>
                  Register for Early Access
                </h3>

                <form onSubmit={handleSubmit} className='pt-8'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
                    {formFields.map((field) => (
                      <div key={field.id} className='flex flex-col gap-2'>
                        <label
                          htmlFor={field.id}
                          className='text-n400 font-medium'
                        >
                          {field.label}
                          {field.required && (
                            <span className='text-r300'>*</span>
                          )}
                        </label>

                        {field.type === 'select' ? (
                          <select
                            id={field.id}
                            required={field.required}
                            value={field.value}
                            onChange={(e) =>
                              handleInputChange(field.id, e.target.value)
                            }
                            className='rounded-lg border border-n30 px-4 py-3 text-n300 focus:border-b300 focus:outline-none focus:ring-2 focus:ring-b300'
                          >
                            {interestOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <input
                            type={field.type}
                            id={field.id}
                            placeholder={field.placeholder}
                            required={field.required}
                            value={field.value}
                            onChange={(e) =>
                              handleInputChange(field.id, e.target.value)
                            }
                            className='rounded-lg border border-n30 px-4 py-3 text-n300 focus:border-b300 focus:outline-none focus:ring-2 focus:ring-b300'
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  <div className='flex items-start gap-3 mb-8'>
                    <input
                      type='checkbox'
                      id='agreeTerms'
                      required
                      className='mt-1'
                    />
                    <label htmlFor='agreeTerms' className='text-n300'>
                      I agree to receive updates about the platform launch and
                      understand that my information will be handled according
                      to the{' '}
                      <Link
                        to='/privacy-policy'
                        className='text-b300 hover:text-[#E31C79] transition-colors'
                      >
                        Privacy Policy
                      </Link>
                    </label>
                  </div>

                  <button
                    type='submit'
                    className='relative block w-full md:w-auto overflow-hidden rounded-full bg-b300 px-8 py-3 text-sm font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]'
                  >
                    <div className='relative z-20 flex items-center justify-center gap-3'>
                      <IconBellRinging size={20} stroke={2} />
                      <span>Join the Waitlist</span>
                    </div>
                  </button>
                </form>
              </div>
            ) : (
              <div className='stp-15 sbp-15 rounded-xl bg-g50 p-8 text-center'>
                <div className='flex flex-col items-center justify-center gap-6'>
                  <div className='rounded-full bg-g300 p-4'>
                    <IconCheck size={32} stroke={2} className='text-white' />
                  </div>
                  <h3 className='heading-3'>Thank You for Joining!</h3>
                  <p className='text-n300 max-w-xl mx-auto'>
                    Your spot on our waitlist has been secured. We'll notify you
                    as soon as we launch. Check your email for a confirmation
                    message.
                  </p>
                  <div className='flex flex-col sm:flex-row gap-4 pt-4'>
                    <Link
                      to='/'
                      className='relative block overflow-hidden rounded-full bg-white border border-n30 px-6 py-3 text-sm font-semibold text-n700 duration-700'
                    >
                      <div className='relative z-20 flex items-center justify-center gap-3'>
                        <span>Return to Homepage</span>
                      </div>
                    </Link>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className='relative block overflow-hidden rounded-full bg-b300 px-6 py-3 text-sm font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]'
                    >
                      <div className='relative z-20 flex items-center justify-center gap-3'>
                        <span>Add Another Email</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* FAQ Section */}
            <div className='mt-6 rounded-xl border border-n30 p-4 sm:mt-14 sm:p-8'>
              <h5 className='heading-5'>Frequently Asked Questions</h5>

              <div className='flex flex-col gap-4 pt-10'>
                {[
                  {
                    question: 'When will the platform launch?',
                    answer:
                      'We are planning to launch the platform in Q3 2025. Waitlist members will get early access before the public launch.',
                  },
                  {
                    question: 'Is there a fee to join the waitlist?',
                    answer:
                      'No, joining our waitlist is completely free. You will also get exclusive benefits when we launch.',
                  },
                  {
                    question: 'How will I be notified about the launch?',
                    answer:
                      'We will send you updates via email. Make sure to add our email address to your contacts to avoid missing important updates.',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className='rounded-2xl border border-n30 p-5'
                  >
                    <div className='flex flex-col gap-3'>
                      <h5 className='heading-5'>{item.question}</h5>
                      <p className='text-n300'>{item.answer}</p>
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
                  <div className='flex items-center justify-center'>
                    <img src={logoIcon} alt='Logo' className='h-16 w-auto' />
                  </div>
                  <h4 className='heading-4 text-center mt-4'>
                    Join {submissionCount}+ people on the waitlist
                  </h4>
                  <p className='text-sm text-center mt-2'>
                    Secure your spot for early access to our platform
                  </p>

                  <div className='pt-6'>
                    {!isSubmitted ? (
                      <button
                        onClick={() => {
                          const formElement = document.querySelector('form')
                          if (formElement) {
                            formElement.scrollIntoView({ behavior: 'smooth' })
                          }
                        }}
                        className='relative block w-full overflow-hidden rounded-full bg-b300 px-6 py-3 text-sm font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]'
                      >
                        <div className='relative z-20 flex items-center justify-center gap-3'>
                          <span>Sign Up Now</span>
                          <IconArrowRight size={18} stroke={2} />
                        </div>
                      </button>
                    ) : (
                      <div className='flex items-center justify-center gap-2 bg-g50 text-g600 rounded-lg p-3'>
                        <IconCheck size={20} stroke={2} />
                        <span className='text-sm font-medium'>
                          You're on the list!
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className='flex flex-col items-start justify-start pt-6'>
                  <p className='text-sm font-medium'>What to Expect</p>

                  <div className='flex flex-col gap-3 w-full pt-3'>
                    {[
                      {
                        text: 'Early platform access',
                        icon: 'ph-fill ph-check-circle',
                      },
                      {
                        text: 'Exclusive launch promotions',
                        icon: 'ph-fill ph-gift',
                      },
                      {
                        text: 'Priority customer support',
                        icon: 'ph-fill ph-headset',
                      },
                      {
                        text: 'No payment required',
                        icon: 'ph-fill ph-currency-dollar',
                      },
                      {
                        text: 'Updates on launch progress',
                        icon: 'ph-fill ph-bell',
                      },
                    ].map((item, index) => (
                      <div key={index} className='flex items-center gap-3'>
                        <i className={`${item.icon} text-xl text-b300`}></i>
                        <p className='text-sm'>{item.text}</p>
                      </div>
                    ))}
                  </div>

                  <div className='w-full mt-8 p-4 bg-b50 rounded-xl'>
                    <p className='text-sm text-center italic'>
                      "We're building the most comprehensive platform for
                      service providers and customers in Africa. Join us on this
                      journey!"
                    </p>
                    <p className='text-sm font-medium text-center mt-2'>
                      - The Bollo Team
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

export default JoinWaitlist
