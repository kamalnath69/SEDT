import React from 'react'
import Logo from '../../assets/logo.png'
import iconImage from '../../assets/women/SEDT-poster.jpeg'
import { Link } from 'react-scroll'

const Menu = [
  {
    id: 1,
    name: 'Home',
    link: 'home'
  },
  {
    id: 2,
    name: 'About',
    link: 'about'
  },
  {
    id: 3,
    name: 'Course',
    link: 'course'
  },
  {
    id: 4,
    name: 'Intern',
    link: 'intern',
    desc: 'Intern Page'
  },
  {
    id: 5,
    name: 'RPC',
    link: 'rpc',
    desc: 'Something goes here'
  },
  {
    id: 6,
    name: 'Contact',
    link: 'contact'
  }
]

const Navbar = () => {
  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
      {/* upper Navbar */}
      <div className='py-2'>
        <div className='container flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <a
              href='#'
              className='font-bold text-3xl sm:text-5xl flex gap-2 items-center text--600 '
            >
              <img src={Logo} alt='Logo' className='w-20 sm:w-30 lg:w-40 h-auto' />
            </a>
          </div>

          <div className='flex flex-col items-center'>
            <h1 className='text-center font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl text-blue-900'>
              SEDT-DGCA Authorised Remote Pilot Training Organisation
            </h1>
          </div>

          {/* poster image */}
          <div className='hidden sm:block'>
            <img src={iconImage} alt='DGCA Icon' className='w-40 sm:w-60 lg:w-80 h-auto' />
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div className='flex justify-center bg-primary'>
        <ul className='sm:flex hidden items-center gap-4 text-white'>
          {Menu.map((data) => (
            <li key={data.id} className='p-2'>
              <Link
                to={data.link}
                smooth={true}
                duration={500}
                title={data.desc}
                className={`relative inline-block px-4 duration-200 font-semibold cursor-pointer ${data.name === 'RPC' ? 'text-yellow-300 hover:text-yellow-500' : 'hover:text-secondary'}`}
              >
                {data.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
