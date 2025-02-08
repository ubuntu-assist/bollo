import viewServicesImg1 from '../../assets/images/view_services_img1.png'
import viewServicesImg2 from '../../assets/images/view_services_img2.png'
import viewServicesImg3 from '../../assets/images/view_services_img3.png'
import viewServicesImg4 from '../../assets/images/view_services_img4.png'
import viewServicesImg5 from '../../assets/images/view_services_img5.png'
import viewServicesImg6 from '../../assets/images/view_services_img6.png'

const PartnerSection = () => {
  return (
    <section className='sbp-30'>
      <div className='container'>
        <div className='flex flex-col items-center justify-center'>
          <div className='relative max-md:overflow-hidden'>
            <div className='hexagon-styles my-[calc(100px*0.5/2)] h-[calc(100px*0.57736720554273)] w-[100px] rounded-[calc(100px/36.75)] bg-b50 before:rounded-[calc(100px/18.75)] after:rounded-[calc(100px/18.75)]'>
              <div className='absolute -top-[20px] left-[5px]'>
                <div className='hexagon-styles z-10 my-[calc(90px*0.5/2)] h-[calc(90px*0.57736720554273)] w-[90px] rounded-[calc(90px/50)] bg-b300 before:rounded-[calc(90px/50)] after:rounded-[calc(90px/50)]'>
                  <div className='absolute -top-[18px] left-[4px] z-20'>
                    <div className='hexagon-styles z-10 my-[calc(82px*0.5/2)] h-[calc(82px*0.57736720554273)] w-[82px] rounded-[calc(82px/50)] bg-b50 before:rounded-[calc(82px/50)] after:rounded-[calc(82px/50)]'>
                      <div className='r-hex3 absolute -left-0.5 -top-[18px] z-30 inline-block w-[86px] overflow-hidden'>
                        <div className='r-hex-inner3'>
                          <div className='expertImg4 r-hex-inner-3 before:h-[86px] before:bg-cover'></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='absolute bottom-3 right-1 z-30'>
              <img src='./assets/images/verify-badge.png' alt='' className='' />
            </div>
          </div>
          <p className='heading-4 pt-3 text-center'>
            Partner With Duclair Fopa
          </p>
          <div className='max-w-[300px] pt-8'>
            <a
              href='./services'
              className='relative block w-full overflow-hidden rounded-full bg-n700 px-6 py-3 text-sm font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]'
            >
              <div className='relative z-20 flex items-center justify-center gap-3'>
                <span>View Services</span>
              </div>
            </a>
          </div>
          <div className='relative flex w-full items-center justify-center pt-7'>
            <span className='bg-white px-3 text-center text-sm font-medium'>
              More Projects by Duclair Fopa
            </span>
            <div className='absolute left-0 right-0 top-[38px] -z-10 h-px w-full bg-n30'></div>
          </div>
        </div>

        <div className='grid grid-cols-12 gap-6 pt-8'>
          <div className='col-span-6 rounded-xl border border-n30 p-3 sm:col-span-4 lg:col-span-2'>
            <div className='flex items-center justify-center'>
              <img src={viewServicesImg1} className='rounded-3xl' alt='' />
            </div>
            <p className='pt-5 text-center text-sm font-semibold'>Cleaning</p>
          </div>
          <div className='col-span-6 rounded-xl border border-n30 p-3 sm:col-span-4 lg:col-span-2'>
            <div className='flex items-center justify-center'>
              <img src={viewServicesImg2} className='rounded-3xl' alt='' />
            </div>
            <p className='pt-5 text-center text-sm font-semibold'>
              Babysitting
            </p>
          </div>
          <div className='col-span-6 rounded-xl border border-n30 p-3 sm:col-span-4 lg:col-span-2'>
            <div className='flex items-center justify-center'>
              <img src={viewServicesImg3} className='rounded-3xl' alt='' />
            </div>
            <p className='pt-5 text-center text-sm font-semibold'>Gardening</p>
          </div>
          <div className='col-span-6 rounded-xl border border-n30 p-3 sm:col-span-4 lg:col-span-2'>
            <div className='flex items-center justify-center'>
              <img src={viewServicesImg4} className='rounded-3xl' alt='' />
            </div>
            <p className='pt-5 text-center text-sm font-semibold'>Handyman</p>
          </div>
          <div className='col-span-6 rounded-xl border border-n30 p-3 sm:col-span-4 lg:col-span-2'>
            <div className='flex items-center justify-center'>
              <img src={viewServicesImg5} className='rounded-3xl' alt='' />
            </div>
            <p className='pt-5 text-center text-sm font-semibold'>Plumber</p>
          </div>
          <div className='col-span-6 rounded-xl border border-n30 p-3 sm:col-span-4 lg:col-span-2'>
            <div className='flex items-center justify-center'>
              <img src={viewServicesImg6} className='rounded-3xl' alt='' />
            </div>
            <p className='pt-5 text-center text-sm font-semibold'>Renovation</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnerSection
