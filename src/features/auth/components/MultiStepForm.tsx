import React, { useState } from 'react'
import ImageEditorModal from './ImageEditorModal'
import googleIcon from '../../../assets/images/google_icon.png'
import facebookIcon from '../../../assets/images/facebook_icon.png'
import { Link } from 'react-router'

interface FormData {
  name: string
  email: string
  password: string
  companyName: string
  isIndividual: boolean
  professionalTitle: string
  location: string
  linkedinUrl: string
  noLinkedin: boolean
  profilePhoto: File | null
  photoPreview: string | null
}

interface FormErrors {
  name?: string
  email?: string
  password?: string
  companyName?: string
  professionalTitle?: string
  location?: string
  linkedinUrl?: string
}

const initialFormData: FormData = {
  name: '',
  email: '',
  password: '',
  companyName: '',
  isIndividual: false,
  professionalTitle: '',
  location: '',
  linkedinUrl: '',
  noLinkedin: false,
  profilePhoto: null,
  photoPreview: null,
}

const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

const validatePassword = (password: string): boolean => {
  return password.length >= 8
}

const validateStep = (step: number, formData: FormData): FormErrors => {
  const errors: FormErrors = {}

  switch (step) {
    case 1:
      if (!formData.name.trim()) {
        errors.name = 'Name is required'
      }
      if (!formData.email.trim()) {
        errors.email = 'Email is required'
      } else if (!validateEmail(formData.email)) {
        errors.email = 'Invalid email format'
      }
      if (!formData.password) {
        errors.password = 'Password is required'
      } else if (!validatePassword(formData.password)) {
        errors.password = 'Password must be at least 8 characters'
      }
      break

    case 2:
      if (!formData.isIndividual && !formData.companyName.trim()) {
        errors.companyName = 'Company name is required'
      }
      break

    case 3:
      if (!formData.professionalTitle.trim()) {
        errors.professionalTitle = 'Professional title is required'
      }
      if (!formData.location.trim()) {
        errors.location = 'Location is required'
      }
      if (!formData.noLinkedin && !formData.linkedinUrl.trim()) {
        errors.linkedinUrl = 'LinkedIn URL is required'
      }
      break
  }

  return errors
}

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState<number>(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isEditorOpen, setIsEditorOpen] = useState(false)
  const [tempImageUrl, setTempImageUrl] = useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setTempImageUrl(reader.result as string)
        setIsEditorOpen(true)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleCroppedImage = (croppedImage: string) => {
    fetch(croppedImage)
      .then((res) => res.blob())
      .then((blob) => {
        const file = new File([blob], 'profile-picture.png', {
          type: 'image/png',
        })
        setFormData((prev) => ({
          ...prev,
          profilePhoto: file,
          photoPreview: croppedImage,
        }))
      })
  }

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()

    const stepErrors = validateStep(step, formData)
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors)
      return
    }

    if (step < 3) {
      setStep((prev) => prev + 1)
      setErrors({})
    } else {
      try {
        // Here you would typically send the data to your backend
        console.log('Form submitted:', formData)
        // await submitFormData(formData);
        // Handle successful submission
      } catch (error) {
        console.error('Submission error:', error)
        // Handle submission error
      }
    }
  }

  const handlePrevious = (): void => {
    if (step > 1) {
      setStep((prev) => prev - 1)
      setErrors({})
    }
  }

  const renderStep1 = () => (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col gap-2'>
        <div
          className={`flex w-full items-center justify-start gap-3 rounded-2xl border ${
            errors.name ? 'border-red-500' : 'border-[#1B3B86]/10'
          } bg-[#1B3B86]/5 px-4 py-3 focus-within:border-[#E31C79] transition-colors`}
        >
          <i className='ph ph-user text-2xl !leading-none text-[#1B3B86]'></i>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleInputChange}
            placeholder='Enter Your Name'
            className='w-full text-sm text-gray-600 outline-none bg-transparent placeholder:text-gray-500'
          />
        </div>
        {errors.name && (
          <span className='text-xs text-red-500'>{errors.name}</span>
        )}
      </div>

      <div className='flex flex-col gap-2'>
        <div
          className={`flex w-full items-center justify-start gap-3 rounded-2xl border ${
            errors.email ? 'border-red-500' : 'border-[#1B3B86]/10'
          } bg-[#1B3B86]/5 px-4 py-3 focus-within:border-[#E31C79] transition-colors`}
        >
          <i className='ph ph-envelope-simple text-2xl !leading-none text-[#1B3B86]'></i>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
            placeholder='Enter Your Email'
            className='w-full text-sm text-gray-600 outline-none bg-transparent placeholder:text-gray-500'
          />
        </div>
        {errors.email && (
          <span className='text-xs text-red-500'>{errors.email}</span>
        )}
      </div>

      <div className='flex flex-col gap-2'>
        <div
          className={`flex w-full items-center justify-start gap-3 rounded-2xl border ${
            errors.password ? 'border-red-500' : 'border-[#1B3B86]/10'
          } bg-[#1B3B86]/5 px-4 py-3 focus-within:border-[#E31C79] transition-colors`}
        >
          <i className='ph ph-lock text-2xl !leading-none text-[#1B3B86]'></i>
          <input
            type='password'
            name='password'
            value={formData.password}
            onChange={handleInputChange}
            placeholder='Enter Your Password'
            className='w-full text-sm text-gray-600 outline-none bg-transparent placeholder:text-gray-500'
          />
        </div>
        {errors.password && (
          <span className='text-xs text-red-500'>{errors.password}</span>
        )}
      </div>
    </div>
  )

  const renderStep2 = () => (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col gap-2'>
        <div
          className={`flex w-full items-center justify-start gap-3 rounded-2xl border ${
            errors.companyName ? 'border-red-500' : 'border-n30'
          } px-4 py-3`}
        >
          <i className='ph ph-user text-2xl !leading-none'></i>
          <input
            type='text'
            name='companyName'
            value={formData.companyName}
            onChange={handleInputChange}
            placeholder='Enter Company Name'
            className='w-full text-sm text-n300 outline-none'
            disabled={formData.isIndividual}
          />
        </div>
        {errors.companyName && (
          <span className='text-xs text-red-500'>{errors.companyName}</span>
        )}
      </div>

      <div className='flex items-center justify-start gap-3'>
        <input
          type='checkbox'
          name='isIndividual'
          checked={formData.isIndividual}
          onChange={handleInputChange}
          className='h-4 w-4'
        />
        <p className='text-sm text-n300'>I'm hiring as an individual</p>
      </div>
    </div>
  )

  const renderStep3 = () => (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col gap-2'>
        <div
          className={`flex w-full items-center justify-start gap-3 rounded-2xl border ${
            errors.professionalTitle ? 'border-red-500' : 'border-n30'
          } px-4 py-3`}
        >
          <i className='ph ph-briefcase text-2xl !leading-none'></i>
          <input
            type='text'
            name='professionalTitle'
            value={formData.professionalTitle}
            onChange={handleInputChange}
            placeholder='Professional Title'
            className='w-full text-sm text-n300 outline-none'
          />
        </div>
        {errors.professionalTitle && (
          <span className='text-xs text-red-500'>
            {errors.professionalTitle}
          </span>
        )}
      </div>

      <div className='flex flex-col gap-2'>
        <div
          className={`flex w-full items-center justify-start gap-3 rounded-2xl border ${
            errors.location ? 'border-red-500' : 'border-n30'
          } px-4 py-3`}
        >
          <i className='ph ph-map-pin text-2xl !leading-none'></i>
          <input
            type='text'
            name='location'
            value={formData.location}
            onChange={handleInputChange}
            placeholder='Location'
            className='w-full text-sm text-n300 outline-none'
          />
        </div>
        {errors.location && (
          <span className='text-xs text-red-500'>{errors.location}</span>
        )}
      </div>

      <div className='flex flex-col gap-2'>
        <div
          className={`flex w-full items-center justify-start gap-3 rounded-2xl border ${
            errors.linkedinUrl ? 'border-red-500' : 'border-n30'
          } px-4 py-3`}
        >
          <i className='ph ph-linkedin-logo text-2xl !leading-none'></i>
          <input
            type='text'
            name='linkedinUrl'
            value={formData.linkedinUrl}
            onChange={handleInputChange}
            placeholder='LinkedIn URL'
            className='w-full text-sm text-n300 outline-none'
            disabled={formData.noLinkedin}
          />
        </div>
        {errors.linkedinUrl && (
          <span className='text-xs text-red-500'>{errors.linkedinUrl}</span>
        )}
      </div>

      <div className='flex items-center justify-start gap-3'>
        <input
          type='checkbox'
          name='noLinkedin'
          checked={formData.noLinkedin}
          onChange={handleInputChange}
          className='h-4 w-4'
        />
        <p className='text-sm text-n300'>I don't have a LinkedIn account</p>
      </div>

      <div className=''>
        <p className='pb-3 text-sm text-n300'>
          Add a photo to help build connection and trust.
        </p>
        <label className='flex flex-col items-center justify-center rounded-3xl border border-b50 bg-n10 px-3 py-10 cursor-pointer relative'>
          <input
            type='file'
            accept='image/*'
            onChange={handlePhotoUpload}
            className='hidden'
          />
          {formData.photoPreview ? (
            <div className='w-32 h-32 rounded-full overflow-hidden mb-3'>
              <img
                src={formData.photoPreview}
                alt='Profile preview'
                className='w-full h-full object-cover'
              />
            </div>
          ) : (
            <i className='ph ph-image text-6xl !leading-none'></i>
          )}
          <p className='pt-3 text-sm font-medium'>
            {formData.profilePhoto ? 'Change photo' : 'Upload profile photo'}
          </p>
        </label>
      </div>

      {tempImageUrl && (
        <ImageEditorModal
          isOpen={isEditorOpen}
          onClose={() => {
            setIsEditorOpen(false)
            setTempImageUrl(null)
          }}
          imageUrl={tempImageUrl}
          onSave={handleCroppedImage}
        />
      )}
    </div>
  )

  return (
    <form onSubmit={handleSubmit} className='flex w-full flex-col pt-6'>
      {step === 1 && renderStep1()}
      {step === 2 && renderStep2()}
      {step === 3 && renderStep3()}

      <div className='w-full mt-6'>
        {/* Navigation Buttons */}
        <div className='flex gap-4'>
          {step > 1 && (
            <button
              type='button'
              onClick={handlePrevious}
              className='flex-1 relative flex items-center justify-center overflow-hidden rounded-xl bg-gray-200 px-4 py-3 font-semibold text-gray-700 duration-700 hover:bg-gray-300 transition-colors sm:px-8'
            >
              <span className='relative z-10'>Previous</span>
            </button>
          )}
          <button
            type='submit'
            className={`relative flex items-center justify-center overflow-hidden rounded-xl bg-b300 px-4 py-3 font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-xl after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] sm:px-8 ${
              step > 1 ? 'flex-1' : 'w-full'
            }`}
          >
            <span className='relative z-10'>
              {step === 3 ? 'Complete Signup' : 'Continue'}
            </span>
          </button>
        </div>

        <div className='flex items-center justify-center gap-2 py-3 text-sm font-medium'>
          <p className='text-n300'>Already have an account?</p>
          <Link to='/signin' className='text-b300 underline'>
            Sign in here
          </Link>
        </div>

        {step === 1 && (
          <div className='flex flex-col gap-3 mt-6'>
            <button className='flex w-full items-center justify-center gap-2 rounded-2xl border border-[#1B3B86]/10 bg-white py-3 hover:bg-[#1B3B86]/5 transition-colors'>
              <img src={googleIcon} alt='Sign in with Google' />
              <span className='text-sm text-gray-900'>Google</span>
            </button>

            <button className='flex w-full items-center justify-center gap-2 rounded-2xl border border-[#1B3B86]/10 bg-white py-3 hover:bg-[#1B3B86]/5 transition-colors'>
              <img src={facebookIcon} alt='Sign in with Facebook' />
              <span className='text-sm text-gray-900'>Facebook</span>
            </button>
          </div>
        )}
      </div>
    </form>
  )
}

export default MultiStepForm
