import { Link } from 'react-router'
import logo from '../../assets/images/logo.png'
import {
  IconBrandLinkedin,
  IconBrandX,
  IconFileText,
  IconShieldLock,
} from '@tabler/icons-react'

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

      {/* Newsletter Section */}
      <div className='border-y border-white/20'>
        <div className='container py-8 flex justify-center'>
          <div className='flex flex-col items-center md:flex-row md:items-center md:justify-center gap-5'>
            <p className='text-lg font-medium'>Subscribe to our newsletter</p>
            <div className='rounded-full border-2 border-white'>
              <input
                type='text'
                className='bg-transparent px-2 outline-none placeholder:text-white/80 max-[400px]:w-[200px] min-[400px]:px-4 lg:px-8'
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
        {/* Terms & Privacy Links */}
        <div className='flex items-center justify-start gap-4'>
          <Link
            to='/terms-and-agreements'
            className='flex items-center gap-2 hover:text-[#E31C79] transition-colors'
          >
            <IconFileText size={20} />
            <span>Terms & Agreements</span>
          </Link>
          <Link
            to='/privacy-policy'
            className='flex items-center gap-2 hover:text-[#E31C79] transition-colors'
          >
            <IconShieldLock size={20} />
            <span>Privacy Policy</span>
          </Link>
        </div>

        {/* Social Links with Tabler Icons */}
        <div className='flex items-center justify-center gap-5'>
          <a
            href='#'
            className='hover:text-[#E31C79] transition-colors'
            aria-label='X'
          >
            <IconBrandX size={28} stroke={1.5} />
          </a>
          <a
            href='#'
            className='hover:text-[#E31C79] transition-colors'
            aria-label='Instagram'
          >
            <IconBrandLinkedin size={28} stroke={1.5} />
          </a>
        </div>

        <p>Copyright @ {currentYear} Bollo</p>
      </div>
    </footer>
  )
}

export default Footer
