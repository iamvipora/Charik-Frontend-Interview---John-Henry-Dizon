import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '/images/logo.webp'
import NavBarMenuData from '../components/NavBarMenuData'

function NavBar() {
  // Header or Navigation Bar component for the website
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuHamburgerLine = 'h-[2px] w-8 my-1 rounded-full bg-white transition ease transform duration-300'

  const renderNavBarMenuData = NavBarMenuData.map((item, key) => {
    return (
      <li 
        key={key} 
        className={item.style} 
      >
        {/* Ternary operator for swapping between 'Link' and 'a' tag */}
        {item.path ? <Link to={item.path}>{item.name}</Link> : <a href={item.link}>{item.name}</a>}
      </li>
    )
  })

  // Closing the Nav menu if screen width is greater than or equal to the threshold
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 640px)')

    const handleMediaQueryChange = (event) => {
      if (event.matches) {
        setIsMenuOpen(false)
      }
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  return (
    <header className='flex flex-col sticky z-30 top-0 mb-4'>
      <div className='flex justify-between items-center z-30 py-4 bg-[#1A1A1A] border-b sm:backdrop-blur-sm sm:bg-transparent'>
        <Link to='/'>
          <img 
            className='h-12'
            src={logo} 
            alt='Charik Logo' 
          />
        </Link>
        <button
          className='flex flex-col h-12 w-12 justify-center items-center group sm:hidden'
          onClick={() => setIsMenuOpen(prev => !prev)}
        >
          <div
            className={`${menuHamburgerLine} ${
              isMenuOpen
                ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
              }`}
          />
          {/* Menu icon animaiton */}
          <div className={`${menuHamburgerLine} ${isMenuOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"}`} />
          <div
            className={`${menuHamburgerLine} ${
              isMenuOpen
                ? "-rotate-45 -translate-y-2 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
              }`}
          />
        </button>
        <div className='absolute hidden sm:relative sm:block sm:items-center'>
          <ul className='flex items-center text-xl text-white font-normal sm:flex sm:space-x-8'>
            {/* JSX rendering for the mapped menu data */}
            {renderNavBarMenuData}
          </ul>
        </div>
      </div>
        <div className={`absolute w-full z-20 backdrop-blur-sm border-b transition-transform ease-in-out duration-300 sm:hidden ${isMenuOpen ? 'block translate-y-20' : ' -translate-y-40'}`}>
          <ul className='text-xl text-white font-normal py-2 gap-2'>
            {/* JSX rendering for the mapped menu data */}
            {renderNavBarMenuData}
          </ul>
        </div>               
    </header>
  )
}

export default NavBar