import { Link } from 'react-router'
import workersProfileServiceImg1 from '../../assets/images/workers_profile_service_img1.png'
import workersProfileServiceImg2 from '../../assets/images/workers_profile_service_img2.png'
import workersProfileServiceImg3 from '../../assets/images/workers_profile_service_img3.png'
import workersProfileServiceImg4 from '../../assets/images/workers_profile_service_img4.png'

const ProfileSection = () => {
  return (
    <section className='sbp-30 stp-30'>
      <div className='container grid grid-cols-12 gap-6'>
        <div className='col-span-12 rounded-xl border border-n30 px-6 py-8 lg:col-span-4'>
          <div className='flex flex-col items-center justify-center'>
            <div className='relative max-md:overflow-hidden'>
              <div className='hexagon-styles my-[calc(200px*0.5/2)] h-[calc(200px*0.57736720554273)] w-[200px] rounded-[calc(200px/36.75)] bg-b50 before:rounded-[calc(200px/18.75)] after:rounded-[calc(200px/18.75)]'>
                <div className='absolute -top-11 left-[5px]'>
                  <div className='hexagon-styles z-10 my-[calc(190px*0.5/2)] h-[calc(190px*0.57736720554273)] w-[190px] rounded-[calc(190px/50)] bg-b300 before:rounded-[calc(190px/50)] after:rounded-[calc(190px/50)]'>
                    <div className='absolute -top-[42px] left-[5px] z-20'>
                      <div className='hexagon-styles z-10 my-[calc(180px*0.5/2)] h-[calc(180px*0.57736720554273)] w-[180px] rounded-[calc(180px/50)] bg-b50 before:rounded-[calc(180px/50)] after:rounded-[calc(180px/50)]'>
                        <div className='r-hex3 absolute -left-[5px] -top-[43px] z-30 inline-block w-[190px] overflow-hidden'>
                          <div className='r-hex-inner3'>
                            <div className='expertImgBig r-hex-inner-3 before:h-[190px] before:bg-cover'></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='absolute bottom-5 right-1 z-30'>
                <img
                  src='./assets/images/verify-badge2.png'
                  alt=''
                  className=''
                />
              </div>
            </div>

            <div className='flex items-center justify-center gap-3 pt-6'>
              <h4 className='heading-4'>Duclair Fopa</h4>
              <p className='p rounded-full bg-y300 px-3 py-1 text-sm font-medium'>
                PRO
              </p>
            </div>
            <p className='pt-3 text-center text-sm text-n300'>
              Addis Ababa, Ethiopia
            </p>
            <div className='w-full pt-8 sm:px-12'>
              <a
                href='./chat'
                className='relative block w-full overflow-hidden rounded-full bg-n700 px-6 py-3 text-sm font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]'
              >
                <div className='relative z-20 flex items-center justify-center gap-3'>
                  <i className='ph ph-paper-plane-tilt text-xl !leading-none'></i>
                  <span>Get in touch</span>
                </div>
              </a>
            </div>

            <Link
              to='/worker-portfolio'
              className='mt-5 flex w-full items-center justify-between rounded-xl border border-n30 px-5 py-3'
            >
              <p className='font-semibold'>View My Portfolio</p>
              <i className='ph ph-caret-right text-xl !leading-none'></i>
            </Link>

            <div className='mt-5 flex w-full items-center justify-between rounded-xl border border-n30 px-5 py-3'>
              <div className='flex items-center justify-start gap-2'>
                <i className='ph-fill ph-star text-xl !leading-none'></i>
                <p className='font-medium'>Recommended</p>
              </div>
              <div className='flex items-center justify-end gap-2'>
                <div className='flex items-center justify-start max-xl:hidden'>
                  <img
                    src='./assets/images/review_people_1.png'
                    alt=''
                    className='relative -z-10 flex size-7 items-center justify-center overflow-hidden rounded-full bg-g75'
                  />
                  <img
                    src='./assets/images/review_people_2.png'
                    alt=''
                    className='-z-9 relative -ml-2 flex size-7 items-center justify-center overflow-hidden rounded-full bg-g75'
                  />
                  <img
                    src='./assets/images/review_people_3.png'
                    alt=''
                    className='-z-8 relative -ml-2 flex size-7 items-center justify-center overflow-hidden rounded-full bg-g75'
                  />
                  <p className='-z-7 relative -ml-2 flex size-7 items-center justify-center rounded-full bg-g75'>
                    +8
                  </p>
                </div>
                <i className='ph ph-caret-right text-xl !leading-none'></i>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-start justify-start gap-3 pt-8'>
            <p className='text-sm font-medium'>RATE</p>
            <p className='rounded-full bg-r50 px-3 py-1 text-[13px] text-r300'>
              $75 - &100/hr
            </p>
          </div>

          <div className='flex flex-col items-start justify-start gap-3 pt-8'>
            <p className='text-sm font-medium'>SERVICES</p>
            <div className='flex flex-wrap gap-1 text-n400'>
              <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium'>
                <span>Handyman</span>
              </p>
              <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium'>
                <span>Clening </span>
              </p>
              <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium'>
                <span>Plumber </span>
              </p>
              <p className='rounded-xl bg-b50 px-3 py-2 font-medium'>+3</p>
            </div>
          </div>

          <div className='flex flex-col items-start justify-start gap-3 pt-8'>
            <p className='text-sm font-medium'>BADGES</p>
            <div className='flex flex-wrap gap-1 text-n400'>
              <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium'>
                <img src='./assets/images/settings_icon.png' alt='' />
                <span>Cleaning Expert</span>
              </p>
              <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium'>
                <img src='./assets/images/tap_icon.png' alt='' />
                <span>Best Plumber</span>
              </p>
            </div>
          </div>

          <div className='flex flex-col items-start justify-start gap-3 pt-8'>
            <p className='text-sm font-medium'>ABOUT</p>
            <p className='text-n300'>
              Welcome to Bollo where convenience meets quality. Discover a
              seamless platform connecting you with trusted service providers
              effortlessly.
            </p>
          </div>

          <div className='flex flex-col items-start justify-start gap-3 pt-8'>
            <p className='text-sm font-medium'>LINKS</p>
            <div className='flex items-center justify-start gap-3'>
              <a
                href='javascript:void(0)'
                className='flex cursor-pointer items-center justify-center rounded-full border border-n700 p-2.5 duration-500 hover:border-b300 hover:bg-b300 hover:text-white'
              >
                <i className='ph ph-linkedin-logo !leading-none'></i>
              </a>
              <a
                href='javascript:void(0)'
                className='flex cursor-pointer items-center justify-center rounded-full border border-n700 p-2.5 duration-500 hover:border-b300 hover:bg-b300 hover:text-white'
              >
                <i className='ph ph-instagram-logo !leading-none'></i>
              </a>
              <a
                href='javascript:void(0)'
                className='flex cursor-pointer items-center justify-center rounded-full border border-n700 p-2.5 duration-500 hover:border-b300 hover:bg-b300 hover:text-white'
              >
                <i className='ph ph-discord-logo !leading-none'></i>
              </a>
              <a
                href='javascript:void(0)'
                className='flex cursor-pointer items-center justify-center rounded-full border border-n700 p-2.5 duration-500 hover:border-b300 hover:bg-b300 hover:text-white'
              >
                <i className='ph ph-dribbble-logo !leading-none'></i>
              </a>
            </div>
          </div>
        </div>

        <div className='col-span-12 rounded-xl border border-n30 p-4 sm:p-8 lg:col-span-8'>
          <h3 className='heading-3'>
            Elevating Cleanliness Standards with Professional Cleaning Services
          </h3>
          <p className='text-bg-n300 pt-3 font-medium'>
            Elevate cleanliness standards with our professional cleaning
            services. Experience spotless spaces and impeccable results every
            time you book with us.
          </p>

          <div className='flex flex-col gap-4 pt-10'>
            <ul className='flex items-center justify-start gap-5 border-b border-n30 pb-5 text-n100 max-md:flex-wrap'>
              <li>
                <a
                  href='./worker-profile'
                  className='heading-5 text-n900 duration-500'
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href='./worker-profile-works'
                  className='heading-5 duration-500 hover:text-n900'
                >
                  Work
                </a>
              </li>

              <li>
                <a
                  href='./worker-profile-jobs'
                  className='heading-5 duration-500 hover:text-n900'
                >
                  Jobs
                </a>
              </li>

              <li>
                <a
                  href='./worker-profile-recommendations'
                  className='heading-5 duration-500 hover:text-n900'
                >
                  Recommendations
                </a>
              </li>
            </ul>
            <div className='flex items-center justify-between gap-3 rounded-2xl border border-n30 p-3 max-md:flex-col'>
              <div className='flex items-center justify-start max-xxl:gap-2 max-sm:flex-col'>
                <div className='flex items-center justify-center self-stretch sm:w-[80%]'>
                  <img
                    src={workersProfileServiceImg1}
                    alt=''
                    className='rounded-2xl object-cover'
                  />
                </div>
                <div className=''>
                  <h5 className='heading-5'>Sparkle Ease Cleaning Solutions</h5>
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
                <p className='py-1 font-semibold text-r300'>$75 - &100/hr</p>
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
                    src={workersProfileServiceImg2}
                    alt=''
                    className='rounded-2xl object-cover'
                  />
                </div>
                <div className=''>
                  <h5 className='heading-5'>Sparkle Ease Cleaning Solutions</h5>
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
                <p className='py-1 font-semibold text-r300'>$75 - &100/hr</p>
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
                    src={workersProfileServiceImg3}
                    alt=''
                    className='rounded-2xl object-cover'
                  />
                </div>
                <div className=''>
                  <h5 className='heading-5'>Sparkle Ease Cleaning Solutions</h5>
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
                <p className='py-1 font-semibold text-r300'>$75 - &100/hr</p>
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
                    src={workersProfileServiceImg4}
                    alt=''
                    className='rounded-2xl object-cover'
                  />
                </div>
                <div className=''>
                  <h5 className='heading-5'>Sparkle Ease Cleaning Solutions</h5>
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
                <p className='py-1 font-semibold text-r300'>$75 - &100/hr</p>
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
    </section>
  )
}

export default ProfileSection
