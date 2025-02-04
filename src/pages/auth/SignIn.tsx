import { useEffect, useRef } from 'react'
import Swiper from 'swiper'
import { Autoplay } from 'swiper/modules'
import 'swiper/swiper-bundle.css'

import logo from '../../assets/images/logo.png'
import peopleSmall1 from '../../assets/images/people_small1.png'
import peopleSmall2 from '../../assets/images/people_small2.png'
import peopleSmall3 from '../../assets/images/people_small3.png'
import loginSliderIcon from '../../assets/images/login_slider_icon.png'
import googleIcon from '../../assets/images/google_icon.png'
import facebookIcon from '../../assets/images/facebook_icon.png'
import { Link } from 'react-router'

interface TestimonialSlide {
  image: string
  name: string
  testimonial: string
}

const SignIn = () => {
  const slider1Ref = useRef<HTMLDivElement>(null)
  const slider2Ref = useRef<HTMLDivElement>(null)

  const testimonials: TestimonialSlide[] = [
    {
      image: peopleSmall1,
      name: 'Sherrie Whitaker',
      testimonial:
        'I am always trying to find such a solution to making marketing videos more efficient. Creating consuming. We found some AI copywriting tools. This is the first time I see a product that can generate video content. Good job team!',
    },
    {
      image: peopleSmall2,
      name: 'Sherrie Whitaker',
      testimonial:
        'I am always trying to find such a solution to making marketing videos more efficient. Creating consuming. We found some AI copywriting tools. This is the first time I see a product that can generate video content. Good job team!',
    },
    {
      image: peopleSmall3,
      name: 'Sherrie Whitaker',
      testimonial:
        'I am always trying to find such a solution to making marketing videos more efficient. Creating consuming. We found some AI copywriting tools. This is the first time I see a product that can generate video content. Good job team!',
    },
    {
      image: peopleSmall1,
      name: 'Sherrie Whitaker',
      testimonial:
        'I am always trying to find such a solution to making marketing videos more efficient. Creating consuming. We found some AI copywriting tools. This is the first time I see a product that can generate video content. Good job team!',
    },
    {
      image: peopleSmall2,
      name: 'Sherrie Whitaker',
      testimonial:
        'I am always trying to find such a solution to making marketing videos more efficient. Creating consuming. We found some AI copywriting tools. This is the first time I see a product that can generate video content. Good job team!',
    },
  ]

  useEffect(() => {
    if (slider1Ref.current && slider2Ref.current) {
      // First Slider
      new Swiper(slider1Ref.current, {
        modules: [Autoplay],
        direction: 'vertical',
        loop: true,
        slidesPerView: 1,
        speed: 10000,
        autoplay: {
          delay: 1,
          reverseDirection: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          700: {
            slidesPerView: 2.2,
          },
        },
      })

      // Second Slider
      new Swiper(slider2Ref.current, {
        modules: [Autoplay],
        direction: 'vertical',
        loop: true,
        slidesPerView: 1,
        speed: 10000,
        autoplay: {
          delay: 1,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          700: {
            slidesPerView: 2.2,
          },
        },
      })
    }
  }, [])

  const TestimonialSlide = ({ testimonial, image, name }: TestimonialSlide) => (
    <div className='swiper-slide relative mt-16 max-w-[320px] bg-white px-8 pb-8'>
      <div className='-mt-4'>
        <i className='ph-fill ph-quotes text-4xl !leading-none text-[#E31C79]'></i>
      </div>
      <p className='stp-15 pb-8 text-gray-600'>{testimonial}</p>
      <div className='flex items-center justify-start gap-3'>
        <img src={image} className='size-12 rounded-full' alt={name} />
        <p className='font-semibold text-gray-900'>{name}</p>
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
        <div className='ml-10 flex items-start justify-start gap-10 max-lg:hidden 3xl:ml-40 3xl:gap-20'>
          {/* First Slider */}
          <div
            ref={slider1Ref}
            className='swiper login-slider1-carousel smooth h-[100vh] max-xl:hidden'
          >
            <div className='swiper-wrapper'>
              {testimonials.map((testimonial, index) => (
                <TestimonialSlide key={`slider1-${index}`} {...testimonial} />
              ))}
            </div>
          </div>

          {/* Second Slider */}
          <div
            ref={slider2Ref}
            className='swiper login-slider2-carousel smooth h-[100vh]'
          >
            <div className='swiper-wrapper'>
              {testimonials.map((testimonial, index) => (
                <TestimonialSlide key={`slider2-${index}`} {...testimonial} />
              ))}
            </div>
          </div>
        </div>

        <div className='flex h-full w-full max-w-[530px] flex-col items-center justify-center max-lg:px-6 max-lg:pt-40 lg:ml-20 xl:max-w-[380px] xxl:max-w-[530px] 3xl:ml-40'>
          <div className=''>
            <Link to='/'>
              <img src={logo} alt='Bolo logo' className='h-24 w-auto' />
            </Link>
          </div>
          <div className='flex items-center justify-center pt-8'>
            <p className='heading-5'>Welcome to Bollo</p>
            <img src='./assets/images/victor_icon.png' alt='' />
          </div>
          <form className='flex w-full flex-col pt-6'>
            <div className='flex flex-col gap-6'>
              <div className='flex w-full items-center justify-start gap-3 rounded-2xl border border-n30 px-4 py-3'>
                <i className='ph ph-envelope-simple text-2xl !leading-none'></i>
                <input
                  type='text'
                  placeholder='Enter Your Email'
                  className='w-full text-sm text-n300 outline-none'
                />
              </div>
              <div className='flex w-full items-center justify-start gap-3 rounded-2xl border border-n30 px-4 py-3'>
                <i className='ph ph-lock text-2xl !leading-none'></i>
                <input
                  type='password'
                  placeholder='*******'
                  className='w-full text-sm text-n300 outline-none'
                />
              </div>
            </div>
            <div className='w-full'>
              <a
                href='./contact.html'
                className='block py-3 text-end text-sm font-medium text-n300'
              >
                Forgot Password?
              </a>
              <button className='relative flex w-full items-center justify-center overflow-hidden rounded-xl bg-b300 px-4 py-3 font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-xl after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] sm:px-8'>
                <span className='relative z-10'>Sign In</span>
              </button>
              <div className='flex items-center justify-center gap-2 py-3 text-sm font-medium'>
                <p className='text-n300'>Don’t have an account?</p>
                <a href='./sign-up-step-1.html' className='text-b300 underline'>
                  Sign Up with Email
                </a>
              </div>

              <button className='mt-6 flex w-full items-center justify-center gap-2 rounded-2xl border border-n30 py-3'>
                <img src={googleIcon} alt='' />
                <span className='text-sm'>Google</span>
              </button>

              <button className='mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border border-n30 py-3'>
                <img src={facebookIcon} alt='' />
                <span className='text-sm'>Facebook</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default SignIn
