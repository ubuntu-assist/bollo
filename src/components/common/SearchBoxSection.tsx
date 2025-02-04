const SearchBoxSection = () => {
  return (
    <section className='sbp-30'>
      <div className='container -mt-8 md:-mt-16'>
        <div className='relative z-20 w-full rounded-3xl border border-[#1B3B86]/10 bg-white p-4 sm:p-8 shadow-sm'>
          <form className='flex items-center justify-between text-lg font-medium max-sm:text-sm'>
            <div className='flex items-center justify-start gap-4 sm:gap-10'>
              {/* Location Selector */}
              <div
                className='relative border-r border-[#1B3B86]/10 pr-4 sm:pr-10'
                id='locationModalOpenButton'
              >
                <div className='flex cursor-pointer items-center justify-between gap-2 text-[#1B3B86] hover:text-[#E31C79] transition-colors'>
                  <i className='ph ph-map-pin'></i>
                  <span className='locationText'>
                    <span className='max-[400px]:hidden'>Select</span> Location
                  </span>
                </div>

                {/* Location Dropdown */}
                <div
                  id='locationModal'
                  className='modalClose absolute left-0 top-10 w-[150px] origin-top rounded-3xl border border-[#1B3B86]/10 bg-white py-3 text-base duration-700 max-sm:text-sm sm:-left-8 sm:w-[220px] sm:py-5 shadow-lg'
                >
                  <input
                    type='text'
                    className='mx-2 w-[90%] rounded-xl border border-[#1B3B86]/10 px-2 py-2 outline-none placeholder:text-gray-600 focus:border-[#E31C79] transition-colors sm:mx-3 sm:px-3'
                    placeholder='Search'
                  />
                  {['Alaska', 'New York', 'California', 'Washington'].map(
                    (location) => (
                      <p
                        key={location}
                        className='locationItem cursor-pointer px-6 py-2 duration-500 hover:bg-[#1B3B86] hover:text-white'
                      >
                        {location}
                      </p>
                    )
                  )}
                </div>
              </div>

              {/* Service Selector */}
              <div
                className='relative flex cursor-pointer items-center justify-between gap-2'
                id='servicesModalOpenButton'
              >
                <span className='serviceText text-[#1B3B86] hover:text-[#E31C79] transition-colors'>
                  <span className='max-[400px]:hidden'>Select your</span>{' '}
                  service
                </span>
                <i className='ph ph-caret-down text-[#1B3B86]'></i>

                {/* Services Dropdown */}
                <div
                  id='servicesModal'
                  className='modalClose absolute right-0 top-10 w-[150px] origin-top rounded-3xl border border-[#1B3B86]/10 bg-white py-3 text-sm duration-700 shadow-lg sm:-left-8 sm:w-[220px] sm:py-5 sm:text-base'
                >
                  {['Handyman', 'Cleaning', 'Renovation', 'Photography'].map(
                    (service) => (
                      <p
                        key={service}
                        className='serviceItem cursor-pointer px-3 py-2 duration-500 hover:bg-[#1B3B86] hover:text-white sm:px-6'
                      >
                        {service}
                      </p>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Search Button */}
            <button className='relative ml-2 flex items-center justify-center overflow-hidden rounded-full bg-[#1B3B86] text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-[#E31C79] after:duration-700 hover:after:w-[calc(100%+2px)] max-xxl:!leading-none max-md:size-11 md:px-8 md:py-3'>
              <i className='ph ph-magnifying-glass text-base !leading-none relative z-10 sm:text-xl md:hidden'></i>
              <span className='relative z-10 max-md:hidden'>Search</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default SearchBoxSection
