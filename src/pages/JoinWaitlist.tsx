import React, { useState, useEffect } from 'react'
import { Link } from 'react-router'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { isValidPhoneNumber } from 'react-phone-number-input'
import waitlistImage from '../assets/images/waitlist-illustration.jpg'
import logoIcon from '../assets/images/logo.png'
import {
  IconBrandFacebook,
  IconCheck,
  IconBellRinging,
  IconDevices,
  IconUsers,
  IconArrowRight,
  IconBrandX,
  IconBrandLinkedin,
  IconAlertCircle,
} from '@tabler/icons-react'
import { airtableService, WaitlistEntry } from '@/services/airtableService'
import { PhoneInput } from '@/components/ui/phone-input'

// Zod validation schema
const waitlistSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Full name must be at least 2 characters')
    .max(100, 'Full name must be less than 100 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Full name can only contain letters and spaces'),
  email: z
    .string()
    .email('Please enter a valid email address')
    .min(1, 'Email is required'),
  phone: z
    .string()
    .optional()
    .refine((val) => !val || (val.trim() && isValidPhoneNumber(val)), {
      message: 'Please enter a valid phone number',
    }),
  interest: z.string().min(1, 'Please select your interest'),
  agreeTerms: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the terms and conditions',
  }),
})

type WaitlistFormData = z.infer<typeof waitlistSchema>

// Define waitlist benefit interface
interface WaitlistBenefit {
  icon: React.ReactNode
  title: string
  description: string
}

