'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router'
import { ChevronDown, ChevronRight, X, Menu, Plus } from 'lucide-react'
import logo from '../../assets/images/logo.png'

// Interfaces for TypeScript
interface NavOption {
  title: string
  url: string
}

interface NavItem {
  name: string
  type: 'link' | 'dropdown'
  to?: string
  options?: NavOption[]
}

interface Language {
  code: string
  name: string
  flag: string
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [currentLanguage, setCurrentLanguage] = useState<string>('en')

  // Define languages for language selector
  const languages: Language[] = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
  ]

  // Navigation items
  const navItems: NavItem[] = [
    { name: 'Home', type: 'link', to: '/' },
    {
      name: 'Services',
      type: 'dropdown',
      options: [
        { title: 'All Services', url: '/services' },
        { title: 'Browse Tasks', url: '/browse-tasks' },
      ],
    },
    {
      name: 'Workers',
      type: 'dropdown',
      options: [
        { title: 'Find Workers', url: '/find-workers' },
        { title: 'Worker Directory', url: '/worker-directory' },
      ],
    },
    {
      name: 'Pages',
      type: 'dropdown',
      options: [
        { title: 'About Us', url: '/about' },
        { title: 'Contact', url: '/contact' },
      ],
    },
  ]

  // Detect scroll for navbar styling changes
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // Toggle submenu in mobile view
  const toggleSubmenu = (name: string) => {
    setActiveSubmenu(activeSubmenu === name ? null : name)
  }

  // Handle language change
  const handleLanguageChange = (code: string) => {
    setCurrentLanguage(code)
    // Here you would implement language change logic
  }

  // Get current language
  const getCurrentLanguage = () => {
    return languages.find((lang) => lang.code === currentLanguage)
  }

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-4'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className='container mx-auto px-4'>
          <div
            className={`bg-white/80 backdrop-blur-md rounded-full border border-gray-200 flex items-center justify-between px-5 py-2 ${
              scrolled ? 'shadow-lg' : ''
            }`}
          >
            <div className='flex items-center'>
              {/* Mobile Menu Button (LEFT side) */}
              <button
                onClick={toggleMenu}
                className='lg:hidden text-[#1B3B86] mr-3 w-10 h-10 flex justify-center items-center rounded-full bg-[#1B3B86]/10 hover:bg-[#1B3B86]/20 transition-colors duration-300'
                aria-label='Toggle menu'
              >
                {isOpen ? (
                  <X className='h-5 w-5' />
                ) : (
                  <Menu className='h-5 w-5' />
                )}
              </button>

              {/* Logo */}
              <Link to='/' className='flex items-center'>
                <img src={logo} alt='Bollo logo' className='h-10 w-auto' />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className='hidden lg:block'>
              <nav>
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
                          <div className='flex items-center gap-1 px-2 py-3 text-[#1B3B86] hover:text-[#E31C79] transition-colors cursor-pointer'>
                            {item.name}
                            <ChevronDown className='h-4 w-4 transition-transform group-hover:rotate-180' />
                          </div>
                          <div className='invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-0 top-full w-48 bg-[#1B3B86] rounded-lg py-4 transition-all'>
                            {item.options!.map((option) => (
                              <div key={option.title}>
                                <Link
                                  to={option.url}
                                  className='block px-6 py-2 text-white hover:text-[#E31C79] transition-colors'
                                >
                                  {option.title}
                                </Link>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Right Side Elements */}
            <div className='flex items-center gap-6'>
              <div className='hidden sm:flex items-center gap-6'>
                {/* Language Selector */}
                <div className='group relative'>
                  <button className='flex items-center gap-2 px-2 py-3 text-[#1B3B86] hover:text-[#E31C79] transition-colors'>
                    <span>{getCurrentLanguage()?.flag}</span>
                    <span>{getCurrentLanguage()?.code.toUpperCase()}</span>
                    <ChevronDown className='h-4 w-4 transition-transform group-hover:rotate-180' />
                  </button>
                  <ul className='invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute right-0 top-full w-48 bg-[#1B3B86] rounded-lg py-4 transition-all'>
                    {languages.map((lang) => (
                      <li key={lang.code}>
                        <button
                          onClick={() => handleLanguageChange(lang.code)}
                          className='w-full text-left px-6 py-2 text-white hover:text-[#E31C79] transition-colors flex items-center gap-2'
                        >
                          <span>{lang.flag}</span>
                          <span>{lang.name}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sign In Link */}
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
                  className='flex items-center justify-center h-11 rounded-full bg-[#1B3B86] text-white hover:bg-[#E31C79] transition-colors'
                >
                  <span className='hidden xxl:block px-8'>Post a Task</span>
                  <Plus className='xxl:hidden h-5 w-5 mx-3' />
                </Link>

                <Link
                  to='/create-contract'
                  className='hidden xl:flex items-center px-8 py-3 rounded-full border-2 border-[#1B3B86] text-[#1B3B86] hover:bg-[#E31C79] hover:border-[#E31C79] hover:text-white transition-colors'
                >
                  Create a Contract
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='fixed inset-0 z-40 pt-20 bg-[#1B3B86]/95 backdrop-blur-lg lg:hidden'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className='container mx-auto px-4 py-8'>
              <div className='p-6'>
                {/* Language Selector for Mobile */}
                <div className='mb-6'>
                  <div className='text-white/80 mb-2'>Select Language</div>
                  <div className='grid grid-cols-2 gap-2'>
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          handleLanguageChange(lang.code)
                          toggleMenu()
                        }}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                          currentLanguage === lang.code
                            ? 'bg-[#E31C79] text-white'
                            : 'text-white/80 hover:text-white'
                        }`}
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <nav>
                  <ul className='space-y-4'>
                    {navItems.map((item) => (
                      <motion.li
                        key={item.name}
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        {item.type === 'link' ? (
                          <Link
                            to={item.to!}
                            className='block py-2 text-white hover:text-[#E31C79] transition-colors text-xl'
                            onClick={toggleMenu}
                          >
                            {item.name}
                          </Link>
                        ) : (
                          <div>
                            <button
                              className='flex items-center justify-between w-full py-2 text-white hover:text-[#E31C79] transition-colors text-xl'
                              onClick={() => toggleSubmenu(item.name)}
                            >
                              {item.name}
                              <motion.div
                                animate={{
                                  rotate: activeSubmenu === item.name ? 90 : 0,
                                }}
                                transition={{ duration: 0.2 }}
                              >
                                <ChevronRight className='h-5 w-5' />
                              </motion.div>
                            </button>
                            <AnimatePresence>
                              {activeSubmenu === item.name && (
                                <motion.ul
                                  className='pl-4 space-y-2 overflow-hidden'
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  {item.options!.map((option) => (
                                    <li key={option.title}>
                                      <Link
                                        to={option.url}
                                        className='block py-2 text-white/80 hover:text-[#E31C79] transition-colors'
                                        onClick={toggleMenu}
                                      >
                                        {option.title}
                                      </Link>
                                    </li>
                                  ))}
                                </motion.ul>
                              )}
                            </AnimatePresence>
                          </div>
                        )}
                      </motion.li>
                    ))}

                    {/* Sign In for Mobile */}
                    <motion.li
                      initial={{ x: -30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Link
                        to='/signin'
                        className='block py-2 text-white hover:text-[#E31C79] transition-colors text-xl'
                        onClick={toggleMenu}
                      >
                        Sign in
                      </Link>
                    </motion.li>
                  </ul>
                </nav>

                <div className='mt-8'>
                  <Link
                    to='/create-contract'
                    className='w-full flex items-center justify-center px-6 py-3 rounded-xl text-white bg-[#E31C79] hover:bg-[#E31C79]/80 transition-colors text-lg font-medium'
                  >
                    Create a Contract
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
