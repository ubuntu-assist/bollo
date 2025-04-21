import { FC } from 'react'
import logo from '../../assets/images/logo.png'
import peopleSmall1 from '../../assets/images/people_small1.png'
import peopleSmall2 from '../../assets/images/people_small2.png'
import peopleSmall3 from '../../assets/images/people_small3.png'
import loginSliderIcon from '../../assets/images/login_slider_icon.png'
import googleIcon from '../../assets/images/google_icon.png'
import facebookIcon from '../../assets/images/facebook_icon.png'
import { Link, useNavigate } from 'react-router'

interface TestimonialType {
  image: string
  name: string
  role: string
  testimonial: string
}

const SignIn: FC = () => {
  const navigate = useNavigate()

  const testimonials: TestimonialType[] = [
    {
      image: peopleSmall1,
      name: 'Sherrie Whitaker',
      role: 'Marketing Director',
      testimonial:
        'I am always trying to find such a solution to making marketing videos more efficient. Creating consuming. We found some AI copywriting tools. This is the first time I see a product that can generate video content. Good job team!',
    },
    {
      image: peopleSmall2,
      name: 'Alex Johnson',
      role: 'Content Creator',
      testimonial:
        'Creating video content used to be so time-consuming. This platform has transformed my workflow completely. I can now produce twice the content in half the time!',
    },
    {
      image: peopleSmall3,
      name: 'Maria Rodriguez',
      role: 'Small Business Owner',
      testimonial:
        'As someone without video editing experience, this platform has been a game-changer for my business. Professional results without the professional learning curve.',
    },
    {
      image: peopleSmall1,
      name: 'Thomas Wright',
      role: 'Digital Strategist',
      testimonial:
        'The AI capabilities of this platform are simply remarkable. What used to take my team days now takes hours. The ROI has been immediate and substantial.',
    },
    {
      image: peopleSmall2,
      name: 'Priya Sharma',
      role: 'Social Media Manager',
      testimonial:
        'Managing content across multiple channels was a nightmare before. Now I can create, edit, and schedule everything from one intuitive dashboard. Absolutely love it!',
    },
  ]

  // Function to duplicate testimonials for infinite scrolling effect
  const duplicateTestimonials = (count: number): TestimonialType[] => {
    let result: TestimonialType[] = []
    for (let i = 0; i < count; i++) {
      result = [...result, ...testimonials]
    }
    return result
  }

  const extendedTestimonialsUp: TestimonialType[] = duplicateTestimonials(3)
  const extendedTestimonialsDown: TestimonialType[] = duplicateTestimonials(3)

  const TestimonialCard: FC<TestimonialType> = ({
    testimonial,
    image,
    name,
    role,
  }) => (
    <div className='flex flex-col rounded-2xl bg-white shadow-lg p-6 m-3 max-w-[320px] border-l-4 border-[#E31C79] relative transition-all duration-300 hover:shadow-xl hover:-translate-y-1'>
      <div className='absolute -top-2 -left-2 bg-[#1B3B86] text-white rounded-full p-2 shadow-lg'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path d='M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z'></path>
          <path d='M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z'></path>
        </svg>
      </div>
      <p className='text-gray-600 italic mb-4'>{testimonial}</p>
      <div className='mt-auto flex items-center'>
        <img
          src={image}
          alt={name}
          className='w-12 h-12 rounded-full border-2 border-[#1B3B86]'
        />
        <div className='ml-3'>
          <p className='font-semibold text-gray-900'>{name}</p>
          <p className='text-sm text-[#E31C79]'>{role}</p>
        </div>
        <div className='pl-2'>
          <img src={loginSliderIcon} alt='' />
        </div>
      </div>
    </div>
  )

  return (
    <section className='relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute -bottom-40 -left-20 size-[550px] rounded-full bg-[#1B3B86]/20 max-lg:hidden'></div>
      <div className='absolute -top-40 left-32 h-[600px] w-[550px] rounded-full bg-[#E31C79]/10 max-lg:hidden'></div>

      <div className='flex h-full items-center justify-start max-lg:justify-center'>
        {/* Testimonials Section */}
        <div className='ml-10 flex items-start justify-start gap-10 max-lg:hidden 3xl:ml-40 3xl:gap-20'>
          {/* First Column - Upward movement */}
          <div className='relative h-[100vh] w-[320px] overflow-hidden max-xl:hidden'>
            <div className='absolute w-full animate-marquee-up'>
              {extendedTestimonialsUp.map((testimonial, index) => (
                <TestimonialCard key={`up-${index}`} {...testimonial} />
              ))}
            </div>
          </div>

          {/* Second Column - Downward movement */}
          <div className='relative h-[100vh] w-[320px] overflow-hidden'>
            <div className='absolute w-full animate-marquee-down'>
              {extendedTestimonialsDown.map((testimonial, index) => (
                <TestimonialCard key={`down-${index}`} {...testimonial} />
              ))}
            </div>
          </div>
        </div>

        {/* Form Section - Maintaining original position and width */}
        <div className='flex h-full w-full max-w-[530px] flex-col items-center justify-center max-lg:px-6 max-lg:pt-40 lg:ml-20 xl:max-w-[380px] xxl:max-w-[530px] 3xl:ml-40'>
          {/* Logo */}
          <div>
            <Link to='/'>
              <img src={logo} alt='Bollo logo' className='h-24 w-auto' />
            </Link>
          </div>

          {/* Welcome Text */}
          <div className='flex items-center justify-center pt-8'>
            <p className='heading-5 text-gray-900'>Welcome to Bollo</p>
            <img src='./assets/images/victor_icon.png' alt='' />
          </div>

          {/* Form */}
          <form className='flex w-full flex-col pt-6'>
            <div className='flex flex-col gap-6'>
              {/* Email Input */}
              <div className='flex w-full items-center justify-start gap-3 rounded-2xl border border-[#1B3B86]/10 bg-[#1B3B86]/5 px-4 py-3 focus-within:border-[#E31C79] transition-colors'>
                <i className='ph ph-envelope-simple text-2xl !leading-none text-[#1B3B86]'></i>
                <input
                  type='email'
                  placeholder='Enter Your Email'
                  value='duclair.fopa@hotmail.com'
                  className='w-full text-sm text-gray-600 outline-none bg-transparent placeholder:text-gray-500'
                />
              </div>

              {/* Password Input */}
              <div className='flex w-full items-center justify-start gap-3 rounded-2xl border border-[#1B3B86]/10 bg-[#1B3B86]/5 px-4 py-3 focus-within:border-[#E31C79] transition-colors'>
                <i className='ph ph-lock text-2xl !leading-none text-[#1B3B86]'></i>
                <input
                  type='password'
                  placeholder='*******'
                  value='myaccount'
                  className='w-full text-sm text-gray-600 outline-none bg-transparent placeholder:text-gray-500'
                />
              </div>
            </div>

            <div className='w-full'>
              {/* Forgot Password Link */}
              <a
                href='./contact'
                className='block py-3 text-end text-sm font-medium text-[#1B3B86] hover:text-[#E31C79] transition-colors'
              >
                Forgot Password?
              </a>

              {/* Sign In Button */}
              <button
                onClick={() => navigate('/dashboard')}
                type='button'
                className='relative flex w-full items-center justify-center overflow-hidden rounded-xl bg-[#1B3B86] px-4 py-3 font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-xl after:bg-[#E31C79] after:duration-700 hover:after:w-[calc(100%+2px)] sm:px-8'
              >
                <span className='relative z-10'>Sign In</span>
              </button>

              {/* Sign Up Link */}
              <div className='flex items-center justify-center gap-2 py-3 text-sm font-medium'>
                <p className='text-gray-600'>Don't have an account?</p>
                <Link
                  to='/signup'
                  className='text-[#1B3B86] hover:text-[#E31C79] transition-colors underline'
                >
                  Sign Up with Email
                </Link>
              </div>

              {/* Social Buttons */}
              <button
                type='button'
                className='mt-6 flex w-full items-center justify-center gap-2 rounded-2xl border border-[#1B3B86]/10 bg-white py-3 hover:bg-[#1B3B86]/5 transition-colors'
              >
                <img src={googleIcon} alt='Sign in with Google' />
                <span className='text-sm text-gray-900'>Google</span>
              </button>

              <button
                type='button'
                className='mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border border-[#1B3B86]/10 bg-white py-3 hover:bg-[#1B3B86]/5 transition-colors'
              >
                <img src={facebookIcon} alt='Sign in with Facebook' />
                <span className='text-sm text-gray-900'>Facebook</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default SignIn