const JoinWaitlist: React.FC = () => {
  // React Hook Form setup with Zod validation
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      interest: '',
      agreeTerms: false,
    },
  })

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

  // Form submission states
  const [submissionCount, setSubmissionCount] = useState<number>(1352)
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const [submitError, setSubmitError] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  useEffect(() => {
    const loadWaitlistCount = async () => {
      try {
        const count = await airtableService.getWaitlistCount()
        setSubmissionCount(count)
      } catch (error) {
        console.error('Failed to load waitlist count:', error)
      }
    }

    loadWaitlistCount()
  }, [])

  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  const shareTitle = 'Join the Bollo Waitlist'
  const shareText =
    'I just joined the exclusive waitlist for Bollo - the revolutionary platform connecting customers with skilled service providers across Africa. Join me and get early access!'

  const handleShare = (platform: string) => {
    let shareLink = ''

    switch (platform) {
      case 'facebook':
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          shareUrl
        )}&quote=${encodeURIComponent(shareText)}`
        break
      case 'x':
        shareLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          shareUrl
        )}&text=${encodeURIComponent(shareText)}`
        break
      case 'linkedin':
        shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          shareUrl
        )}&title=${encodeURIComponent(shareTitle)}&summary=${encodeURIComponent(
          shareText
        )}`
        break
      default:
        return
    }

    if (typeof window !== 'undefined') {
      window.open(
        shareLink,
        '_blank',
        'width=600,height=400,scrollbars=yes,resizable=yes'
      )
    }
  }

  // Handle form submission with Airtable integration
  const onSubmit = async (data: WaitlistFormData) => {
    try {
      setSubmitError('')
      setIsSubmitting(true)

      const emailExists = await airtableService.emailExists(data.email)
      if (emailExists) {
        setSubmitError('This email is already on our waitlist!')
        return
      }

      const waitlistEntry: WaitlistEntry = {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone || undefined,
        interest: data.interest,
        agreeTerms: data.agreeTerms,
      }

      await airtableService.addWaitlistEntry(waitlistEntry)

      setIsSubmitted(true)
      setSubmissionCount((prevCount) => prevCount + 1)
      reset() // Reset form
    } catch (error) {
      console.error('Submission error:', error)
      if (error instanceof Error) {
        setSubmitError(error.message)
      } else {
        setSubmitError('Something went wrong. Please try again.')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  // Handle adding another email
  const handleAddAnother = () => {
    setIsSubmitted(false)
    setSubmitError('')
    reset()
  }

  return (
    <>
      <section className='py-16 sm:py-20 xl:py-24'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-12 gap-6'>
            {/* Main Content */}
            <div className='col-span-12 lg:col-span-8'>
              <div className='grid grid-cols-12 gap-6'>
                {/* Waitlist Image */}
                <div className='col-span-12 overflow-hidden rounded-xl md:col-span-6'>
                  <img
                    src={waitlistImage}
                    className='w-full h-full object-cover rounded-xl'
                    alt='Join our waitlist'
                  />
                </div>

                {/* Waitlist Header */}
                <div className='col-span-12 flex flex-col items-start justify-start md:col-span-6'>
                  <div className='flex flex-col items-start justify-start'>
                    <div className='flex items-center gap-2 text-[#E31C79] mb-4'>
                      <IconBellRinging size={24} stroke={1.5} />
                      <span className='font-medium text-lg'>Coming Soon</span>
                    </div>
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold pb-4 text-gray-900'>
                      Join Our Exclusive Waitlist
                    </h1>
                    <p className='text-gray-600 mb-6 text-lg leading-relaxed'>
                      Be the first to experience our revolutionary platform
                      connecting customers with skilled service providers across
                      Africa. Sign up now to secure your spot and receive
                      exclusive benefits when we launch.
                    </p>

                    <div className='flex items-center justify-start gap-3 mb-6'>
                      <span className='rounded-full bg-[#E31C79] px-4 py-2 text-sm font-medium text-white'>
                        Limited Spots
                      </span>
                      <p className='text-sm text-gray-600 font-medium'>
                        {submissionCount.toLocaleString()} people already joined
                      </p>
                    </div>
                  </div>

                  <div className='mt-6 flex w-full items-center justify-between border-y border-gray-200 py-4'>
                    <div className='flex items-center justify-start gap-2'>
                      <i className='ph-fill ph-star text-2xl !leading-none text-[#1B3B86]'></i>
                      <p className='text-gray-600 font-medium'>
                        Share with friends
                      </p>
                    </div>
                    <div className='flex items-center gap-4'>
                      <button
                        onClick={() => handleShare('facebook')}
                        className='text-[#1B3B86] cursor-pointer hover:text-[#E31C79] transition-colors p-2 rounded-full hover:bg-gray-100'
                        aria-label='Share on Facebook'
                      >
                        <IconBrandFacebook size={24} stroke={1.5} />
                      </button>
                      <button
                        onClick={() => handleShare('x')}
                        className='text-[#1B3B86] cursor-pointer hover:text-[#E31C79] transition-colors p-2 rounded-full hover:bg-gray-100'
                        aria-label='Share on X (Twitter)'
                      >
                        <IconBrandX size={24} stroke={1.5} />
                      </button>
                      <button
                        onClick={() => handleShare('linkedin')}
                        className='text-[#1B3B86] cursor-pointer hover:text-[#E31C79] transition-colors p-2 rounded-full hover:bg-gray-100'
                        aria-label='Share on LinkedIn'
                      >
                        <IconBrandLinkedin size={24} stroke={1.5} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits Section */}
              <div className='mt-16 mb-16'>
                <h2 className='text-2xl sm:text-3xl font-bold border-b border-gray-200 pb-6 text-gray-900'>
                  Waitlist Benefits
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 pt-8'>
                  {waitlistBenefits.map((benefit, index) => (
                    <div
                      key={index}
                      className='rounded-xl border border-gray-200 p-6 transition-all hover:border-[#1B3B86] hover:shadow-md bg-white'
                    >
                      <div className='flex flex-col gap-4'>
                        <div className='rounded-full bg-[#1B3B86]/10 w-12 h-12 flex items-center justify-center'>
                          {benefit.icon}
                        </div>
                        <h3 className='text-xl font-semibold text-gray-900'>
                          {benefit.title}
                        </h3>
                        <p className='text-gray-600 leading-relaxed'>
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Registration Form Section */}
              {!isSubmitted ? (
                <div className='mb-16'>
                  <h2 className='text-2xl sm:text-3xl font-bold border-b border-gray-200 pb-6 text-gray-900'>
                    Register for Early Access
                  </h2>

                  <form onSubmit={handleSubmit(onSubmit)} className='pt-8'>
                    {/* Show general error if any */}
                    {submitError && (
                      <div className='mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3'>
                        <IconAlertCircle
                          size={20}
                          className='text-red-500 flex-shrink-0'
                        />
                        <p className='text-red-700 text-sm'>{submitError}</p>
                      </div>
                    )}

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
                      {/* Full Name Field */}
                      <div className='flex flex-col gap-2'>
                        <label
                          htmlFor='fullName'
                          className='text-gray-900 font-medium'
                        >
                          Full Name
                          <span className='text-[#E31C79]'>*</span>
                        </label>
                        <input
                          type='text'
                          id='fullName'
                          placeholder='Enter your full name'
                          {...register('fullName')}
                          className={`rounded-lg border px-4 py-3 text-gray-600 focus:outline-none focus:ring-2 transition-colors ${
                            errors.fullName
                              ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                              : 'border-gray-200 focus:border-[#1B3B86] focus:ring-[#1B3B86]/20'
                          }`}
                        />
                        {errors.fullName && (
                          <p className='text-red-500 text-sm flex items-center gap-1'>
                            <IconAlertCircle size={16} />
                            {errors.fullName.message}
                          </p>
                        )}
                      </div>

                      {/* Email Field */}
                      <div className='flex flex-col gap-2'>
                        <label
                          htmlFor='email'
                          className='text-gray-900 font-medium'
                        >
                          Email Address
                          <span className='text-[#E31C79]'>*</span>
                        </label>
                        <input
                          type='email'
                          id='email'
                          placeholder='Enter your email address'
                          {...register('email')}
                          className={`rounded-lg border px-4 py-3 text-gray-600 focus:outline-none focus:ring-2 transition-colors ${
                            errors.email
                              ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                              : 'border-gray-200 focus:border-[#1B3B86] focus:ring-[#1B3B86]/20'
                          }`}
                        />
                        {errors.email && (
                          <p className='text-red-500 text-sm flex items-center gap-1'>
                            <IconAlertCircle size={16} />
                            {errors.email.message}
                          </p>
                        )}
                      </div>

                      {/* Phone Field */}
                      <div className='flex flex-col gap-2'>
                        <Controller
                          name='phone'
                          control={control}
                          render={({ field }) => (
                            <PhoneInput
                              {...field}
                              label='Phone Number'
                              placeholder='Enter your phone number'
                              error={errors.phone?.message}
                              id='phone'
                              className='w-full'
                            />
                          )}
                        />
                      </div>

                      {/* Interest Field */}
                      <div className='flex flex-col gap-2'>
                        <label
                          htmlFor='interest'
                          className='text-gray-900 font-medium'
                        >
                          I am interested as a
                          <span className='text-[#E31C79]'>*</span>
                        </label>
                        <select
                          id='interest'
                          {...register('interest')}
                          className={`rounded-lg border px-4 py-3 text-gray-600 focus:outline-none focus:ring-2 transition-colors ${
                            errors.interest
                              ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                              : 'border-gray-200 focus:border-[#1B3B86] focus:ring-[#1B3B86]/20'
                          }`}
                        >
                          {interestOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        {errors.interest && (
                          <p className='text-red-500 text-sm flex items-center gap-1'>
                            <IconAlertCircle size={16} />
                            {errors.interest.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Terms Checkbox */}
                    <div className='flex items-start gap-3 mb-8'>
                      <input
                        type='checkbox'
                        id='agreeTerms'
                        {...register('agreeTerms')}
                        className='mt-1 accent-[#1B3B86] w-4 h-4'
                      />
                      <div className='flex flex-col gap-1'>
                        <label htmlFor='agreeTerms' className='text-gray-600'>
                          I agree to receive updates about the platform launch
                          and understand that my information will be handled
                          according to the{' '}
                          <Link
                            to='/privacy-policy'
                            className='text-[#1B3B86] hover:text-[#E31C79] transition-colors underline'
                          >
                            Privacy Policy
                          </Link>
                        </label>
                        {errors.agreeTerms && (
                          <p className='text-red-500 text-sm flex items-center gap-1'>
                            <IconAlertCircle size={16} />
                            {errors.agreeTerms.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <button
                      type='submit'
                      disabled={isSubmitting}
                      className='group relative block w-full md:w-auto overflow-hidden rounded-full bg-[#E31C79] px-8 py-3 text-sm font-semibold text-white transition-all duration-500 hover:bg-[#E31C79]/90 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100'
                    >
                      <div className='relative z-20 flex items-center justify-center gap-3'>
                        {isSubmitting ? (
                          <>
                            <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white'></div>
                            <span>Joining...</span>
                          </>
                        ) : (
                          <>
                            <IconBellRinging size={20} stroke={2} />
                            <span>Join the Waitlist</span>
                          </>
                        )}
                      </div>
                    </button>
                  </form>
                </div>
              ) : (
                <div className='mb-16 rounded-xl bg-green-50 p-8 text-center border border-green-200'>
                  <div className='flex flex-col items-center justify-center gap-6'>
                    <div className='rounded-full bg-green-500 p-4'>
                      <IconCheck size={32} stroke={2} className='text-white' />
                    </div>
                    <h2 className='text-2xl sm:text-3xl font-bold text-gray-900'>
                      Thank You for Joining!
                    </h2>
                    <p className='text-gray-600 max-w-xl mx-auto text-lg leading-relaxed'>
                      Your spot on our waitlist has been secured. We'll notify
                      you as soon as we launch.
                    </p>
                    <div className='flex flex-col sm:flex-row gap-4 pt-4'>
                      <Link
                        to='/'
                        className='relative block overflow-hidden rounded-full bg-white border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 transition-all duration-300 hover:border-[#1B3B86] hover:text-[#1B3B86]'
                      >
                        <div className='relative z-20 flex items-center justify-center gap-3'>
                          <span>Return to Homepage</span>
                        </div>
                      </Link>
                      <button
                        onClick={handleAddAnother}
                        className='group relative block overflow-hidden rounded-full bg-[#E31C79] px-6 py-3 text-sm font-semibold text-white transition-all duration-500 hover:bg-[#E31C79]/90 hover:scale-105'
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
              <div className='rounded-xl border border-gray-200 p-6 sm:p-8 bg-white'>
                <h2 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-8'>
                  Frequently Asked Questions
                </h2>

                <div className='flex flex-col gap-6'>
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
                    {
                      question: 'What types of services will be available?',
                      answer:
                        'Our platform will connect customers with skilled service providers across various categories including home services, professional services, creative services, and more.',
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className='rounded-2xl border border-gray-200 p-6 hover:border-[#1B3B86]/30 transition-colors bg-gray-50'
                    >
                      <div className='flex flex-col gap-3'>
                        <h3 className='text-lg font-semibold text-gray-900'>
                          {item.question}
                        </h3>
                        <p className='text-gray-600 leading-relaxed'>
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className='col-span-12 lg:col-span-4'>
              <div className='sticky top-8'>
                <div className='rounded-2xl border border-gray-200 px-6 py-8 text-gray-600 bg-white shadow-sm'>
                  <div className='border-b border-gray-200 pb-6'>
                    <div className='flex items-center justify-center mb-4'>
                      <img
                        src={logoIcon}
                        alt='Bollo Logo'
                        className='h-16 w-auto'
                      />
                    </div>
                    <h3 className='text-xl font-bold text-center mt-4 text-gray-900'>
                      Join {submissionCount.toLocaleString()}+ people on the
                      waitlist
                    </h3>
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
                          className='group relative block w-full overflow-hidden rounded-full bg-[#E31C79] px-6 py-3 text-sm font-semibold text-white transition-all duration-500 hover:bg-[#E31C79]/90 hover:scale-105'
                        >
                          <div className='relative z-20 flex items-center justify-center gap-3'>
                            <span>Sign Up Now</span>
                            <IconArrowRight
                              size={18}
                              stroke={2}
                              className='transition-transform group-hover:translate-x-1'
                            />
                          </div>
                        </button>
                      ) : (
                        <div className='flex items-center justify-center gap-2 bg-green-50 text-green-600 rounded-lg p-3 border border-green-200'>
                          <IconCheck size={20} stroke={2} />
                          <span className='text-sm font-medium'>
                            You're on the list!
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className='flex flex-col items-start justify-start pt-6'>
                    <p className='text-sm font-medium text-gray-900 mb-4'>
                      What to Expect
                    </p>

                    <div className='flex flex-col gap-3 w-full'>
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
                          <i
                            className={`${item.icon} text-xl text-[#1B3B86]`}
                          ></i>
                          <p className='text-sm'>{item.text}</p>
                        </div>
                      ))}
                    </div>

                    <div className='w-full mt-8 p-4 bg-[#1B3B86]/5 rounded-xl border border-[#1B3B86]/10'>
                      <p className='text-sm text-center italic text-gray-700'>
                        "We're building the most comprehensive platform for
                        service providers and customers in Africa. Join us on
                        this journey!"
                      </p>
                      <p className='text-sm font-medium text-center mt-2 text-[#1B3B86]'>
                        - The Bollo Team
                      </p>
                    </div>
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
