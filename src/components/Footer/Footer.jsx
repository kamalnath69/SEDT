import React from 'react'
import footerLogo from '../../assets/logo.png'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt
} from 'react-icons/fa'
import { Link } from 'react-scroll'

// Menu links to be used in the footer
const Menu = [
  {
    id: 1,
    name: 'Home',
    link: 'home'
  },
  {
    id: 2,
    name: 'Course',
    link: 'course'
  },
  {
    id: 3,
    name: 'Intern',
    link: 'intern',
    desc: 'Intern Page'
  },
  {
    id: 4,
    name: 'RPC',
    link: 'rpc',
    desc: 'Something goes here'
  }
]

const Footer = () => {
  return (
    <div className='text-white bg-primary'>
      <div className='container'>
        <div className='grid md:grid-cols-3 gap-6 pb-16 pt-5'>
          {/* company details */}
          <div className='flex flex-col items-center md:items-start'>
            <img
              src={footerLogo}
              alt=''
              className='max-w-[50px] bg-white p-2 rounded-md mb-3'
            />
            <h1 className='text-xl font-bold mb-2'>Sri Eshwar Drone Tech</h1>
            <p>Fly With Us</p>
          </div>

          {/* Footer Links */}
          <div className='flex flex-col items-center md:items-start'>
            <h1 className='text-xl font-bold mb-3'>Important Links</h1>
            <ul className='flex flex-col gap-3'>
              {Menu.map((link) => (
                <li
                  className='cursor-pointer hover:translate-x-1 duration-300 text-gray-200'
                  key={link.id}
                >
                  <Link
                    to={link.link}
                    smooth={true}
                    duration={500}
                    className='hover:text-white'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <div className='flex flex-col items-center md:items-start'>
            <div className='flex items-center gap-3 mb-6'>
              <a href='#'>
                <FaInstagram className='text-3xl' />
              </a>
              <a href='#'>
                <FaFacebook className='text-3xl' />
              </a>
              <a href='#'>
                <FaLinkedin className='text-3xl' />
              </a>
            </div>
            <div>
              <div className='flex items-center gap-3 mb-3'>
                <FaLocationArrow />
                <p>Kinathukadavu , Coimbatore</p>
              </div>
              <div className='flex items-center gap-3'>
                <FaMobileAlt />
                <p>+91 123456789</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className='text-center py-4 bg-primary text-white'>
          <p className='mb-1'>
            Website Designed & Maintained By: Department of Information Technology, SECE.
          </p>
          <p>© 2024 sedt All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
