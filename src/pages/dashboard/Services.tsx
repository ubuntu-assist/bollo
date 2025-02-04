import dashboardServiceImg1 from '../../assets/images/dashboard-services-img1.png'
import dashboardServiceImg2 from '../../assets/images/dashboard-services-img2.png'
import dashboardServiceImg3 from '../../assets/images/dashboard-services-img3.png'
import dashboardServiceImg4 from '../../assets/images/dashboard-services-img4.png'

const Services = () => {
  return (
    <section>
      <div className='4xl:large-container grid grid-cols-12 gap-6 max-4xl:px-4'>
        <div className='col-span-12 flex flex-col gap-6 xl:col-span-8 3xl:col-span-9'>
          <div className='flex w-full items-center justify-between gap-6 rounded-2xl bg-white p-3 max-lg:flex-col'>
            <div className='flex items-center justify-start gap-6 max-md:flex-col xl:max-3xl:flex-col'>
              <div className=''>
                <img src={dashboardServiceImg1} className='rounded-xl' alt='' />
              </div>
              <div className='flex flex-col gap-6'>
                <div className='flex items-center justify-start gap-8'>
                  <div className='flex items-center justify-start gap-2'>
                    <i className='ph-fill ph-star text-2xl text-y300'></i>
                    <p className='font-medium text-n300'>4.7 (475)</p>
                  </div>
                  <div className='flex items-center justify-start gap-2'>
                    <i className='ph-fill ph-eye text-2xl text-b300'></i>
                    <p className='font-medium text-n300'>75030</p>
                  </div>
                </div>
                <h4 className='heading-4'>
                  On-Demand Services for Busy Lifestyles
                </h4>
                <div className='flex items-center justify-start gap-4 max-sm:flex-wrap'>
                  <div className='flex items-center justify-center gap-3 rounded-lg bg-b50 px-3 py-3 xl:px-6'>
                    <div className='flex items-center justify-center rounded-full bg-b300 p-3 !leading-none text-white'>
                      <i className='ph ph-arrows-counter-clockwise'></i>
                    </div>
                    <div className=''>
                      <p className='text-xl font-semibold'>17</p>
                      <p className='font-medium'>Queue</p>
                    </div>
                  </div>
                  <div className='flex items-center justify-center gap-3 rounded-lg bg-y50 px-3 py-3 xl:px-6'>
                    <div className='flex items-center justify-center rounded-full bg-y300 p-3 !leading-none text-white'>
                      <i className='ph ph-check'></i>
                    </div>
                    <div className=''>
                      <p className='text-xl font-semibold'>1,554</p>
                      <p className='font-medium'>Completed</p>
                    </div>
                  </div>
                  <div className='flex items-center justify-center gap-3 rounded-lg bg-r50 px-3 py-3 xl:px-6'>
                    <div className='flex items-center justify-center rounded-full bg-r300 p-3 !leading-none text-white'>
                      <i className='ph ph-x'></i>
                    </div>
                    <div className=''>
                      <p className='text-xl font-semibold'>105</p>
                      <p className='font-medium'>Cancelled</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex items-center justify-between gap-6 max-md:flex-wrap 3xl:gap-16'>
              <div className='flex items-center text-center max-lg:gap-4 max-sm:flex-wrap lg:flex-col'>
                <p className='text-lg font-semibold'>Starting From:</p>
                <p className='text-2xl font-bold text-r300 lg:pb-5 lg:pt-3'>
                  $70.00
                </p>
                <p className='text-lg font-semibold lg:pb-3'>
                  On/Off Service:{' '}
                </p>

                <label className='flex cursor-pointer items-center justify-center'>
                  <input
                    type='checkbox'
                    value=''
                    className='peer sr-only'
                    checked
                  />
                  <span className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white"></span>
                </label>
              </div>
              <div className='flex gap-4 lg:flex-col lg:gap-8'>
                <a href='./edit-services.html'>
                  <i className='ph ph-pencil-simple rounded-full bg-b50 p-3 text-2xl !leading-none text-b300'></i>
                </a>
                <button>
                  <i className='ph ph-trash rounded-full bg-r50 p-3 text-2xl !leading-none text-r300'></i>
                </button>
                <button>
                  <i className='ph ph-note-pencil rounded-full bg-y50 p-3 text-2xl !leading-none text-y300'></i>
                </button>
              </div>
            </div>
          </div>
          <div className='flex w-full items-center justify-between gap-6 rounded-2xl bg-white p-3 max-lg:flex-col'>
            <div className='flex items-center justify-start gap-6 max-md:flex-col xl:max-3xl:flex-col'>
              <div className=''>
                <img src={dashboardServiceImg2} className='rounded-xl' alt='' />
              </div>
              <div className='flex flex-col gap-6'>
                <div className='flex items-center justify-start gap-8'>
                  <div className='flex items-center justify-start gap-2'>
                    <i className='ph-fill ph-star text-2xl text-y300'></i>
                    <p className='font-medium text-n300'>4.7 (475)</p>
                  </div>
                  <div className='flex items-center justify-start gap-2'>
                    <i className='ph-fill ph-eye text-2xl text-b300'></i>
                    <p className='font-medium text-n300'>75030</p>
                  </div>
                </div>
                <h4 className='heading-4'>
                  On-Demand Services for Busy Lifestyles
                </h4>
                <div className='flex items-center justify-start gap-4 max-sm:flex-wrap'>
                  <div className='flex items-center justify-center gap-3 rounded-lg bg-b50 px-3 py-3 xl:px-6'>
                    <div className='flex items-center justify-center rounded-full bg-b300 p-3 !leading-none text-white'>
                      <i className='ph ph-arrows-counter-clockwise'></i>
                    </div>
                    <div className=''>
                      <p className='text-xl font-semibold'>17</p>
                      <p className='font-medium'>Queue</p>
                    </div>
                  </div>
                  <div className='flex items-center justify-center gap-3 rounded-lg bg-y50 px-3 py-3 xl:px-6'>
                    <div className='flex items-center justify-center rounded-full bg-y300 p-3 !leading-none text-white'>
                      <i className='ph ph-check'></i>
                    </div>
                    <div className=''>
                      <p className='text-xl font-semibold'>1,554</p>
                      <p className='font-medium'>Completed</p>
                    </div>
                  </div>
                  <div className='flex items-center justify-center gap-3 rounded-lg bg-r50 px-3 py-3 xl:px-6'>
                    <div className='flex items-center justify-center rounded-full bg-r300 p-3 !leading-none text-white'>
                      <i className='ph ph-x'></i>
                    </div>
                    <div className=''>
                      <p className='text-xl font-semibold'>105</p>
                      <p className='font-medium'>Cancelled</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex items-center justify-between gap-6 max-md:flex-wrap 3xl:gap-16'>
              <div className='flex items-center text-center max-lg:gap-4 max-sm:flex-wrap lg:flex-col'>
                <p className='text-lg font-semibold'>Starting From:</p>
                <p className='text-2xl font-bold text-r300 lg:pb-5 lg:pt-3'>
                  $70.00
                </p>
                <p className='text-lg font-semibold lg:pb-3'>
                  On/Off Service:{' '}
                </p>

                <label className='flex cursor-pointer items-center justify-center'>
                  <input
                    type='checkbox'
                    value=''
                    className='peer sr-only'
                    checked
                  />
                  <span className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white"></span>
                </label>
              </div>
              <div className='flex gap-4 lg:flex-col lg:gap-8'>
                <a href='./edit-services.html'>
                  <i className='ph ph-pencil-simple rounded-full bg-b50 p-3 text-2xl !leading-none text-b300'></i>
                </a>
                <button>
                  <i className='ph ph-trash rounded-full bg-r50 p-3 text-2xl !leading-none text-r300'></i>
                </button>
                <button>
                  <i className='ph ph-note-pencil rounded-full bg-y50 p-3 text-2xl !leading-none text-y300'></i>
                </button>
              </div>
            </div>
          </div>
          <div className='flex w-full items-center justify-between gap-6 rounded-2xl bg-white p-3 max-lg:flex-col'>
            <div className='flex items-center justify-start gap-6 max-md:flex-col xl:max-3xl:flex-col'>
              <div className=''>
                <img src={dashboardServiceImg3} className='rounded-xl' alt='' />
              </div>
              <div className='flex flex-col gap-6'>
                <div className='flex items-center justify-start gap-8'>
                  <div className='flex items-center justify-start gap-2'>
                    <i className='ph-fill ph-star text-2xl text-y300'></i>
                    <p className='font-medium text-n300'>4.7 (475)</p>
                  </div>
                  <div className='flex items-center justify-start gap-2'>
                    <i className='ph-fill ph-eye text-2xl text-b300'></i>
                    <p className='font-medium text-n300'>75030</p>
                  </div>
                </div>
                <h4 className='heading-4'>
                  On-Demand Services for Busy Lifestyles
                </h4>
                <div className='flex items-center justify-start gap-4 max-sm:flex-wrap'>
                  <div className='flex items-center justify-center gap-3 rounded-lg bg-b50 px-3 py-3 xl:px-6'>
                    <div className='flex items-center justify-center rounded-full bg-b300 p-3 !leading-none text-white'>
                      <i className='ph ph-arrows-counter-clockwise'></i>
                    </div>
                    <div className=''>
                      <p className='text-xl font-semibold'>17</p>
                      <p className='font-medium'>Queue</p>
                    </div>
                  </div>
                  <div className='flex items-center justify-center gap-3 rounded-lg bg-y50 px-3 py-3 xl:px-6'>
                    <div className='flex items-center justify-center rounded-full bg-y300 p-3 !leading-none text-white'>
                      <i className='ph ph-check'></i>
                    </div>
                    <div className=''>
                      <p className='text-xl font-semibold'>1,554</p>
                      <p className='font-medium'>Completed</p>
                    </div>
                  </div>
                  <div className='flex items-center justify-center gap-3 rounded-lg bg-r50 px-3 py-3 xl:px-6'>
                    <div className='flex items-center justify-center rounded-full bg-r300 p-3 !leading-none text-white'>
                      <i className='ph ph-x'></i>
                    </div>
                    <div className=''>
                      <p className='text-xl font-semibold'>105</p>
                      <p className='font-medium'>Cancelled</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex items-center justify-between gap-6 max-md:flex-wrap 3xl:gap-16'>
              <div className='flex items-center text-center max-lg:gap-4 max-sm:flex-wrap lg:flex-col'>
                <p className='text-lg font-semibold'>Starting From:</p>
                <p className='text-2xl font-bold text-r300 lg:pb-5 lg:pt-3'>
                  $70.00
                </p>
                <p className='text-lg font-semibold lg:pb-3'>
                  On/Off Service:{' '}
                </p>

                <label className='flex cursor-pointer items-center justify-center'>
                  <input
                    type='checkbox'
                    value=''
                    className='peer sr-only'
                    checked
                  />
                  <span className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white"></span>
                </label>
              </div>
              <div className='flex gap-4 lg:flex-col lg:gap-8'>
                <a href='./edit-services.html'>
                  <i className='ph ph-pencil-simple rounded-full bg-b50 p-3 text-2xl !leading-none text-b300'></i>
                </a>
                <button>
                  <i className='ph ph-trash rounded-full bg-r50 p-3 text-2xl !leading-none text-r300'></i>
                </button>
                <button>
                  <i className='ph ph-note-pencil rounded-full bg-y50 p-3 text-2xl !leading-none text-y300'></i>
                </button>
              </div>
            </div>
          </div>
          <div className='flex w-full items-center justify-between gap-6 rounded-2xl bg-white p-3 max-lg:flex-col'>
            <div className='flex items-center justify-start gap-6 max-md:flex-col xl:max-3xl:flex-col'>
              <div className=''>
                <img src={dashboardServiceImg4} className='rounded-xl' alt='' />
              </div>
              <div className='flex flex-col gap-6'>
                <div className='flex items-center justify-start gap-8'>
                  <div className='flex items-center justify-start gap-2'>
                    <i className='ph-fill ph-star text-2xl text-y300'></i>
                    <p className='font-medium text-n300'>4.7 (475)</p>
                  </div>
                  <div className='flex items-center justify-start gap-2'>
                    <i className='ph-fill ph-eye text-2xl text-b300'></i>
                    <p className='font-medium text-n300'>75030</p>
                  </div>
                </div>
                <h4 className='heading-4'>
                  On-Demand Services for Busy Lifestyles
                </h4>
                <div className='flex items-center justify-start gap-4 max-sm:flex-wrap'>
                  <div className='flex items-center justify-center gap-3 rounded-lg bg-b50 px-3 py-3 xl:px-6'>
                    <div className='flex items-center justify-center rounded-full bg-b300 p-3 !leading-none text-white'>
                      <i className='ph ph-arrows-counter-clockwise'></i>
                    </div>
                    <div className=''>
                      <p className='text-xl font-semibold'>17</p>
                      <p className='font-medium'>Queue</p>
                    </div>
                  </div>
                  <div className='flex items-center justify-center gap-3 rounded-lg bg-y50 px-3 py-3 xl:px-6'>
                    <div className='flex items-center justify-center rounded-full bg-y300 p-3 !leading-none text-white'>
                      <i className='ph ph-check'></i>
                    </div>
                    <div className=''>
                      <p className='text-xl font-semibold'>1,554</p>
                      <p className='font-medium'>Completed</p>
                    </div>
                  </div>
                  <div className='flex items-center justify-center gap-3 rounded-lg bg-r50 px-3 py-3 xl:px-6'>
                    <div className='flex items-center justify-center rounded-full bg-r300 p-3 !leading-none text-white'>
                      <i className='ph ph-x'></i>
                    </div>
                    <div className=''>
                      <p className='text-xl font-semibold'>105</p>
                      <p className='font-medium'>Cancelled</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex items-center justify-between gap-6 max-md:flex-wrap 3xl:gap-16'>
              <div className='flex items-center text-center max-lg:gap-4 max-sm:flex-wrap lg:flex-col'>
                <p className='text-lg font-semibold'>Starting From:</p>
                <p className='text-2xl font-bold text-r300 lg:pb-5 lg:pt-3'>
                  $70.00
                </p>
                <p className='text-lg font-semibold lg:pb-3'>
                  On/Off Service:{' '}
                </p>

                <label className='flex cursor-pointer items-center justify-center'>
                  <input
                    type='checkbox'
                    value=''
                    className='peer sr-only'
                    checked
                  />
                  <span className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white"></span>
                </label>
              </div>
              <div className='flex gap-4 lg:flex-col lg:gap-8'>
                <a href='./edit-services.html'>
                  <i className='ph ph-pencil-simple rounded-full bg-b50 p-3 text-2xl !leading-none text-b300'></i>
                </a>
                <button>
                  <i className='ph ph-trash rounded-full bg-r50 p-3 text-2xl !leading-none text-r300'></i>
                </button>
                <button>
                  <i className='ph ph-note-pencil rounded-full bg-y50 p-3 text-2xl !leading-none text-y300'></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-12 md:col-span-6 xl:col-span-4 3xl:col-span-3'>
          <div className='rounded-xl bg-white'>
            <header className='flex items-center justify-between px-4 py-6'>
              <p className='current-date'></p>
              <div className='icons flex gap-2'>
                <span
                  id='prev'
                  className='flex size-9 cursor-pointer items-center justify-center rounded-full text-2xl !leading-none text-n300 duration-500 hover:bg-r300 hover:text-white'
                >
                  <i className='ph ph-caret-left'></i>
                </span>

                <span
                  id='next'
                  className='flex size-9 cursor-pointer items-center justify-center rounded-full text-2xl !leading-none text-n300 duration-500 hover:bg-r300 hover:text-white'
                >
                  <i className='ph ph-caret-right'></i>
                </span>
              </div>
            </header>

            <div className='calendar p-2 sm:p-5'>
              <ul className='weeks flex text-center'>
                <li>Sun</li>
                <li>Mon</li>
                <li>Tue</li>
                <li>Wed</li>
                <li>Thu</li>
                <li>Fri</li>
                <li>Sat</li>
              </ul>
              <ul className='days mb-5 flex flex-wrap text-center'></ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
