import peopleSmall1 from '../../assets/images/people_small1.png'
import peopleSmall2 from '../../assets/images/people_small2.png'
import peopleSmall3 from '../../assets/images/people_small3.png'

const ReviewSection = () => {
  return (
    <section className='stp-30 sbp-30 bg-gray-50'>
      <div className='container'>
        {/* Header Section */}
        <div className='flex items-center justify-between max-sm:flex-col max-sm:items-start sm:max-lg:pb-10'>
          <div className='relative flex items-center justify-start gap-4 max-sm:mb-16 lg:gap-20'>
            {/* Rating Score */}
            <p className='text-7xl font-extrabold text-[#1B3B86] sm:text-[100px] lg:text-[180px]'>
              4.9
            </p>
            {/* Star Rating */}
            <div className='flex items-center justify-start text-2xl text-[#E31C79] max-lg:-mt-8 lg:pb-12'>
              {[...Array(5)].map((_, index) => (
                <i key={index} className='ph-fill ph-star'></i>
              ))}
            </div>

            {/* Google Reviews Box */}
            <div className='box-shadow-3 absolute -bottom-12 flex items-center justify-start gap-3 rounded-r-3xl rounded-bl-3xl border border-[#1B3B86]/10 bg-[#1B3B86]/5 px-8 py-3 sm:-bottom-12 sm:left-32 sm:right-0 sm:w-[250px] lg:-bottom-2 lg:left-64 lg:px-8 lg:py-5 xl:w-[300px]'>
              <p className='heading-3 flex items-center justify-start font-bold text-[#1B3B86]'>
                <span className='odometer' data-odometer-final='1475'>
                  0
                </span>
                +
              </p>
              <p className='max-w-[50px] font-medium text-gray-600 sm:mt-8 sm:max-w-[82px]'>
                Google Reviews
              </p>
            </div>
          </div>

          <h2 className='heading-2 text-gray-900 sm:max-w-[200px] lg:max-w-[240px]'>
            Our Customers love us
          </h2>
        </div>

        {/* Review Cards Grid */}
        <div className='stp-15 grid grid-cols-12 gap-6'>
          {/* Review Card 1 */}
          <div className='col-span-12 flex flex-col gap-6 rounded-xl border border-[#1B3B86]/10 bg-[#E31C79]/5 p-6 md:col-span-6 lg:col-span-4 xl:gap-10 xl:p-10'>
            <div className='flex flex-col justify-start'>
              <i className='ph-fill ph-quotes w-[40px] rotate-180 text-4xl text-[#1B3B86]'></i>
              <div className='flex items-center justify-start gap-1 pt-5 text-xl text-[#E31C79]'>
                {[...Array(5)].map((_, index) => (
                  <i key={index} className='ph-fill ph-star'></i>
                ))}
              </div>
            </div>
            <p className='text-lg text-gray-600'>
              I was amazed at the efficiency of arrived promptly and completed
              the task with skill. I'm a satisfied customer and will definitely
              use this service again.
            </p>
            <div className='flex items-center justify-start gap-4'>
              <img src={peopleSmall1} alt='Reviewer' className='rounded-full' />
              <div>
                <p className='heading-5 text-[#1B3B86]'>Leslie Alexander</p>
                <p className='font-medium text-gray-500'>@iamexample</p>
              </div>
            </div>
          </div>

          {/* Review Card 2 */}
          <div className='col-span-12 flex flex-col gap-6 rounded-xl border border-[#1B3B86]/10 bg-[#1B3B86]/5 p-6 md:col-span-6 lg:col-span-4 xl:gap-10 xl:p-10'>
            <div className='flex flex-col justify-start'>
              <i className='ph-fill ph-quotes w-[40px] rotate-180 text-4xl text-[#1B3B86]'></i>
              <div className='flex items-center justify-start gap-1 pt-5 text-xl text-[#E31C79]'>
                {[...Array(5)].map((_, index) => (
                  <i key={index} className='ph-fill ph-star'></i>
                ))}
              </div>
            </div>
            <p className='text-lg text-gray-600'>
              I was amazed at the efficiency of the platform. The handyman
              arrived promptly and completed the task with skill. I'm a
              satisfied customer again.
            </p>
            <div className='flex items-center justify-start gap-4'>
              <img src={peopleSmall2} alt='Reviewer' className='rounded-full' />
              <div>
                <p className='heading-5 text-[#1B3B86]'>Ronald Richards</p>
                <p className='font-medium text-gray-500'>@iamsedaoi&wv</p>
              </div>
            </div>
          </div>

          {/* Review Card 3 */}
          <div className='col-span-12 flex flex-col gap-6 rounded-xl border border-[#1B3B86]/10 bg-[#E31C79]/5 p-6 md:col-span-6 lg:col-span-4 xl:gap-10 xl:p-10'>
            <div className='flex flex-col justify-start'>
              <i className='ph-fill ph-quotes w-[40px] rotate-180 text-4xl text-[#1B3B86]'></i>
              <div className='flex items-center justify-start gap-1 pt-5 text-xl text-[#E31C79]'>
                {[...Array(5)].map((_, index) => (
                  <i key={index} className='ph-fill ph-star'></i>
                ))}
              </div>
            </div>
            <p className='text-lg text-gray-600'>
              Incredibly impressed on-demand cleaning service. Prompt, thorough
              and left home sparkling. A game-changer for busy schedules! Uber
              the app's convenience
            </p>
            <div className='flex items-center justify-start gap-4'>
              <img src={peopleSmall3} alt='Reviewer' className='rounded-full' />
              <div>
                <p className='heading-5 text-[#1B3B86]'>Leslie Alexander</p>
                <p className='font-medium text-gray-500'>@iamexample</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReviewSection
