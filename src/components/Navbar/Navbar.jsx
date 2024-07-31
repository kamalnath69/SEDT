import React from 'react'
import Logo from '../../assets/logo.png'
import { FaCaretDown } from 'react-icons/fa'
import { FaUserPlus } from 'react-icons/fa' // Import a registration icon
import DarkMode from './DarkMode'
import PosterImage from '../../assets/women/SEDT-poster.jpeg' // Import the provided image
import seceLogo from '../../assets/sece-logo.png'
const Menu = [
  {
    id: 1,
    name: 'Home',
    link: '/#'
  },
  {
    id: 2,
    name: 'About',
    link: '/#services'
  },
  {
    id: 3,
    name: 'Course',
    link: '/#'
  },
  {
    id: 4,
    name: 'Contact',
    link: '/#'
  }
]

const DropdownLinks = []

const Navbar = () => {
  const handleRedirect = () => {
    window.location.href =
      'https://docs.google.com/forms/d/e/1FAIpQLSdn-nYChP2cwu4UBoUvDLw4DjCcmD1INi0miLejTlu3V6zHgw/viewform'
  }

  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
      {/* upper Navbar */}
      <div className=' py-2'>
        <div className='container flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <a
              href='#'
              className='font-bold text-3xl sm:text-5xl flex gap-2 items-center text--600 '
            >
              <img src={Logo} alt='Logo' className='w-28 sm:w-26 ' />
            </a>
          </div>

          {/* poster image */}
          <div className='hidden sm:block'>
            <img src={seceLogo} alt='SEDT Poster' className='w-32 h-auto' />
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div className='flex justify-center bg-primary'>
        <ul className='sm:flex hidden items-center gap-4 text-white'>
          {Menu.map((data) => (
            <li key={data.id} className='p-2'>
              <a
                href={data.link}
                className='inline-block px-4 duration-200 font-semibold'
              >
                {data.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
