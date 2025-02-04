import getHelpIcon from '../../assets/images/get_help_icon.png'

const GetHelpTodaySection = () => {
  return (
    <section className='stp-30'>
      <div className='relative flex items-center justify-center'>
        <h2 className='heading-2 relative font-bold text-n900'>
          Get help <span className='text-b300 underline'>Today</span>
          <img
            src={getHelpIcon}
            alt=''
            className='absolute -bottom-24 right-0 z-20 sm:-bottom-20 sm:-right-28'
          />
        </h2>
      </div>

      <div className='overflow-hidden'>
        <div className='tags-container relative'></div>
      </div>
    </section>
  )
}

export default GetHelpTodaySection
