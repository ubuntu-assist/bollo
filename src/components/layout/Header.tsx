import { Link } from 'react-router'
import logo from '../../assets/images/logo.png'

const Header = () => {
  return (
    <header className='header headerAbsolute left-0 right-0 top-0 z-50'>
      <div className='max-xxl:container xxl:px-25'>
        <div className='text-s1 flex items-center justify-between py-6'>
          {/* Logo and Mobile Menu */}
          <div className='flex items-center gap-3'>
            <button className='lg:hidden text-[#1B3B86]'>
              <i className='ph-bold ph-list text-4xl'></i>
            </button>
            <Link to='/'>
              <img src={logo} alt='Bollo logo' className='h-14 w-auto' />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden lg:block'>
            <ul className='flex items-center gap-6 font-medium'>
              {[
                { name: 'Home', type: 'link', to: '/' },
                { name: 'Services', type: 'link', to: '/services' },
                {
                  name: 'Workers',
                  type: 'dropdown',
                  options: ['Option 1', 'Option 2'],
                },
                {
                  name: 'Pages',
                  type: 'dropdown',
                  options: ['Option 1', 'Option 2'],
                },
              ].map((item) => (
                <li key={item.name} className='group relative'>
                  {item.type === 'link' ? (
                    <Link
                      to={item.to!}
                      className='block px-2 py-3 text-[#1B3B86] hover:text-[#E31C79] transition-colors'
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <>
                      <div className='flex items-center gap-1 px-2 py-3 text-[#1B3B86] hover:text-[#E31C79] transition-colors'>
                        {item.name}
                        <i className='ph ph-caret-down transition-transform group-hover:rotate-180'></i>
                      </div>
                      <ul className='invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-0 top-full w-48 bg-[#1B3B86] rounded-lg py-4 transition-all'>
                        {item.options!.map((option) => (
                          <li key={option}>
                            <Link
                              to='#'
                              className='block px-6 py-2 text-white hover:text-[#E31C79] transition-colors'
                            >
                              {option}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Action Buttons */}
          <div className='flex items-center gap-6'>
            <div className='hidden sm:flex items-center gap-6'>
              <Link
                to='/sign-up'
                className='text-[#1B3B86] hover:text-[#E31C79] transition-colors'
              >
                Sign up
              </Link>
              <Link
                to='/signin'
                className='text-[#1B3B86] hover:text-[#E31C79] transition-colors'
              >
                Sign in
              </Link>
            </div>

            <div className='flex items-center gap-3'>
              <Link
                to='/post-task'
                className='flex items-center justify-center h-11 px-8 rounded-full bg-[#1B3B86] text-white hover:bg-[#E31C79] transition-colors'
              >
                <span className='hidden xxl:block'>Post a Task</span>
                <i className='ph-bold ph-plus text-xl xxl:hidden'></i>
              </Link>

              <Link
                to='/become-tasker'
                className='hidden xl:flex items-center px-8 py-3 rounded-full border-2 border-[#1B3B86] text-[#1B3B86] hover:bg-[#E31C79] hover:border-[#E31C79] hover:text-white transition-colors'
              >
                Become a Tasker
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className='lg:hidden'>
        <div
          className='fixed inset-0 bg-black/50 invisible opacity-0'
          id='mobile-overlay'
        ></div>
        <div className='fixed top-0 left-0 h-full w-3/4 -translate-x-full bg-[#1B3B86] text-white transition-transform'>
          {/* Mobile menu content here */}
          <div className='p-6'>
            <button className='text-white mb-8'>
              <i className='ph ph-x text-2xl'></i>
            </button>
            {/* Mobile menu items */}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
