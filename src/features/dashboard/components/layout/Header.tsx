import { Link } from 'react-router'
import logo from '../../../../assets/images/logo.png'
import userProfile from '../../../../assets/images/people_small1.png'

interface NavItem {
  title: string
  path: string
}

interface NotificationItem {
  message: string
  timeAgo: string
}

const Header = () => {
  const navItems: NavItem[] = [
    { title: 'Dashboard', path: './index.html' },
    { title: 'Services', path: '/dashboard/services' },
    { title: 'Payout History', path: './payment-details.html' },
    { title: 'Wishlist', path: '/dashboard/wishlist' },
    { title: 'Review', path: './reviews.html' },
  ]

  const notifications: NotificationItem[] = [
    { message: 'Notification one', timeAgo: '7 hours ago' },
    { message: 'Notification one', timeAgo: '7 hours ago' },
    { message: 'Notification one', timeAgo: '7 hours ago' },
    { message: 'Notification one', timeAgo: '7 hours ago' },
  ]

  return (
    <>
      <header className='header headerAbsolute left-0 right-0 top-0 z-50 bg-white'>
        <div className='4xl:large-container max-4xl:container'>
          <div className='text-s1 flex items-center justify-between py-6'>
            {/* Logo Section */}
            <div className='flex items-center justify-start gap-3 pb-1'>
              <button className='mobileMenuOpenButton text-3xl text-[#1B3B86] lg:hidden'>
                <i className='ph ph-list'></i>
              </button>
              <Link to='/'>
                <img src={logo} alt='Bollo logo' className='w-auto h-14' />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className='max-lg:hidden'>
              <ul className='flex items-center justify-center gap-2 font-medium xxl:gap-6'>
                {navItems.map((item) => (
                  <li key={item.title}>
                    <a
                      href={item.path}
                      className='dashboardMenu rounded-full px-4 py-3 text-gray-600 transition-colors duration-300 hover:bg-[#1B3B86] hover:text-white'
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right Section */}
            <div className='flex items-center justify-end gap-2 sm:gap-6'>
              {/* Notification Bell */}
              <div
                className='relative flex cursor-pointer items-center justify-center rounded-full bg-[#1B3B86]/5 p-3 text-[#1B3B86] hover:bg-[#1B3B86]/10 transition-colors'
                id='notification'
              >
                <i className='ph ph-bell text-2xl !leading-none'></i>
                <span className='absolute right-3 top-3 rounded-full bg-[#E31C79]/10 p-px'>
                  <span className='block size-2.5 rounded-full bg-[#E31C79]'></span>
                </span>

                {/* Notification Dropdown */}
                <div
                  className='modalClose absolute right-0 top-12 w-[230px] origin-top-right rounded-2xl border border-[#1B3B86]/10 bg-white py-4 shadow-lg duration-500'
                  id='notificationModal'
                >
                  <p className='px-4 pb-3 text-lg font-semibold text-gray-900'>
                    Notification
                  </p>
                  <div className='flex w-full flex-col items-start justify-start gap-4 border-y border-[#1B3B86]/10 p-3'>
                    {notifications.map((note, index) => (
                      <div
                        key={index}
                        className='flex items-start justify-start gap-2'
                      >
                        <i className='ph ph-bell flex items-center justify-center rounded-full bg-[#1B3B86] p-2 text-white'></i>
                        <div>
                          <p className='text-gray-900'>{note.message}</p>
                          <p className='text-sm text-gray-500'>
                            {note.timeAgo}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className='px-4 pt-3 text-lg font-semibold text-[#1B3B86] hover:text-[#E31C79] cursor-pointer transition-colors'>
                    See All Notification
                  </p>
                </div>
              </div>

              {/* Profile Menu */}
              <div
                className='relative cursor-pointer rounded-full bg-[#1B3B86]/5 p-px hover:bg-[#1B3B86]/10 transition-colors'
                id='profileIcon'
              >
                <img
                  src={userProfile}
                  className='size-11 rounded-full'
                  alt='User profile'
                />
                <div
                  className='modalClose absolute right-0 top-12 w-[200px] origin-top-right rounded-2xl border border-[#1B3B86]/10 bg-white py-4 shadow-lg duration-500'
                  id='profileModal'
                >
                  <ul className='flex flex-col gap-3 pl-4'>
                    {['Profile', 'Edit Profile', 'Settings', 'Logout'].map(
                      (item) => (
                        <li
                          key={item}
                          className='font-medium text-gray-600 hover:text-[#E31C79] transition-colors'
                        >
                          <Link to={`/${item.toLowerCase().replace(' ', '-')}`}>
                            {item}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <nav className='lg:hidden'>
          <div className='mobileMenuBg mobileMenuBgClose fixed left-0 top-0 z-[998] h-full w-full bg-[#1B3B86]/5 duration-700'></div>

          <div className='mobileMenu mobileMenuClose fixed left-0 top-0 z-[999] flex h-full w-3/4 flex-col items-start justify-start gap-8 bg-[#1B3B86] text-white/90 duration-700 min-[500px]:w-1/2'>
            <div className='fixed top-0 flex w-full items-center justify-between bg-[#1B3B86] p-4 sm:p-8'>
              <Link to='/'>
                <img src={logo} alt='logo' className='w-[150px]' />
              </Link>
              <button className='mobileMenuCloseButton text-3xl text-white hover:text-[#E31C79] transition-colors'>
                <i className='ph ph-x'></i>
              </button>
            </div>

            <ul className='flex w-full flex-col items-start gap-6 overflow-y-auto pb-10 pl-8 pt-24 text-lg sm:text-xl lg:gap-10'>
              {navItems.map((item) => (
                <li key={item.title}>
                  <a
                    href={item.path}
                    className='text-white/90 hover:text-[#E31C79] transition-colors'
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
      <div className='h-[160px]'></div>
    </>
  )
}

export default Header
