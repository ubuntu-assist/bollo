import { useEffect, useRef } from 'react'
import Swiper from 'swiper'
import { Autoplay } from 'swiper/modules'
import 'swiper/swiper-bundle.css'

import logo from '../../assets/images/logo.png'
import peopleSmall1 from '../../assets/images/people_small1.png'
import peopleSmall2 from '../../assets/images/people_small2.png'
import peopleSmall3 from '../../assets/images/people_small3.png'
import loginSliderIcon from '../../assets/images/login_slider_icon.png'
import { MultiStepForm } from '../../features/auth/components'

interface TestimonialSlide {
  image: string
  name: string
  testimonial: string
}

const SignUp = () => {
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

        <div className='flex h-full w-full max-w-[530px] flex-col items-center justify-center max-lg:px-6 max-lg:pt-40 max-sm:pt-32 lg:ml-20 xl:max-w-[380px] xxl:max-w-[530px] 3xl:ml-40'>
          {/* Logo */}
          <div>
            <a href='./index'>
              <img src={logo} alt='Bollo logo' className='h-24 w-auto' />
            </a>
          </div>

          {/* Welcome Text */}
          <div className='flex items-center justify-start pt-8'>
            <p className='heading-5 text-gray-900'>Welcome to Bollo</p>
            <img src='./assets/images/victor_icon.png' alt='' />
          </div>

          <MultiStepForm />
        </div>
      </div>
    </section>
  )
}

export default SignUp
