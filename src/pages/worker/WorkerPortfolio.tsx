import { Link } from 'react-router'
import workerPortfolioImg1 from '../../assets/images/worker-portfolio-img-1.png'
import workerPortfolioImg2 from '../../assets/images/worker-portfolio-img-2.png'
import workerPortfolioImg3 from '../../assets/images/worker-portfolio-img-3.png'
import workerPortfolioImg4 from '../../assets/images/worker-portfolio-img-4.png'
import bigArrowTwo from '../../assets/images/big_arrow_2.png'

const WorkerPortfolio = () => {
  return (
    <>
      <header className='header headerAbsolute left-0 right-0 top-0 z-50'>
        <div className='max-xxl:container xxl:px-25'>
          <div className='text-s1 flex items-center justify-between py-6'>
            <div className='flex items-center justify-start gap-3 pb-1'>
              <button className='mobileMenuOpenButton text-3xl lg:hidden'>
                <i className='ph ph-list'></i>
              </button>
              <a href='javascript:void(0)'>
                <h2 className='heading-2 text-indigo-900'>Duclair Fopa</h2>
              </a>
            </div>

            <div className='flex items-center justify-between gap-6'>
              <ul className='flex items-center justify-start gap-2 font-medium max-md:hidden xxl:gap-6'>
                <li>
                  <a
                    href='#services'
                    className='rounded-lg px-2 py-3 duration-700 hover:text-pink-600'
                  >
                    SERVICES
                  </a>
                </li>
                <li>
                  <a
                    href='#about'
                    className='rounded-lg px-2 py-3 duration-700 hover:text-pink-600'
                  >
                    ABOUT
                  </a>
                </li>
                <li>
                  <a
                    href='#faq'
                    className='rounded-lg px-2 py-3 duration-700 hover:text-pink-600'
                  >
                    FAQ
                  </a>
                </li>
              </ul>
              <div className='flex items-center justify-between gap-3 font-medium'>
                <Link
                  to='/hire-me'
                  className='relative flex items-center justify-center overflow-hidden rounded-full bg-indigo-900 text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-pink-600 after:duration-700 hover:text-white hover:after:w-[calc(100%+2px)] max-xxl:size-11 max-xxl:!leading-none xxl:px-8 xxl:py-3'
                >
                  <span className='relative z-10 max-xxl:hidden'>
                    WORK WITH ME
                  </span>
                  <i className='ph-bold ph-plus text-xl xxl:hidden'></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <nav>
          <div className='mobileMenuBg mobileMenuBgClose fixed left-0 top-0 z-[998] h-full w-full bg-indigo-50 duration-700 lg:hidden'></div>
          <div className='mobileMenu mobileMenuClose fixed left-0 top-0 z-[999] flex h-full w-3/4 flex-col items-start justify-start gap-8 bg-indigo-900 text-white/80 duration-700 min-[500px]:w-1/2 lg:hidden lg:gap-20'>
            <ul className='flex w-full flex-col items-start gap-6 overflow-y-auto pb-10 pl-8 pt-24 text-lg sm:text-xl lg:gap-10'>
              <li>
                <a href='#services' className='menu-hover hover:text-pink-400'>
                  Services
                </a>
              </li>
              <li>
                <a href='#about' className='menu-hover hover:text-pink-400'>
                  About
                </a>
              </li>
              <li>
                <a href='#faq' className='menu-hover hover:text-pink-400'>
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <section className='stp-30 sbp-30 mt-[100px] bg-indigo-50'>
        <div
          className='container flex items-center justify-start gap-6 max-md:flex-col md:gap-10 lg:gap-20'
          id='about'
        >
          <div className='max-md:overflow-hidden'>
            <div className='hexagon-styles my-[calc(300px*0.5/2)] h-[calc(300px*0.57736720554273)] w-[300px] rounded-[calc(300px/36.75)] bg-indigo-100 before:rounded-[calc(300px/18.75)] after:rounded-[calc(300px/18.75)]'>
              <div className='absolute -top-[60px] left-4'>
                <div className='hexagon-styles z-10 my-[calc(270px*0.5/2)] h-[calc(270px*0.57736720554273)] w-[270px] rounded-[calc(270px/50)] bg-indigo-900 before:rounded-[calc(270px/50)] after:rounded-[calc(270px/50)]'>
                  <div className='absolute -top-[55px] left-2.5 z-20'>
                    <div className='hexagon-styles z-10 my-[calc(250px*0.5/2)] h-[calc(250px*0.57736720554273)] w-[250px] rounded-[calc(250px/50)] bg-indigo-100 before:rounded-[calc(250px/50)] after:rounded-[calc(250px/50)]'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='max-xl:overflow-hidden'>
            <p
              className='heading-6 text-pink-600'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              Spotless Solutions
            </p>
            <div data-aos='fade-left' data-aos-duration='1000'>
              <h2 className='heading-2 pt-5 text-indigo-900'>
                Duclair Fopa is a{' '}
                <span className='underline decoration-pink-600'>
                  Cleaning services
                </span>
              </h2>
              <div className='flex items-center gap-4 justify-start pt-2'>
                <img src={bigArrowTwo} alt='location arrow' />
                <h2 className='heading-2 text-indigo-900'>based in Cameroon</h2>
              </div>
            </div>
            <p
              className='pt-6 text-base font-medium text-n300 lg:text-xl'
              data-aos='fade-down'
              data-aos-duration='1000'
              data-aos-delay='0'
            >
              We are committed to providing top-quality cleaning services
              tailored to meet your specific needs. With years of experience in
              the industry, our team of professional cleaners is dedicated to
              delivering exceptional results,
            </p>
          </div>
        </div>
      </section>

      <section className=''>
        <div className='stp-30 sbp-30 container'>
          <p className='text-2xl font-medium text-n300'>
            Our cleaning services portfolio showcases our dedication to pristine
            spaces. From residential deep cleans to commercial sanitization, we
            deliver excellence. Trust us for thorough, efficient cleaning
            solutions tailored to your needs, ensuring a healthier and more
            inviting environment for all.
          </p>
          <p className='py-6 text-2xl font-medium text-n300'>
            With a proven track record of transforming spaces, our cleaning
            portfolio highlights our expertise in maintaining cleanliness and
            hygiene.
          </p>
        </div>

        <div className='stp-15 sbp-15 container flex flex-col items-center justify-center gap-8 border-y-2 border-n900'>
          <h2 className='heading-2'>Work with me</h2>
          <div className='max-w-[300px]'>
            <Link
              to='/chat'
              className='relative block w-full overflow-hidden rounded-full bg-n700 px-6 py-3 text-sm font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]'
            >
              <div className='relative z-20 flex items-center justify-center gap-3'>
                <span>Let's Chat</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className='stp-30 sbp-30'>
        <div className='container grid grid-cols-12 gap-6' id='services'>
          {[
            { img: workerPortfolioImg1, title: 'Restaurant Cleaning Services' },
            { img: workerPortfolioImg2, title: 'Home Cleaning Services' },
            { img: workerPortfolioImg3, title: 'Office Cleaning Services' },
            { img: workerPortfolioImg4, title: 'School Cleaning Services' },
          ].map((service, index) => (
            <div
              key={index}
              className='col-span-12 md:col-span-6'
              data-aos='fade-up'
              data-aos-duration='1000'
              data-aos-delay={index * 200}
            >
              <div className='overflow-hidden rounded-2xl border border-indigo-100 hover:shadow-lg transition-shadow duration-300'>
                <img src={service.img} alt={service.title} />
              </div>
              <div className='flex items-center justify-between mt-4'>
                <a
                  href='#'
                  className='heading-4 text-indigo-900 hover:text-pink-600 transition-colors'
                >
                  {service.title}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='stp-30 sbp-30 bg-indigo-50'>
        <div className='container'>
          <div className='swiper home3-testimonial-carousel'>
            <div className='swiper-wrapper'>
              {[1, 2, 3, 4].map((_, index) => (
                <div
                  key={index}
                  className='swiper-slide flex flex-col items-start justify-start'
                >
                  <div className='flex items-center justify-start gap-2 text-2xl text-pink-600'>
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className='ph-fill ph-star'></i>
                    ))}
                  </div>
                  <p className='pt-6 text-lg font-medium text-slate-600'>
                    "Incredibly impressed on-demand cleaning service. Prompt,
                    thorough and left home sparkling. A game-changer for busy
                    schedules!"
                  </p>
                  <div className='flex items-center justify-start gap-8 pt-8'>
                    <div className='flex items-center justify-start gap-4 border-r border-indigo-200 pr-8'>
                      <div className='rounded-full bg-indigo-200 p-[2px]'>
                        <img
                          src='./assets/images/review_people_2.png'
                          alt=''
                          className='rounded-full'
                        />
                      </div>
                      <div>
                        <p className='heading-5 text-indigo-900'>Devon Lane</p>
                        <p className='font-medium text-slate-500'>
                          @iamsedaoi&wv
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='stp-30 sbp-30' id='faq'>
        <div className='container grid grid-cols-12 gap-6 xl:gap-10'>
          <div className='col-span-12 rounded-3xl border border-indigo-100 p-4 sm:px-10 sm:py-9 lg:col-span-5'>
            <p className='heading-6 text-pink-600'>FAQ</p>
            <h2 className='heading-2 pb-4 pt-3 xl:pb-6 text-indigo-900'>
              Your questions <span className='text-pink-600'>answered.</span>
            </h2>
            <div className='mb-6 rounded-3xl border border-indigo-100 p-4 sm:p-6'>
              <div className='flex items-center justify-start gap-3'>
                <div className='flex items-center justify-center rounded-2xl border border-indigo-100 p-3 text-pink-600 sm:p-5'>
                  <i className='ph-fill ph-question text-4xl'></i>
                </div>
              </div>
            </div>

            <Link
              to='/contact'
              className='relative flex items-center justify-center overflow-hidden rounded-xl bg-indigo-900 px-4 py-3 font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-xl after:bg-pink-600 after:duration-700 hover:text-white hover:after:w-[calc(100%+2px)] sm:px-8'
            >
              <span className='relative z-10'>Get In Touch</span>
            </Link>
          </div>

          <div className='col-span-12 flex flex-col items-start justify-center gap-6 rounded-3xl border border-indigo-100 p-4 sm:p-10 lg:col-span-7'>
            {[
              { question: 'What types of services do you offer?', delay: 0 },
              { question: 'What is your payment methods?', delay: 200 },
              { question: 'How long does it takes?', delay: 400 },
              { question: 'When is your off time?', delay: 600 },
            ].map((faq, index) => (
              <div
                key={index}
                className='faqItem overflow-hidden rounded-2xl border border-indigo-100 px-4 py-3'
                data-aos='fade-up'
                data-aos-delay={faq.delay}
                data-aos-duration='800'
              >
                <div className='flex items-center justify-between max-sm:gap-2'>
                  <p className='cursor-pointer text-base font-medium sm:text-lg text-indigo-900'>
                    {faq.question}
                  </p>
                  <div className='faqIcon faqIconNotRotate flex items-center justify-center rounded-full bg-indigo-900 p-2 text-xl !leading-none text-white duration-700 sm:p-3 hover:bg-pink-600'>
                    <i className='ph ph-caret-right'></i>
                  </div>
                </div>
                <div className='faqAnswer faqClose duration-700'>
                  <p className='pr-8 pt-3 text-slate-600'>
                    Our cancellation policy varies depending on the service and
                    service provider. Please check the terms before booking.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='stp-30 sbp-30 bg-indigo-900'>
        <div className='container flex flex-col items-center justify-center text-white'>
          <h2 className='heading-2'>Let's Collaborate</h2>
          <div className='flex items-center justify-between gap-3 pt-8 font-medium'>
            <Link
              to='/hire-me'
              className='relative flex items-center justify-center overflow-hidden rounded-full bg-pink-600 px-8 py-3 text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-pink-400 after:duration-700 hover:text-white hover:after:w-[calc(100%+2px)]'
            >
              <span className='relative z-10'>WORK WITH ME</span>
            </Link>
          </div>
          <ul className='stp-15 sbp-15 flex items-center justify-center gap-10'>
            <li>
              <a
                href='#services'
                className='hover:text-pink-400 transition-colors'
              >
                Services
              </a>
            </li>
            <li>
              <a
                href='#contact'
                className='hover:text-pink-400 transition-colors'
              >
                Contact
              </a>
            </li>
            <li>
              <a href='#faq' className='hover:text-pink-400 transition-colors'>
                FAQ
              </a>
            </li>
          </ul>
          <div className='flex items-center justify-center gap-3 text-2xl'>
            {['facebook', 'twitch', 'instagram', 'linkedin'].map(
              (social, index) => (
                <a
                  key={index}
                  className='group relative'
                  href='javascript:void(0)'
                >
                  <i
                    className={`ph ph-${social}-logo flex items-center justify-center rounded-full border border-indigo-300 p-4 duration-500 hover:border-pink-400 hover:text-pink-400`}
                  ></i>
                  {/* Hover effect lines */}
                  <div className='absolute right-1/2 top-1 h-0 w-px bg-pink-400 duration-500 group-hover:h-2'></div>
                  <div className='absolute right-1 top-1/2 h-px w-0 bg-pink-400 duration-500 group-hover:w-2'></div>
                  <div className='absolute bottom-1 right-1/2 h-0 w-px bg-pink-400 duration-500 group-hover:h-2'></div>
                  <div className='absolute left-1 top-1/2 h-px w-0 bg-pink-400 duration-500 group-hover:w-2'></div>
                </a>
              )
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default WorkerPortfolio
