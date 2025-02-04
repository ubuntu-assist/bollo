import workersProfileServiceImg1 from '../../assets/images/workers_profile_service_img1.png'
import workersProfileServiceImg2 from '../../assets/images/workers_profile_service_img2.png'
import workersProfileServiceImg3 from '../../assets/images/workers_profile_service_img3.png'
import workersProfileServiceImg4 from '../../assets/images/workers_profile_service_img4.png'

const Whishlist = () => {
  return (
    <section>
      <div className='4xl:large-container grid grid-cols-12 gap-6 overflow-hidden rounded-2xl bg-white p-4 max-4xl:mx-4 sm:p-10'>
        <div className='col-span-12'>
          <h4 className='heading-4'>Order Status</h4>
        </div>

        <div className='col-span-12 flex flex-col gap-4'>
          <div className='flex items-center justify-between gap-3 rounded-2xl border border-n30 p-3 max-md:flex-col'>
            <div className='flex items-center justify-start gap-6 max-xxl:gap-2 max-sm:flex-col'>
              <div className='flex items-center justify-center self-stretch'>
                <img
                  src={workersProfileServiceImg1}
                  alt=''
                  className='rounded-2xl object-cover'
                />
              </div>
              <div className=''>
                <h3 className='heading-3'>
                  On-Demand Services for Busy Lifestyles
                </h3>
                <div className='flex flex-wrap gap-1 pt-3 text-sm text-n400 xxl:pt-6'>
                  <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium'>
                    <img src='../assets/images/settings_icon.png' alt='' />
                    <span>Handyman</span>
                  </p>
                  <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium'>
                    <img src='../assets/images/tap_icon.png' alt='' />
                    <span>Cleaning</span>
                  </p>
                  <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium'>
                    <img src='../assets/images/tap_icon.png' alt='' />
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
                href='javascript:void(0)'
                className='relative flex items-center justify-center overflow-hidden rounded-full bg-b300 px-3 py-2 text-sm font-medium text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] lg:px-4 lg:py-3'
              >
                <span className='relative z-10'>View Details</span>
              </a>
            </div>
          </div>
          <div className='flex items-center justify-between gap-3 rounded-2xl border border-n30 p-3 max-md:flex-col'>
            <div className='flex items-center justify-start gap-6 max-xxl:gap-2 max-sm:flex-col'>
              <div className='flex items-center justify-center self-stretch'>
                <img
                  src={workersProfileServiceImg2}
                  alt=''
                  className='rounded-2xl object-cover'
                />
              </div>
              <div className=''>
                <h3 className='heading-3'>On-Demand Services for Every Need</h3>
                <div className='flex flex-wrap gap-1 pt-3 text-sm text-n400 xxl:pt-6'>
                  <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium'>
                    <img src='../assets/images/settings_icon.png' alt='' />
                    <span>Handyman</span>
                  </p>
                  <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium'>
                    <img src='../assets/images/tap_icon.png' alt='' />
                    <span>Cleaning</span>
                  </p>
                  <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium'>
                    <img src='../assets/images/tap_icon.png' alt='' />
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
                href='javascript:void(0)'
                className='relative flex items-center justify-center overflow-hidden rounded-full bg-b300 px-3 py-2 text-sm font-medium text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] lg:px-4 lg:py-3'
              >
                <span className='relative z-10'>View Details</span>
              </a>
            </div>
          </div>
          <div className='flex items-center justify-between gap-3 rounded-2xl border border-n30 p-3 max-md:flex-col'>
            <div className='flex items-center justify-start gap-6 max-xxl:gap-2 max-sm:flex-col'>
              <div className='flex items-center justify-center self-stretch'>
                <img
                  src={workersProfileServiceImg3}
                  alt=''
                  className='rounded-2xl object-cover'
                />
              </div>
              <div className=''>
                <h3 className='heading-3'>Sparkle Ease Cleaning Solutions</h3>
                <div className='flex flex-wrap gap-1 pt-3 text-sm text-n400 xxl:pt-6'>
                  <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium'>
                    <img src='../assets/images/settings_icon.png' alt='' />
                    <span>Handyman</span>
                  </p>
                  <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium'>
                    <img src='../assets/images/tap_icon.png' alt='' />
                    <span>Cleaning</span>
                  </p>
                  <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium'>
                    <img src='../assets/images/tap_icon.png' alt='' />
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
                href='javascript:void(0)'
                className='relative flex items-center justify-center overflow-hidden rounded-full bg-b300 px-3 py-2 text-sm font-medium text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] lg:px-4 lg:py-3'
              >
                <span className='relative z-10'>View Details</span>
              </a>
            </div>
          </div>
          <div className='flex items-center justify-between gap-3 rounded-2xl border border-n30 p-3 max-md:flex-col'>
            <div className='flex items-center justify-start gap-6 max-xxl:gap-2 max-sm:flex-col'>
              <div className='flex items-center justify-center self-stretch'>
                <img
                  src={workersProfileServiceImg4}
                  alt=''
                  className='rounded-2xl object-cover'
                />
              </div>
              <div className=''>
                <h3 className='heading-3'>Sparkle Ease Cleaning Solutions</h3>
                <div className='flex flex-wrap gap-1 pt-3 text-sm text-n400 xxl:pt-6'>
                  <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium'>
                    <img src='../assets/images/settings_icon.png' alt='' />
                    <span>Handyman</span>
                  </p>
                  <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium'>
                    <img src='../assets/images/tap_icon.png' alt='' />
                    <span>Cleaning</span>
                  </p>
                  <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium'>
                    <img src='../assets/images/tap_icon.png' alt='' />
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
                href='javascript:void(0)'
                className='relative flex items-center justify-center overflow-hidden rounded-full bg-b300 px-3 py-2 text-sm font-medium text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] lg:px-4 lg:py-3'
              >
                <span className='relative z-10'>View Details</span>
              </a>
            </div>
          </div>
          <div className='flex items-center justify-between gap-3 rounded-2xl border border-n30 p-3 max-md:flex-col'>
            <div className='flex items-center justify-start gap-6 max-xxl:gap-2 max-sm:flex-col'>
              <div className='flex items-center justify-center self-stretch'>
                <img
                  src={workersProfileServiceImg1}
                  alt=''
                  className='rounded-2xl object-cover'
                />
              </div>
              <div className=''>
                <h3 className='heading-3'>Sparkle Ease Cleaning Solutions</h3>
                <div className='flex flex-wrap gap-1 pt-3 text-sm text-n400 xxl:pt-6'>
                  <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium'>
                    <img src='../assets/images/settings_icon.png' alt='' />
                    <span>Handyman</span>
                  </p>
                  <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium'>
                    <img src='../assets/images/tap_icon.png' alt='' />
                    <span>Cleaning</span>
                  </p>
                  <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium'>
                    <img src='../assets/images/tap_icon.png' alt='' />
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
                href='javascript:void(0)'
                className='relative flex items-center justify-center overflow-hidden rounded-full bg-b300 px-3 py-2 text-sm font-medium text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] lg:px-4 lg:py-3'
              >
                <span className='relative z-10'>View Details</span>
              </a>
            </div>
          </div>
          <div className='flex items-center justify-between gap-3 rounded-2xl border border-n30 p-3 max-md:flex-col'>
            <div className='flex items-center justify-start gap-6 max-xxl:gap-2 max-sm:flex-col'>
              <div className='flex items-center justify-center self-stretch'>
                <img
                  src={workersProfileServiceImg2}
                  alt=''
                  className='rounded-2xl object-cover'
                />
              </div>
              <div className=''>
                <h3 className='heading-3'>Sparkle Ease Cleaning Solutions</h3>
                <div className='flex flex-wrap gap-1 pt-3 text-sm text-n400 xxl:pt-6'>
                  <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium'>
                    <img src='../assets/images/settings_icon.png' alt='' />
                    <span>Handyman</span>
                  </p>
                  <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium'>
                    <img src='../assets/images/tap_icon.png' alt='' />
                    <span>Cleaning</span>
                  </p>
                  <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium'>
                    <img src='../assets/images/tap_icon.png' alt='' />
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
                href='javascript:void(0)'
                className='relative flex items-center justify-center overflow-hidden rounded-full bg-b300 px-3 py-2 text-sm font-medium text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] lg:px-4 lg:py-3'
              >
                <span className='relative z-10'>View Details</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Whishlist
