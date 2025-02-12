import { Link } from 'react-router'
import {
  BreadcrumbSection,
  NewsletterSection,
  SearchBoxSection,
} from '../../components'
import { FaqSection } from '../../features/become-tasker/components'

const FindWorkers = () => {
  return (
    <>
      <BreadcrumbSection />
      <SearchBoxSection />

      <section className='sbp-15'>
        <div className='container'>
          <h2 className='heading-2 pb-3'>
            Discover the world’s best flexible talent
          </h2>
          <p className='font-medium text-n300'>
            Browse and connect with top talent who can help bring your next
            project to life
          </p>

          <div className='stp-15 sbp-15 flex items-start justify-start'>
            <div className='flex flex-wrap items-center justify-start gap-3 overflow-hidden rounded-lg border border-b50 p-1 min-[380px]:rounded-full'>
              <div
                className='flex cursor-pointer items-center justify-start gap-3 rounded-full bg-n30 px-5 py-3 text-start font-medium text-n300'
                id='filterButton'
              >
                <i className='ph ph-sliders'></i>
                <span className=''>Filters</span>
              </div>
              <div
                className='flex cursor-pointer rounded-full bg-n30 px-5 py-3 text-start font-medium text-n300'
                id='location'
              >
                <span className=''>Location</span>
              </div>
              <div
                className='cursor-pointer rounded-full bg-n30 px-5 py-3 text-start font-medium text-n300'
                id='rate'
              >
                <span className=''>Rate</span>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-12 gap-6'>
            <div className='col-span-12 flex flex-col gap-6 rounded-3xl border border-n40 bg-n10 py-6 md:col-span-6 xl:col-span-4'>
              <div className='flex items-center justify-start gap-3 px-6'>
                <div className='relative max-md:overflow-hidden'>
                  <div className='hexagon-styles my-[calc(100px*0.5/2)] h-[calc(100px*0.57736720554273)] w-[100px] rounded-[calc(100px/36.75)] bg-b50 before:rounded-[calc(100px/18.75)] after:rounded-[calc(100px/18.75)]'>
                    <div className='absolute -top-[20px] left-[5px]'>
                      <div className='hexagon-styles z-10 my-[calc(90px*0.5/2)] h-[calc(90px*0.57736720554273)] w-[90px] rounded-[calc(90px/50)] bg-b300 before:rounded-[calc(90px/50)] after:rounded-[calc(90px/50)]'>
                        <div className='absolute -top-[18px] left-[4px] z-20'>
                          <div className='hexagon-styles z-10 my-[calc(82px*0.5/2)] h-[calc(82px*0.57736720554273)] w-[82px] rounded-[calc(82px/50)] bg-b50 before:rounded-[calc(82px/50)] after:rounded-[calc(82px/50)]'>
                            <div className='r-hex3 absolute -left-0.5 -top-[19px] z-30 inline-block w-[86px] overflow-hidden'>
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
                  <div className='flex items-center justify-start gap-3'>
                    <h5 className='heading-5'>Mayme Cole</h5>
                    <p className='rounded-full bg-y300 px-2 py-1 text-xs font-medium'>
                      PRO
                    </p>
                  </div>
                  <p className='pt-2 text-n500'>Brooklyn, NY, USA</p>
                </div>
              </div>

              <div className='flex flex-wrap gap-2 px-6 text-[13px]'>
                <p className='rounded-full bg-r50 px-2 py-1 font-medium text-r300'>
                  $75 - $100/hr
                </p>
                <p className='rounded-full bg-g50 px-2 py-1 font-medium text-g400'>
                  TOP INDEPENDENT
                </p>
                <p className='rounded-full bg-v50 px-2 py-1 font-medium text-v300'>
                  AVAILABLE
                </p>
              </div>

              <div className='flex flex-wrap gap-2 px-6 text-n400'>
                <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium'>
                  <img src='./assets/images/settings_icon.png' alt='' />
                  <span>Handyman</span>
                </p>
                <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium'>
                  <img src='./assets/images/tap_icon.png' alt='' />
                  <span>Plumber </span>
                </p>
                <p className='rounded-xl bg-b50 px-3 py-2 font-medium'>+3</p>
              </div>

              <div className='relative'>
                <div className='swiper expert-slider-carousel group'>
                  <div className='swiper-wrapper'>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_4.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_1.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_2.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_3.png'
                        alt=''
                        className='w-full'
                      />
                    </div>

                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_5.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_6.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_2.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_3.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                  </div>
                  <div className='absolute left-2 right-2 top-28 z-10'>
                    <div className='flex w-full items-center justify-between'>
                      <button className='ara-prev flex -translate-x-12 items-center justify-center rounded-full border-2 border-r300 p-2 text-lg !leading-none text-r300 opacity-0 duration-500 hover:bg-r300 hover:text-white group-hover:translate-x-0 group-hover:opacity-100'>
                        <i className='ph-bold ph-caret-left'></i>
                      </button>
                      <button className='ara-next flex translate-x-12 items-center justify-center rounded-full border-2 border-r300 p-2 text-lg !leading-none text-r300 opacity-0 duration-500 hover:bg-r300 hover:text-white group-hover:translate-x-0 group-hover:opacity-100'>
                        <i className='ph-bold ph-caret-right'></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex items-center justify-start gap-2 px-6'>
                <Link
                  to='/worker-profile'
                  className='relative w-full overflow-hidden rounded-full bg-n700 px-6 py-3 text-sm font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]'
                >
                  <div className='relative z-20 flex items-center justify-center gap-3'>
                    <i className='ph ph-paper-plane-tilt text-xl !leading-none'></i>
                    <span>Get in touch</span>
                  </div>
                </Link>
                <button className='relative flex items-center justify-center rounded-full border p-3 text-xl !leading-none duration-500 hover:bg-y300'>
                  <i className='ph ph-heart'></i>
                </button>
              </div>
            </div>
            <div className='col-span-12 flex flex-col gap-6 rounded-3xl border border-n40 bg-n10 py-6 md:col-span-6 xl:col-span-4'>
              <div className='flex items-center justify-start gap-3 px-6'>
                <div className='relative max-md:overflow-hidden'>
                  <div className='hexagon-styles my-[calc(100px*0.5/2)] h-[calc(100px*0.57736720554273)] w-[100px] rounded-[calc(100px/36.75)] bg-b50 before:rounded-[calc(100px/18.75)] after:rounded-[calc(100px/18.75)]'>
                    <div className='absolute -top-[20px] left-[5px]'>
                      <div className='hexagon-styles z-10 my-[calc(90px*0.5/2)] h-[calc(90px*0.57736720554273)] w-[90px] rounded-[calc(90px/50)] bg-b300 before:rounded-[calc(90px/50)] after:rounded-[calc(90px/50)]'>
                        <div className='absolute -top-[18px] left-[4px] z-20'>
                          <div className='hexagon-styles z-10 my-[calc(82px*0.5/2)] h-[calc(82px*0.57736720554273)] w-[82px] rounded-[calc(82px/50)] bg-b50 before:rounded-[calc(82px/50)] after:rounded-[calc(82px/50)]'>
                            <div className='r-hex3 absolute -left-0.5 -top-[19px] z-30 inline-block w-[86px] overflow-hidden'>
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
                    <img
                      src='./assets/images/verify-badge.png'
                      alt=''
                      className=''
                    />
                  </div>
                </div>
                <div className='max-[350px]:max-w-20'>
                  <div className='flex items-center justify-start gap-3'>
                    <h5 className='heading-5'>Clyde Gordon</h5>
                    <p className='rounded-full bg-y300 px-2 py-1 text-xs font-medium'>
                      PRO
                    </p>
                  </div>
                  <p className='pt-2 text-n500'>Brooklyn, NY, USA</p>
                </div>
              </div>

              <div className='flex flex-wrap gap-2 px-6 text-[13px]'>
                <p className='rounded-full bg-r50 px-2 py-1 font-medium text-r300'>
                  $75 - $100/hr
                </p>
                <p className='rounded-full bg-g50 px-2 py-1 font-medium text-g400'>
                  TOP INDEPENDENT
                </p>
                <p className='rounded-full bg-v50 px-2 py-1 font-medium text-v300'>
                  AVAILABLE
                </p>
              </div>

              <div className='flex flex-wrap gap-2 px-6 text-n400'>
                <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium'>
                  <img src='./assets/images/settings_icon.png' alt='' />
                  <span>Handyman</span>
                </p>
                <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium'>
                  <img src='./assets/images/tap_icon.png' alt='' />
                  <span>Plumber </span>
                </p>
                <p className='rounded-xl bg-b50 px-3 py-2 font-medium'>+3</p>
              </div>

              <div className='relative'>
                <div className='swiper expert-slider-carousel group'>
                  <div className='swiper-wrapper'>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_1.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_2.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_3.png'
                        alt=''
                        className='w-full'
                      />
                    </div>

                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_4.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_5.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_6.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_2.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_3.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                  </div>
                  <div className='absolute left-2 right-2 top-28 z-10'>
                    <div className='flex w-full items-center justify-between'>
                      <button className='ara-prev flex -translate-x-12 items-center justify-center rounded-full border-2 border-r300 p-2 text-lg !leading-none text-r300 opacity-0 duration-500 hover:bg-r300 hover:text-white group-hover:translate-x-0 group-hover:opacity-100'>
                        <i className='ph-bold ph-caret-left'></i>
                      </button>
                      <button className='ara-next flex translate-x-12 items-center justify-center rounded-full border-2 border-r300 p-2 text-lg !leading-none text-r300 opacity-0 duration-500 hover:bg-r300 hover:text-white group-hover:translate-x-0 group-hover:opacity-100'>
                        <i className='ph-bold ph-caret-right'></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex items-center justify-start gap-2 px-6'>
                <a
                  href='./worker-profile.html'
                  className='relative w-full overflow-hidden rounded-full bg-n700 px-6 py-3 text-sm font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]'
                >
                  <div className='relative z-20 flex items-center justify-center gap-3'>
                    <i className='ph ph-paper-plane-tilt text-xl !leading-none'></i>
                    <span>Get in touch</span>
                  </div>
                </a>
                <button className='relative flex items-center justify-center rounded-full border p-3 text-xl !leading-none duration-500 hover:bg-y300'>
                  <i className='ph ph-heart'></i>
                </button>
              </div>
            </div>
            <div className='col-span-12 flex flex-col gap-6 rounded-3xl border border-n40 bg-n10 py-6 md:col-span-6 xl:col-span-4'>
              <div className='flex items-center justify-start gap-3 px-6'>
                <div className='relative max-md:overflow-hidden'>
                  <div className='hexagon-styles my-[calc(100px*0.5/2)] h-[calc(100px*0.57736720554273)] w-[100px] rounded-[calc(100px/36.75)] bg-b50 before:rounded-[calc(100px/18.75)] after:rounded-[calc(100px/18.75)]'>
                    <div className='absolute -top-[20px] left-[5px]'>
                      <div className='hexagon-styles z-10 my-[calc(90px*0.5/2)] h-[calc(90px*0.57736720554273)] w-[90px] rounded-[calc(90px/50)] bg-b300 before:rounded-[calc(90px/50)] after:rounded-[calc(90px/50)]'>
                        <div className='absolute -top-[18px] left-[4px] z-20'>
                          <div className='hexagon-styles z-10 my-[calc(82px*0.5/2)] h-[calc(82px*0.57736720554273)] w-[82px] rounded-[calc(82px/50)] bg-b50 before:rounded-[calc(82px/50)] after:rounded-[calc(82px/50)]'>
                            <div className='r-hex3 absolute -left-0.5 -top-[19px] z-30 inline-block w-[86px] overflow-hidden'>
                              <div className='r-hex-inner3'>
                                <div className='expertImg3 r-hex-inner-3 before:h-[86px] before:bg-cover'></div>
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
                  <div className='flex items-center justify-start gap-3'>
                    <h5 className='heading-5'>Madge Dale</h5>
                    <p className='rounded-full bg-y300 px-2 py-1 text-xs font-medium'>
                      PRO
                    </p>
                  </div>
                  <p className='pt-2 text-n500'>Brooklyn, NY, USA</p>
                </div>
              </div>

              <div className='flex flex-wrap gap-2 px-6 text-[13px]'>
                <p className='rounded-full bg-r50 px-2 py-1 font-medium text-r300'>
                  $75 - $100/hr
                </p>
                <p className='rounded-full bg-g50 px-2 py-1 font-medium text-g400'>
                  TOP INDEPENDENT
                </p>
                <p className='rounded-full bg-v50 px-2 py-1 font-medium text-v300'>
                  AVAILABLE
                </p>
              </div>

              <div className='flex flex-wrap gap-2 px-6 text-n400'>
                <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium'>
                  <img src='./assets/images/settings_icon.png' alt='' />
                  <span>Handyman</span>
                </p>
                <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium'>
                  <img src='./assets/images/tap_icon.png' alt='' />
                  <span>Plumber </span>
                </p>
                <p className='rounded-xl bg-b50 px-3 py-2 font-medium'>+3</p>
              </div>

              <div className='relative'>
                <div className='swiper expert-slider-carousel group'>
                  <div className='swiper-wrapper'>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_6.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_1.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_2.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_3.png'
                        alt=''
                        className='w-full'
                      />
                    </div>

                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_4.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_5.png'
                        alt=''
                        className='w-full'
                      />
                    </div>

                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_2.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_3.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                  </div>
                  <div className='absolute left-2 right-2 top-28 z-10'>
                    <div className='flex w-full items-center justify-between'>
                      <button className='ara-prev flex -translate-x-12 items-center justify-center rounded-full border-2 border-r300 p-2 text-lg !leading-none text-r300 opacity-0 duration-500 hover:bg-r300 hover:text-white group-hover:translate-x-0 group-hover:opacity-100'>
                        <i className='ph-bold ph-caret-left'></i>
                      </button>
                      <button className='ara-next flex translate-x-12 items-center justify-center rounded-full border-2 border-r300 p-2 text-lg !leading-none text-r300 opacity-0 duration-500 hover:bg-r300 hover:text-white group-hover:translate-x-0 group-hover:opacity-100'>
                        <i className='ph-bold ph-caret-right'></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex items-center justify-start gap-2 px-6'>
                <a
                  href='./worker-profile.html'
                  className='relative w-full overflow-hidden rounded-full bg-n700 px-6 py-3 text-sm font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]'
                >
                  <div className='relative z-20 flex items-center justify-center gap-3'>
                    <i className='ph ph-paper-plane-tilt text-xl !leading-none'></i>
                    <span>Get in touch</span>
                  </div>
                </a>
                <button className='relative flex items-center justify-center rounded-full border p-3 text-xl !leading-none duration-500 hover:bg-y300'>
                  <i className='ph ph-heart'></i>
                </button>
              </div>
            </div>
            <div className='col-span-12 flex flex-col gap-6 rounded-3xl border border-n40 bg-n10 py-6 md:col-span-6 xl:col-span-4'>
              <div className='flex items-center justify-start gap-3 px-6'>
                <div className='relative max-md:overflow-hidden'>
                  <div className='hexagon-styles my-[calc(100px*0.5/2)] h-[calc(100px*0.57736720554273)] w-[100px] rounded-[calc(100px/36.75)] bg-b50 before:rounded-[calc(100px/18.75)] after:rounded-[calc(100px/18.75)]'>
                    <div className='absolute -top-[20px] left-[5px]'>
                      <div className='hexagon-styles z-10 my-[calc(90px*0.5/2)] h-[calc(90px*0.57736720554273)] w-[90px] rounded-[calc(90px/50)] bg-b300 before:rounded-[calc(90px/50)] after:rounded-[calc(90px/50)]'>
                        <div className='absolute -top-[18px] left-[4px] z-20'>
                          <div className='hexagon-styles z-10 my-[calc(82px*0.5/2)] h-[calc(82px*0.57736720554273)] w-[82px] rounded-[calc(82px/50)] bg-b50 before:rounded-[calc(82px/50)] after:rounded-[calc(82px/50)]'>
                            <div className='r-hex3 absolute -left-0.5 -top-[19px] z-30 inline-block w-[86px] overflow-hidden'>
                              <div className='r-hex-inner3'>
                                <div className='expertImg2 r-hex-inner-3 before:h-[86px] before:bg-cover'></div>
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
                  <div className='flex items-center justify-start gap-3'>
                    <h5 className='heading-5'>Evan Dev</h5>
                    <p className='rounded-full bg-y300 px-2 py-1 text-xs font-medium'>
                      PRO
                    </p>
                  </div>
                  <p className='pt-2 text-n500'>Brooklyn, NY, USA</p>
                </div>
              </div>

              <div className='flex flex-wrap gap-2 px-6 text-[13px]'>
                <p className='rounded-full bg-r50 px-2 py-1 font-medium text-r300'>
                  $75 - $100/hr
                </p>
                <p className='rounded-full bg-g50 px-2 py-1 font-medium text-g400'>
                  TOP INDEPENDENT
                </p>
                <p className='rounded-full bg-v50 px-2 py-1 font-medium text-v300'>
                  AVAILABLE
                </p>
              </div>

              <div className='flex flex-wrap gap-2 px-6 text-n400'>
                <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium'>
                  <img src='./assets/images/settings_icon.png' alt='' />
                  <span>Handyman</span>
                </p>
                <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium'>
                  <img src='./assets/images/tap_icon.png' alt='' />
                  <span>Plumber </span>
                </p>
                <p className='rounded-xl bg-b50 px-3 py-2 font-medium'>+3</p>
              </div>

              <div className='relative'>
                <div className='swiper expert-slider-carousel group'>
                  <div className='swiper-wrapper'>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_2.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_1.png'
                        alt=''
                        className='w-full'
                      />
                    </div>

                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_3.png'
                        alt=''
                        className='w-full'
                      />
                    </div>

                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_4.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_5.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_6.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_2.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_3.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                  </div>
                  <div className='absolute left-2 right-2 top-28 z-10'>
                    <div className='flex w-full items-center justify-between'>
                      <button className='ara-prev flex -translate-x-12 items-center justify-center rounded-full border-2 border-r300 p-2 text-lg !leading-none text-r300 opacity-0 duration-500 hover:bg-r300 hover:text-white group-hover:translate-x-0 group-hover:opacity-100'>
                        <i className='ph-bold ph-caret-left'></i>
                      </button>
                      <button className='ara-next flex translate-x-12 items-center justify-center rounded-full border-2 border-r300 p-2 text-lg !leading-none text-r300 opacity-0 duration-500 hover:bg-r300 hover:text-white group-hover:translate-x-0 group-hover:opacity-100'>
                        <i className='ph-bold ph-caret-right'></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex items-center justify-start gap-2 px-6'>
                <a
                  href='./worker-profile.html'
                  className='relative w-full overflow-hidden rounded-full bg-n700 px-6 py-3 text-sm font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]'
                >
                  <div className='relative z-20 flex items-center justify-center gap-3'>
                    <i className='ph ph-paper-plane-tilt text-xl !leading-none'></i>
                    <span>Get in touch</span>
                  </div>
                </a>
                <button className='relative flex items-center justify-center rounded-full border p-3 text-xl !leading-none duration-500 hover:bg-y300'>
                  <i className='ph ph-heart'></i>
                </button>
              </div>
            </div>
            <div className='col-span-12 flex flex-col gap-6 rounded-3xl border border-n40 bg-n10 py-6 md:col-span-6 xl:col-span-4'>
              <div className='flex items-center justify-start gap-3 px-6'>
                <div className='relative max-md:overflow-hidden'>
                  <div className='hexagon-styles my-[calc(100px*0.5/2)] h-[calc(100px*0.57736720554273)] w-[100px] rounded-[calc(100px/36.75)] bg-b50 before:rounded-[calc(100px/18.75)] after:rounded-[calc(100px/18.75)]'>
                    <div className='absolute -top-[20px] left-[5px]'>
                      <div className='hexagon-styles z-10 my-[calc(90px*0.5/2)] h-[calc(90px*0.57736720554273)] w-[90px] rounded-[calc(90px/50)] bg-b300 before:rounded-[calc(90px/50)] after:rounded-[calc(90px/50)]'>
                        <div className='absolute -top-[18px] left-[4px] z-20'>
                          <div className='hexagon-styles z-10 my-[calc(82px*0.5/2)] h-[calc(82px*0.57736720554273)] w-[82px] rounded-[calc(82px/50)] bg-b50 before:rounded-[calc(82px/50)] after:rounded-[calc(82px/50)]'>
                            <div className='r-hex3 absolute -left-0.5 -top-[19px] z-30 inline-block w-[86px] overflow-hidden'>
                              <div className='r-hex-inner3'>
                                <div className='expertImg1 r-hex-inner-3 before:h-[86px] before:bg-cover'></div>
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
                  <div className='flex items-center justify-start gap-3'>
                    <h5 className='heading-5'>Ruth Vega</h5>
                    <p className='rounded-full bg-y300 px-2 py-1 text-xs font-medium'>
                      PRO
                    </p>
                  </div>
                  <p className='pt-2 text-n500'>Brooklyn, NY, USA</p>
                </div>
              </div>

              <div className='flex flex-wrap gap-2 px-6 text-[13px]'>
                <p className='rounded-full bg-r50 px-2 py-1 font-medium text-r300'>
                  $75 - $100/hr
                </p>
                <p className='rounded-full bg-g50 px-2 py-1 font-medium text-g400'>
                  TOP INDEPENDENT
                </p>
                <p className='rounded-full bg-v50 px-2 py-1 font-medium text-v300'>
                  AVAILABLE
                </p>
              </div>

              <div className='flex flex-wrap gap-2 px-6 text-n400'>
                <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium'>
                  <img src='./assets/images/settings_icon.png' alt='' />
                  <span>Handyman</span>
                </p>
                <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium'>
                  <img src='./assets/images/tap_icon.png' alt='' />
                  <span>Plumber </span>
                </p>
                <p className='rounded-xl bg-b50 px-3 py-2 font-medium'>+3</p>
              </div>

              <div className='relative'>
                <div className='swiper expert-slider-carousel group'>
                  <div className='swiper-wrapper'>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_3.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_1.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_2.png'
                        alt=''
                        className='w-full'
                      />
                    </div>

                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_4.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_5.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_6.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_2.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_3.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                  </div>
                  <div className='absolute left-2 right-2 top-28 z-10'>
                    <div className='flex w-full items-center justify-between'>
                      <button className='ara-prev flex -translate-x-12 items-center justify-center rounded-full border-2 border-r300 p-2 text-lg !leading-none text-r300 opacity-0 duration-500 hover:bg-r300 hover:text-white group-hover:translate-x-0 group-hover:opacity-100'>
                        <i className='ph-bold ph-caret-left'></i>
                      </button>
                      <button className='ara-next flex translate-x-12 items-center justify-center rounded-full border-2 border-r300 p-2 text-lg !leading-none text-r300 opacity-0 duration-500 hover:bg-r300 hover:text-white group-hover:translate-x-0 group-hover:opacity-100'>
                        <i className='ph-bold ph-caret-right'></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex items-center justify-start gap-2 px-6'>
                <a
                  href='./worker-profile.html'
                  className='relative w-full overflow-hidden rounded-full bg-n700 px-6 py-3 text-sm font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]'
                >
                  <div className='relative z-20 flex items-center justify-center gap-3'>
                    <i className='ph ph-paper-plane-tilt text-xl !leading-none'></i>
                    <span>Get in touch</span>
                  </div>
                </a>
                <button className='relative flex items-center justify-center rounded-full border p-3 text-xl !leading-none duration-500 hover:bg-y300'>
                  <i className='ph ph-heart'></i>
                </button>
              </div>
            </div>
            <div className='col-span-12 flex flex-col gap-6 rounded-3xl border border-n40 bg-n10 py-6 md:col-span-6 xl:col-span-4'>
              <div className='flex items-center justify-start gap-3 px-6'>
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
                  <div className='flex items-center justify-start gap-3'>
                    <h5 className='heading-5'>Scott Wade</h5>
                    <p className='rounded-full bg-y300 px-2 py-1 text-xs font-medium'>
                      PRO
                    </p>
                  </div>
                  <p className='pt-2 text-n500'>Brooklyn, NY, USA</p>
                </div>
              </div>

              <div className='flex flex-wrap gap-2 px-6 text-[13px]'>
                <p className='rounded-full bg-r50 px-2 py-1 font-medium text-r300'>
                  $75 - $100/hr
                </p>
                <p className='rounded-full bg-g50 px-2 py-1 font-medium text-g400'>
                  TOP INDEPENDENT
                </p>
                <p className='rounded-full bg-v50 px-2 py-1 font-medium text-v300'>
                  AVAILABLE
                </p>
              </div>

              <div className='flex flex-wrap gap-2 px-6 text-n400'>
                <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium'>
                  <img src='./assets/images/settings_icon.png' alt='' />
                  <span>Handyman</span>
                </p>
                <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium'>
                  <img src='./assets/images/tap_icon.png' alt='' />
                  <span>Plumber </span>
                </p>
                <p className='rounded-xl bg-b50 px-3 py-2 font-medium'>+3</p>
              </div>

              <div className='relative'>
                <div className='swiper expert-slider-carousel group'>
                  <div className='swiper-wrapper'>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_4.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_3.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_2.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_1.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_5.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_6.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_3.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_2.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                  </div>
                  <div className='absolute left-2 right-2 top-28 z-10'>
                    <div className='flex w-full items-center justify-between'>
                      <button className='ara-prev flex -translate-x-12 items-center justify-center rounded-full border-2 border-r300 p-2 text-lg !leading-none text-r300 opacity-0 duration-500 hover:bg-r300 hover:text-white group-hover:translate-x-0 group-hover:opacity-100'>
                        <i className='ph-bold ph-caret-left'></i>
                      </button>
                      <button className='ara-next flex translate-x-12 items-center justify-center rounded-full border-2 border-r300 p-2 text-lg !leading-none text-r300 opacity-0 duration-500 hover:bg-r300 hover:text-white group-hover:translate-x-0 group-hover:opacity-100'>
                        <i className='ph-bold ph-caret-right'></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex items-center justify-start gap-2 px-6'>
                <a
                  href='./worker-profile.html'
                  className='relative w-full overflow-hidden rounded-full bg-n700 px-6 py-3 text-sm font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]'
                >
                  <div className='relative z-20 flex items-center justify-center gap-3'>
                    <i className='ph ph-paper-plane-tilt text-xl !leading-none'></i>
                    <span>Get in touch</span>
                  </div>
                </a>
                <button className='relative flex items-center justify-center rounded-full border p-3 text-xl !leading-none duration-500 hover:bg-y300'>
                  <i className='ph ph-heart'></i>
                </button>
              </div>
            </div>
            <div className='col-span-12 flex flex-col gap-6 rounded-3xl border border-n40 bg-n10 py-6 md:col-span-6 xl:col-span-4'>
              <div className='flex items-center justify-start gap-3 px-6'>
                <div className='relative max-md:overflow-hidden'>
                  <div className='hexagon-styles my-[calc(100px*0.5/2)] h-[calc(100px*0.57736720554273)] w-[100px] rounded-[calc(100px/36.75)] bg-b50 before:rounded-[calc(100px/18.75)] after:rounded-[calc(100px/18.75)]'>
                    <div className='absolute -top-[20px] left-[5px]'>
                      <div className='hexagon-styles z-10 my-[calc(90px*0.5/2)] h-[calc(90px*0.57736720554273)] w-[90px] rounded-[calc(90px/50)] bg-b300 before:rounded-[calc(90px/50)] after:rounded-[calc(90px/50)]'>
                        <div className='absolute -top-[18px] left-[4px] z-20'>
                          <div className='hexagon-styles z-10 my-[calc(82px*0.5/2)] h-[calc(82px*0.57736720554273)] w-[82px] rounded-[calc(82px/50)] bg-b50 before:rounded-[calc(82px/50)] after:rounded-[calc(82px/50)]'>
                            <div className='r-hex3 absolute -left-0.5 -top-[19px] z-30 inline-block w-[86px] overflow-hidden'>
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
                    <img
                      src='./assets/images/verify-badge.png'
                      alt=''
                      className=''
                    />
                  </div>
                </div>
                <div className='max-[350px]:max-w-20'>
                  <div className='flex items-center justify-start gap-3'>
                    <h5 className='heading-5'>Mayme Cole</h5>
                    <p className='rounded-full bg-y300 px-2 py-1 text-xs font-medium'>
                      PRO
                    </p>
                  </div>
                  <p className='pt-2 text-n500'>Brooklyn, NY, USA</p>
                </div>
              </div>

              <div className='flex flex-wrap gap-2 px-6 text-[13px]'>
                <p className='rounded-full bg-r50 px-2 py-1 font-medium text-r300'>
                  $75 - $100/hr
                </p>
                <p className='rounded-full bg-g50 px-2 py-1 font-medium text-g400'>
                  TOP INDEPENDENT
                </p>
                <p className='rounded-full bg-v50 px-2 py-1 font-medium text-v300'>
                  AVAILABLE
                </p>
              </div>

              <div className='flex flex-wrap gap-2 px-6 text-n400'>
                <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium'>
                  <img src='./assets/images/settings_icon.png' alt='' />
                  <span>Handyman</span>
                </p>
                <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium'>
                  <img src='./assets/images/tap_icon.png' alt='' />
                  <span>Plumber </span>
                </p>
                <p className='rounded-xl bg-b50 px-3 py-2 font-medium'>+3</p>
              </div>

              <div className='relative'>
                <div className='swiper expert-slider-carousel group'>
                  <div className='swiper-wrapper'>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_4.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_1.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_2.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_3.png'
                        alt=''
                        className='w-full'
                      />
                    </div>

                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_5.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_6.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_2.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_3.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                  </div>
                  <div className='absolute left-2 right-2 top-28 z-10'>
                    <div className='flex w-full items-center justify-between'>
                      <button className='ara-prev flex -translate-x-12 items-center justify-center rounded-full border-2 border-r300 p-2 text-lg !leading-none text-r300 opacity-0 duration-500 hover:bg-r300 hover:text-white group-hover:translate-x-0 group-hover:opacity-100'>
                        <i className='ph-bold ph-caret-left'></i>
                      </button>
                      <button className='ara-next flex translate-x-12 items-center justify-center rounded-full border-2 border-r300 p-2 text-lg !leading-none text-r300 opacity-0 duration-500 hover:bg-r300 hover:text-white group-hover:translate-x-0 group-hover:opacity-100'>
                        <i className='ph-bold ph-caret-right'></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex items-center justify-start gap-2 px-6'>
                <a
                  href='./worker-profile.html'
                  className='relative w-full overflow-hidden rounded-full bg-n700 px-6 py-3 text-sm font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]'
                >
                  <div className='relative z-20 flex items-center justify-center gap-3'>
                    <i className='ph ph-paper-plane-tilt text-xl !leading-none'></i>
                    <span>Get in touch</span>
                  </div>
                </a>
                <button className='relative flex items-center justify-center rounded-full border p-3 text-xl !leading-none duration-500 hover:bg-y300'>
                  <i className='ph ph-heart'></i>
                </button>
              </div>
            </div>
            <div className='col-span-12 flex flex-col gap-6 rounded-3xl border border-n40 bg-n10 py-6 md:col-span-6 xl:col-span-4'>
              <div className='flex items-center justify-start gap-3 px-6'>
                <div className='relative max-md:overflow-hidden'>
                  <div className='hexagon-styles my-[calc(100px*0.5/2)] h-[calc(100px*0.57736720554273)] w-[100px] rounded-[calc(100px/36.75)] bg-b50 before:rounded-[calc(100px/18.75)] after:rounded-[calc(100px/18.75)]'>
                    <div className='absolute -top-[20px] left-[5px]'>
                      <div className='hexagon-styles z-10 my-[calc(90px*0.5/2)] h-[calc(90px*0.57736720554273)] w-[90px] rounded-[calc(90px/50)] bg-b300 before:rounded-[calc(90px/50)] after:rounded-[calc(90px/50)]'>
                        <div className='absolute -top-[18px] left-[4px] z-20'>
                          <div className='hexagon-styles z-10 my-[calc(82px*0.5/2)] h-[calc(82px*0.57736720554273)] w-[82px] rounded-[calc(82px/50)] bg-b50 before:rounded-[calc(82px/50)] after:rounded-[calc(82px/50)]'>
                            <div className='r-hex3 absolute -left-0.5 -top-[20px] z-30 inline-block w-[86px] overflow-hidden'>
                              <div className='r-hex-inner3'>
                                <div className='expertImg3 r-hex-inner-3 before:h-[86px] before:bg-cover'></div>
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
                  <div className='flex items-center justify-start gap-3'>
                    <h5 className='heading-5'>Clyde Gordon</h5>
                    <p className='rounded-full bg-y300 px-2 py-1 text-xs font-medium'>
                      PRO
                    </p>
                  </div>
                  <p className='pt-2 text-n500'>Brooklyn, NY, USA</p>
                </div>
              </div>

              <div className='flex flex-wrap gap-2 px-6 text-[13px]'>
                <p className='rounded-full bg-r50 px-2 py-1 font-medium text-r300'>
                  $75 - $100/hr
                </p>
                <p className='rounded-full bg-g50 px-2 py-1 font-medium text-g400'>
                  TOP INDEPENDENT
                </p>
                <p className='rounded-full bg-v50 px-2 py-1 font-medium text-v300'>
                  AVAILABLE
                </p>
              </div>

              <div className='flex flex-wrap gap-2 px-6 text-n400'>
                <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium'>
                  <img src='./assets/images/settings_icon.png' alt='' />
                  <span>Handyman</span>
                </p>
                <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium'>
                  <img src='./assets/images/tap_icon.png' alt='' />
                  <span>Plumber </span>
                </p>
                <p className='rounded-xl bg-b50 px-3 py-2 font-medium'>+3</p>
              </div>

              <div className='relative'>
                <div className='swiper expert-slider-carousel group'>
                  <div className='swiper-wrapper'>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_1.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_2.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_3.png'
                        alt=''
                        className='w-full'
                      />
                    </div>

                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_4.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_5.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_6.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_2.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_3.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                  </div>
                  <div className='absolute left-2 right-2 top-28 z-10'>
                    <div className='flex w-full items-center justify-between'>
                      <button className='ara-prev flex -translate-x-12 items-center justify-center rounded-full border-2 border-r300 p-2 text-lg !leading-none text-r300 opacity-0 duration-500 hover:bg-r300 hover:text-white group-hover:translate-x-0 group-hover:opacity-100'>
                        <i className='ph-bold ph-caret-left'></i>
                      </button>
                      <button className='ara-next flex translate-x-12 items-center justify-center rounded-full border-2 border-r300 p-2 text-lg !leading-none text-r300 opacity-0 duration-500 hover:bg-r300 hover:text-white group-hover:translate-x-0 group-hover:opacity-100'>
                        <i className='ph-bold ph-caret-right'></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex items-center justify-start gap-2 px-6'>
                <a
                  href='./worker-profile.html'
                  className='relative w-full overflow-hidden rounded-full bg-n700 px-6 py-3 text-sm font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]'
                >
                  <div className='relative z-20 flex items-center justify-center gap-3'>
                    <i className='ph ph-paper-plane-tilt text-xl !leading-none'></i>
                    <span>Get in touch</span>
                  </div>
                </a>
                <button className='relative flex items-center justify-center rounded-full border p-3 text-xl !leading-none duration-500 hover:bg-y300'>
                  <i className='ph ph-heart'></i>
                </button>
              </div>
            </div>
            <div className='col-span-12 flex flex-col gap-6 rounded-3xl border border-n40 bg-n10 py-6 md:col-span-6 xl:col-span-4'>
              <div className='flex items-center justify-start gap-3 px-6'>
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
                  <div className='flex items-center justify-start gap-3'>
                    <h5 className='heading-5'>Madge Dale</h5>
                    <p className='rounded-full bg-y300 px-2 py-1 text-xs font-medium'>
                      PRO
                    </p>
                  </div>
                  <p className='pt-2 text-n500'>Brooklyn, NY, USA</p>
                </div>
              </div>

              <div className='flex flex-wrap gap-2 px-6 text-[13px]'>
                <p className='rounded-full bg-r50 px-2 py-1 font-medium text-r300'>
                  $75 - $100/hr
                </p>
                <p className='rounded-full bg-g50 px-2 py-1 font-medium text-g400'>
                  TOP INDEPENDENT
                </p>
                <p className='rounded-full bg-v50 px-2 py-1 font-medium text-v300'>
                  AVAILABLE
                </p>
              </div>

              <div className='flex flex-wrap gap-2 px-6 text-n400'>
                <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium'>
                  <img src='./assets/images/settings_icon.png' alt='' />
                  <span>Handyman</span>
                </p>
                <p className='flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium'>
                  <img src='./assets/images/tap_icon.png' alt='' />
                  <span>Plumber </span>
                </p>
                <p className='rounded-xl bg-b50 px-3 py-2 font-medium'>+3</p>
              </div>

              <div className='relative'>
                <div className='swiper expert-slider-carousel group'>
                  <div className='swiper-wrapper'>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_6.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_1.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_2.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_3.png'
                        alt=''
                        className='w-full'
                      />
                    </div>

                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_4.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_5.png'
                        alt=''
                        className='w-full'
                      />
                    </div>

                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_2.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='./assets/images/expert_slider_img_3.png'
                        alt=''
                        className='w-full'
                      />
                    </div>
                  </div>
                  <div className='absolute left-2 right-2 top-28 z-10'>
                    <div className='flex w-full items-center justify-between'>
                      <button className='ara-prev flex -translate-x-12 items-center justify-center rounded-full border-2 border-r300 p-2 text-lg !leading-none text-r300 opacity-0 duration-500 hover:bg-r300 hover:text-white group-hover:translate-x-0 group-hover:opacity-100'>
                        <i className='ph-bold ph-caret-left'></i>
                      </button>
                      <button className='ara-next flex translate-x-12 items-center justify-center rounded-full border-2 border-r300 p-2 text-lg !leading-none text-r300 opacity-0 duration-500 hover:bg-r300 hover:text-white group-hover:translate-x-0 group-hover:opacity-100'>
                        <i className='ph-bold ph-caret-right'></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex items-center justify-start gap-2 px-6'>
                <a
                  href='./worker-profile.html'
                  className='relative w-full overflow-hidden rounded-full bg-n700 px-6 py-3 text-sm font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]'
                >
                  <div className='relative z-20 flex items-center justify-center gap-3'>
                    <i className='ph ph-paper-plane-tilt text-xl !leading-none'></i>
                    <span>Get in touch</span>
                  </div>
                </a>
                <button className='relative flex items-center justify-center rounded-full border p-3 text-xl !leading-none duration-500 hover:bg-y300'>
                  <i className='ph ph-heart'></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='sbp-30 container max-lg:pt-8'>
        <ul className='flex items-center justify-center gap-2 font-medium text-white sm:gap-3'>
          <li className='flex cursor-pointer items-center justify-center rounded-full bg-n900 p-[14px] text-xl duration-500 hover:bg-b300'>
            <i className='ph ph-caret-left'></i>
          </li>
          <li className='flex size-12 cursor-pointer items-center justify-center rounded-full bg-n900 duration-500 hover:bg-b300'>
            1
          </li>
          <li className='flex size-12 cursor-pointer items-center justify-center rounded-full bg-b300'>
            2
          </li>
          <li className='flex size-12 cursor-pointer items-center justify-center rounded-full bg-n900 duration-500 hover:bg-b300'>
            3
          </li>
          <li className='flex cursor-pointer items-center justify-center rounded-full bg-n900 p-[14px] text-xl duration-500 hover:bg-b300'>
            <i className='ph ph-caret-right'></i>
          </li>
        </ul>
      </section>

      <NewsletterSection />
      <FaqSection />
    </>
  )
}

export default FindWorkers
