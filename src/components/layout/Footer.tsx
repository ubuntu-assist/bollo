import logo from '../../assets/images/logo.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='bg-[#1B3B86] text-white'>
      <div className='container'>
        {/* Navigation Links */}
        <div className='flex items-center justify-between gap-6 py-10 text-base font-medium max-lg:flex-col sm:text-lg lg:py-20 xl:text-xl'>
          <ul className='flex items-center justify-start gap-4 sm:gap-6 lg:gap-10'>
            {['Home', 'About Us', 'FAQ'].map((item) => (
              <li key={item}>
                <a
                  className='duration-500 hover:text-[#E31C79]'
                  href={`./${item.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <a href='./index'>
            <img src={logo} alt='Bollo logo' className='w-auto h-16' />
          </a>

          <ul className='flex items-center justify-start gap-4 sm:gap-6 lg:gap-10'>
            {['Find Work', 'Blog', 'Contact Us'].map((item) => (
              <li key={item}>
                <a
                  className='duration-500 hover:text-[#E31C79]'
                  href={`./${item.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Stats Section */}
      <div className='border-y border-white/20'>
        <div className='flex items-center justify-between lg:container max-xl:py-8 max-lg:flex-col max-lg:gap-6'>
          {/* Customer Stats */}
          <div>
            <p className='display-3 xl:display-2 text-center'>
              <span className='odometer' data-odometer-final='25'>
                0
              </span>
              k
            </p>
            <p className='max-w-[250px] text-center text-base font-medium xl:text-lg'>
              Customers are satisfied with our work
            </p>
          </div>

          {/* Website Stats */}
          <div className='border-white/20 px-6 py-12 max-lg:w-full max-lg:border-y lg:border-x xl:p-20 xxl:p-30'>
            <p className='display-3 xl:display-2 text-center'>
              <span className='odometer' data-odometer-final='7'>
                0
              </span>
              k+
            </p>
            <p className='mx-auto max-w-[250px] text-center text-base font-medium max-lg:flex xl:text-lg'>
              Websites are already existing work
            </p>
          </div>

          {/* Newsletter */}
          <div className='flex flex-col items-start justify-start gap-5 sm:pl-4'>
            <p className='text-lg font-medium'>Subscribe to our newsletter</p>
            <div className='rounded-full border-2 border-white'>
              <input
                type='text'
                className='bg-transparent px-2 outline-none placeholder:text-white/80 focus:ring-2 focus:ring-[#E31C79] max-[400px]:w-[200px] min-[400px]:px-4 lg:px-8'
                placeholder='Enter Email'
              />
              <button className='rounded-full border-2 border-[#E31C79] bg-[#E31C79] px-2 py-3 font-medium text-white transition-colors hover:bg-[#E31C79]/90 sm:px-4 sm:py-4 xl:px-8'>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='container flex items-center justify-between gap-6 py-8 font-medium max-md:flex-col'>
        <div className='flex items-center justify-start gap-1'>
          <p>Designed By</p>
          <a
            target='_blank'
            href='https://www.moock.io'
            className='text-[#E31C79] hover:text-[#E31C79]/80 underline'
          >
            Mo'ock
          </a>
        </div>

        {/* Social Links */}
        <div className='flex items-center justify-center gap-5 text-2xl'>
          {['facebook', 'twitch', 'instagram'].map((platform) => (
            <a
              key={platform}
              href='#'
              className='hover:text-[#E31C79] transition-colors'
            >
              <i className={`ph ph-${platform}-logo`}></i>
            </a>
          ))}
        </div>

        <p>Copyright @ {currentYear} Bollo</p>
      </div>
    </footer>
  )
}

export default Footer
