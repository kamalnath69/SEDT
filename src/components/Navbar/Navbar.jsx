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
        <div className='container flex justify-between items-center max-sm:flex-col'>
          <div className='flex justify-between w-full'>
            <div className='flex items-center gap-2'>
              <a
                href='#'
                className='font-bold text-3xl sm:text-5xl flex gap-2 items-center text--600 '
              >
                <img
                  src={Logo}
                  alt='Logo'
                  className='w-20 sm:w-30 lg:w-40 h-auto'
                />
              </a>
            </div>
            <div className='flex items-center '>
              <div className='flex flex-col items-center'>
                <h1 className='text-center font-bold max-sm:hidden max-md:text-lg max-lg:text-xl text-2xl text-blue-900 font-montserrat mx-8 max-md:mx-1 max-sm:mx-0'>
                  SEDT-DGCA Authorised Remote Pilot Training Organisation
                </h1>
              </div>

              {/* poster image */}
              <div className=''>
                <img
                  src={iconImage}
                  alt='DGCA Icon'
                  className='w-40 sm:w-60 lg:w-80 h-auto'
                />
              </div>
            </div>
          </div>
          <div className='max-sm:block hidden'>
            <h2 className='text-center font-bold text-sm text-blue-900 font-montserrat mt-2'>
              SEDT-DGCA Authorised Remote Pilot Training Organisation
            </h2>
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div className='flex justify-center bg-primary'>
        <ul className='flex  items-center gap-4 max-sm:gap-2 max-sm:overflow-scroll max-sm:no-scrollbar text-white'>
          {Menu.map((data) => (
            <li key={data.id} className='p-2'>
              <Link
                to={data.link}
                smooth={true}
                duration={500}
                title={data.desc}
                className={`relative max-sm:text-[12px] inline-block px-4 duration-200 font-semibold cursor-pointer ${
                  data.name === 'RPC'
                    ? 'text-yellow-300 hover:text-yellow-500'
                    : 'hover:text-secondary'
                }`}
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
