import { Link } from 'react-router'
import { useState } from 'react'
import logo from '../../assets/images/logo.png'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  const navItems = [
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
  ]

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  const toggleSubmenu = (name: string) => {
    setActiveSubmenu(activeSubmenu === name ? null : name)
  }

  return (
    <header className='header headerAbsolute left-0 right-0 top-0 z-50'>
      <div className='max-xxl:container xxl:px-25'>
        <div className='text-s1 flex items-center justify-between py-6'>
          <div className='flex items-center gap-3'>
            <button
              className='lg:hidden text-[#1B3B86]'
              onClick={toggleMobileMenu}
            >
              <i className='ph-bold ph-list text-4xl'></i>
            </button>
            <Link to='/'>
              <img src={logo} alt='Bollo logo' className='h-14 w-auto' />
            </Link>
          </div>

          <nav className='hidden lg:block'>
            <ul className='flex items-center gap-6 font-medium'>
              {navItems.map((item) => (
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

          <div className='flex items-center gap-6'>
            <div className='hidden sm:flex items-center gap-6'>
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
      <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div
          className={`fixed inset-0 bg-black/50 transition-opacity ${
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          onClick={toggleMobileMenu}
        />
        <div
          className={`fixed top-0 left-0 h-full w-3/4 bg-[#1B3B86] text-white transition-transform ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className='p-6'>
            <button className='text-white mb-8' onClick={toggleMobileMenu}>
              <i className='ph ph-x text-2xl'></i>
            </button>

            <ul className='space-y-4'>
              {navItems.map((item) => (
                <li key={item.name}>
                  {item.type === 'link' ? (
                    <Link
                      to={item.to!}
                      className='block py-2 text-white hover:text-[#E31C79] transition-colors'
                      onClick={toggleMobileMenu}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <div>
                      <button
                        className='flex items-center justify-between w-full py-2 text-white hover:text-[#E31C79] transition-colors'
                        onClick={() => toggleSubmenu(item.name)}
                      >
                        {item.name}
                        <i
                          className={`ph ph-caret-down transition-transform ${
                            activeSubmenu === item.name ? 'rotate-180' : ''
                          }`}
                        ></i>
                      </button>
                      <ul
                        className={`pl-4 space-y-2 overflow-hidden transition-all ${
                          activeSubmenu === item.name ? 'max-h-40' : 'max-h-0'
                        }`}
                      >
                        {item.options!.map((option) => (
                          <li key={option}>
                            <Link
                              to='#'
                              className='block py-2 text-white/80 hover:text-[#E31C79] transition-colors'
                              onClick={toggleMobileMenu}
                            >
                              {option}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
