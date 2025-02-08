import { BreadcrumbSection } from '../components'
import workerDetailsImg from '../assets/images/worker-details-img.png'
import workerProfileServiceImg1 from '../assets/images/workers_profile_service_img1.png'
import workerProfileServiceImg2 from '../assets/images/workers_profile_service_img2.png'
import { Link } from 'react-router'

const ServiceDetails = () => {
  return (
    <>
      <BreadcrumbSection />
      <section className='sbp-30 stp-30'>
        <div className='container grid grid-cols-12 gap-6'>
          <div className='col-span-12 lg:col-span-8'>
            <div className='grid grid-cols-12 gap-6'>
              <div className='col-span-12 overflow-hidden rounded-xl md:col-span-6'>
                <img
                  src={workerDetailsImg}
                  className='w-full rounded-xl'
                  alt=''
                />
              </div>
              <div className='col-span-12 flex flex-col items-center justify-start lg:col-span-6'>
                <div className='flex flex-col items-start justify-start'>
                  <h3 className='heading-3 pb-3'>
                    Elevating Cleanliness Stand with Professional Cleaning
                    Services
                  </h3>
                  <p className='font-medium text-n300'>
                    Elevate Plumber liness standards with our professional
                    Plumber services.
                  </p>
                  <div className='flex items-center justify-start gap-3 pt-3'>
                    <div className='relative max-md:overflow-hidden'>
                      <div className='hexagon-styles my-[calc(100px*0.5/2)] h-[calc(100px*0.57736720554273)] w-[100px] rounded-[calc(100px/36.75)] bg-b50 before:rounded-[calc(100px/18.75)] after:rounded-[calc(100px/18.75)]'>
                        <div className='absolute -top-[20px] left-[5px]'>
                          <div className='hexagon-styles z-10 my-[calc(90px*0.5/2)] h-[calc(90px*0.57736720554273)] w-[90px] rounded-[calc(90px/50)] bg-b300 before:rounded-[calc(90px/50)] after:rounded-[calc(90px/50)]'>
                            <div className='absolute -top-[18px] left-[4px] z-20'>
                              <div className='hexagon-styles z-10 my-[calc(82px*0.5/2)] h-[calc(82px*0.57736720554273)] w-[82px] rounded-[calc(82px/50)] bg-b50 before:rounded-[calc(82px/50)] after:rounded-[calc(82px/50)]'>
                                <div className='r-hex3 absolute -left-0.5 -top-[20px] z-30 inline-block w-[86px] overflow-hidden'>
                                  <div className='r-hex-inner3'>
                                    <div className='expertImg5 r-hex-inner-3 before:h-[86px] before:bg-cover'></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='absolute bottom-3 right-1 z-30'>
                        <img
                          src='./assets/images/verify-badge.png'
                          alt=''
                          className=''
                        />
                      </div>
                    </div>
                    <div className='max-[350px]:max-w-20'>
                      <div className='flex items-center justify-center gap-3'>
                        <h5 className='heading-5'>Duclair Fopa</h5>
                        <p className='p rounded-full bg-y300 px-3 py-1 text-sm font-medium'>
                          PRO
                        </p>
                      </div>
                      <p className='text-sm text-n300'>Addis Ababa, Ethiopia</p>
                    </div>
                  </div>
                </div>

                <div className='mt-4 flex w-full items-center justify-between border-y border-n30 py-3'>
                  <div className='flex items-center justify-start gap-2'>
                    <i className='ph-fill ph-star text-2xl !leading-none text-b300'></i>
                    <p className='text-n300'>No recommendations yet</p>
                  </div>
                  <i className='ph-fill ph-share-network text-2xl !leading-none text-b300'></i>
                </div>
              </div>
            </div>

            <div className='stp-15 sbp-15'>
              <h3 className='heading-3 border-b border-n30 pb-5'>
                About this service
              </h3>
              <div className='flex flex-col gap-8 pt-5 text-lg'>
                <div className='flex flex-col gap-3'>
                  <h4 className='heading-4'>Our Mission:</h4>
                  <p className='text-n300'>
                    Our mission is to transform your space into a clean and
                    inviting haven where you can relax, work, and thrive. We
                    strive to exceed your expectations by delivering reliable,
                    efficient, and personalized cleaning solutions that enhance
                    your quality of life.
                  </p>
                </div>
                <div className='flex flex-col gap-3'>
                  <h4 className='heading-4'>Our Approach:</h4>
                  <p className='text-n300'>
                    We take a personalized approach to cleaning, understanding
                    that every space is unique and requires individualized
                    attention. Our team of professional cleaners is trained to
                    meticulously clean and sanitize your home, office, or
                    commercial space using eco-friendly products and
                    state-of-the-art equipment.
                  </p>
                </div>
                <ul className='flex list-inside flex-col gap-8'>
                  <li className='marker:heading-4'>
                    <span className='heading-4'>Services We Offer:</span>
                    <ul className='ml-4 flex list-disc flex-col gap-3 pt-3 text-n300 marker:text-[10px] marker:text-n900'>
                      <li>
                        Residential Cleaning: From routine housekeeping to deep
                        cleaning, we offer a range of residential cleaning
                        services to keep your home spotless and organized.
                      </li>
                      <li>
                        Commercial Cleaning: Our commercial cleaning services
                        are tailored to meet the specific needs of businesses,
                        offices, and commercial properties, ensuring a clean and
                        welcoming environment for employees and customers.
                      </li>
                      <li>
                        Specialized Cleaning: We also offer specialized cleaning
                        services for move-in/move-out cleaning,
                        post-construction cleaning, and event cleanup, providing
                        comprehensive solutions for all your cleaning needs.
                      </li>
                    </ul>
                  </li>
                  <li className='marker:heading-4'>
                    <span className='heading-4'>Services We Offer:</span>
                    <ul className='ml-4 flex list-disc flex-col gap-3 pt-3 text-n300 marker:text-[10px] marker:text-n900'>
                      <li>
                        Experienced Professionals: Our team consists of
                        experienced and trained cleaning professionals who are
                        dedicated to delivering exceptional results.
                      </li>
                      <li>
                        Quality Service: We prioritize quality and attention to
                        detail in every cleaning task we undertake, ensuring
                        your complete satisfaction.
                      </li>
                      <li>
                        Eco-Friendly Practices: We are committed to
                        sustainability and use environmentally friendly cleaning
                        products and practices whenever possible.
                      </li>
                      <li>
                        Customer Satisfaction: Your satisfaction is our top
                        priority, and we strive to exceed your expectations with
                        every cleaning service we provide.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <div className='stp-15 sbp-15 flex flex-col items-center justify-center gap-8 border-y border-n30'>
              <h2 className='heading-2'>Work with me</h2>
              <div className='max-w-[300px]'>
                <Link
                  to='/hire-me'
                  className='relative block w-full overflow-hidden rounded-full bg-n700 px-6 py-3 text-sm font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]'
                >
                  <div className='relative z-20 flex items-center justify-center gap-3'>
                    <i className='ph ph-paper-plane-tilt text-xl !leading-none'></i>
                    <span>Hire me</span>
                  </div>
                </Link>
              </div>
            </div>

            <div className='mt-6 rounded-xl border border-n30 p-4 sm:mt-14 sm:p-8'>
              <h5 className='heading-5'>More Services</h5>

              <div className='flex flex-col gap-4 pt-10'>
                <div className='flex items-center justify-between gap-3 rounded-2xl border border-n30 p-3 max-md:flex-col'>
                  <div className='flex items-center justify-start max-xxl:gap-2 max-sm:flex-col'>
                    <div className='flex items-center justify-center self-stretch sm:w-[80%]'>
                      <img
                        src={workerProfileServiceImg1}
                        alt=''
                        className='rounded-2xl object-cover'
                      />
                    </div>
                    <div className=''>
                      <h5 className='heading-5'>
                        Sparkle Ease Cleaning Solutions
                      </h5>
                      <div className='flex flex-wrap gap-1 pt-3 text-sm text-n400 xxl:pt-6'>
                        <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium'>
                          <img src='./assets/images/settings_icon.png' alt='' />
                          <span>Handyman</span>
                        </p>
                        <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium'>
                          <img src='./assets/images/tap_icon.png' alt='' />
                          <span>Cleaning</span>
                        </p>
                        <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium'>
                          <img src='./assets/images/tap_icon.png' alt='' />
                          <span>Plumber</span>
                        </p>
                        <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium'>
                          <span>+4</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='felx h-full w-full flex-col items-center justify-center rounded-2xl border border-n30 px-6 py-8 text-center text-n300 md:max-w-[176px]'>
                    <p className='text-sm font-semibold'>STARTING AT</p>
                    <p className='py-1 font-semibold text-r300'>
                      75 - 100 XAF/hr
                    </p>
                    <p className='pb-5 text-sm font-semibold'>Fixed Price</p>
                    <a
                      href='./service-details'
                      className='relative flex items-center justify-center overflow-hidden rounded-full bg-b300 px-3 py-2 text-sm font-medium text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] lg:px-4 lg:py-3'
                    >
                      <span className='relative z-10'>View Details</span>
                    </a>
                  </div>
                </div>
                <div className='flex items-center justify-between gap-3 rounded-2xl border border-n30 p-3 max-md:flex-col'>
                  <div className='flex items-center justify-start max-xxl:gap-2 max-sm:flex-col'>
                    <div className='flex items-center justify-center self-stretch sm:w-[80%]'>
                      <img
                        src={workerProfileServiceImg2}
                        alt=''
                        className='rounded-2xl object-cover'
                      />
                    </div>
                    <div className=''>
                      <h5 className='heading-5'>
                        Sparkle Ease Cleaning Solutions
                      </h5>
                      <div className='flex flex-wrap gap-1 pt-3 text-sm text-n400 xxl:pt-6'>
                        <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium'>
                          <img src='./assets/images/settings_icon.png' alt='' />
                          <span>Handyman</span>
                        </p>
                        <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium'>
                          <img src='./assets/images/tap_icon.png' alt='' />
                          <span>Cleaning</span>
                        </p>
                        <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium'>
                          <img src='./assets/images/tap_icon.png' alt='' />
                          <span>Plumber</span>
                        </p>
                        <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium'>
                          <span>+4</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='felx h-full w-full flex-col items-center justify-center rounded-2xl border border-n30 px-6 py-8 text-center text-n300 md:max-w-[176px]'>
                    <p className='text-sm font-semibold'>STARTING AT</p>
                    <p className='py-1 font-semibold text-r300'>
                      75 - 100 XAF/hr
                    </p>
                    <p className='pb-5 text-sm font-semibold'>Fixed Price</p>
                    <a
                      href='./service-details'
                      className='relative flex items-center justify-center overflow-hidden rounded-full bg-b300 px-3 py-2 text-sm font-medium text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] lg:px-4 lg:py-3'
                    >
                      <span className='relative z-10'>View Details</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-span-12 lg:col-span-4'>
            <div className='sticky top-32'>
              <div className='items-center rounded-2xl border border-n30 px-6 py-8 text-center text-n300'>
                <div className='border-b border-n30 pb-6'>
                  <p className='text-sm font-semibold'>STARTING AT</p>
                  <p className='heading-5 py-1 font-semibold text-r300'>
                    75 - 100 XAF/hr
                  </p>

                  <div className='pt-3'>
                    <Link
                      to='/hire-me'
                      className='relative block w-full overflow-hidden rounded-full bg-n700 px-6 py-3 text-sm font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]'
                    >
                      <div className='relative z-20 flex items-center justify-center gap-3'>
                        <i className='ph ph-paper-plane-tilt text-xl !leading-none'></i>
                        <span>Hire me</span>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className='flex flex-col items-start justify-start pt-6'>
                  <p className='text-sm font-medium'>Duration</p>
                  <p className='flex items-center justify-start gap-2 pt-3 text-sm'>
                    <i className='ph-fill ph-calendar text-2xl text-b300'></i>{' '}
                    1-1.5 weeks
                  </p>
                  <p className='pt-6 text-sm font-medium'>
                    Skills and Services
                  </p>
                  <div className='flex flex-wrap gap-1 pt-3 text-sm text-n400'>
                    <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2'>
                      <span>Handyman</span>
                    </p>
                    <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2'>
                      <span>Cleaning </span>
                    </p>
                    <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2'>
                      <span>Renovation </span>
                    </p>
                    <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2'>
                      <span>Gardening </span>
                    </p>
                    <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2'>
                      <span>Plumber </span>
                    </p>
                    <p className='rounded-xl bg-b50 px-3 py-2'>+3</p>
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

export default ServiceDetails
