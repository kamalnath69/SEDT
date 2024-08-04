import React from 'react'
import Image1 from '../../assets/hero/droneImg1.png'
import Image2 from '../../assets/hero/DTimg5.png'
import Image3 from '../../assets/hero/women.jpg'
import Slider from 'react-slick'

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: 'Sri Eshwar Drone Tech',
    description:
      'Sri Eshwar Drone Tech Pvt Ltd is a DGCA authorised Remote Pilot Training Organisation. It offers Remote Pilot Training Certificate (RPC) course for Drone pilots.'
  },
  {
    id: 2,
    img: Image2,
    title: 'We Are Here for You',
    description:
      'By offering a comprehensive curriculum, it aims to enhance your skills for agriculture, photography, videography, surveillance, mapping, inspection, public safety, and other aerial industrial solutions. The facility is equipped with state-of-the-art infrastructure to support theoretical knowledge, practical skills, and safety procedures required for remote pilot certification and operations.'
  },
  {
    id: 3,
    img: Image3,
    title: 'Come Learn With Us',
    description:
      'Immerse yourself in the fascinating world of drone technology with our comprehensive learning platform. Gain in-depth insights into various sectors of drone technology'
  }
]

const events = [
  {
    id: 1,
    name: 'Event 1',
    description:
      'Details about event 1. This is an extended description to simulate a longer text. More details about the event.'
  },
  {
    id: 2,
    name: 'Event 2',
    description:
      'Details about event 2. This is an extended description to simulate a longer text. More details about the event are provided here to give a better understanding of what it is about. It continues to provide additional information and insights.'
  }
]

const Hero = () => {
  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    cssEase: 'ease-in-out',
    pauseOnHover: false,
    pauseOnFocus: true
  }

  const handleRedirect = () => {
    window.location.href =
      'https://docs.google.com/forms/d/e/1FAIpQLSdn-nYChP2cwu4UBoUvDLw4DjCcmD1INi0miLejTlu3V6zHgw/viewform'
  }

  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
      {/* background pattern */}
      <div className='h-[700px] w-[700px] bg-primary absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-10'></div>
      {/* hero section */}
      <div className='container pb-8 sm:pb-0 grid grid-cols-1 lg:grid-cols-4 gap-4'>
        {/* Main content */}
        <div className='col-span-3'>
          <Slider {...sliderSettings}>
            {ImageList.map((data) => (
              <div key={data.id}>
                <div className='grid grid-cols-1 sm:grid-cols-2'>
                  {/* text content section */}
                  <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                    <h1
                      data-aos='zoom-out'
                      data-aos-duration='500'
                      data-aos-once='true'
                      className='text-5xl sm:text-6xl lg:text-7xl font-bold'
                    >
                      {data.title}
                    </h1>
                    <p
                      data-aos='fade-up'
                      data-aos-duration='500'
                      data-aos-delay='100'
                      className='text-sm'
                    >
                      {data.description}
                    </p>
                    <div
                      data-aos='fade-up'
                      data-aos-duration='500'
                      data-aos-delay='300'
                    >
                      <button
                        onClick={handleRedirect}
                        className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'
                      >
                        Register Now
                      </button>
                    </div>
                  </div>
                  {/* image section */}
                  <div className='order-1 sm:order-2'>
                    <div
                      data-aos='zoom-in'
                      data-aos-once='true'
                      className='relative z-10'
                    >
                      <img
                        src={data.img}
                        alt=''
                        className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto'
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        {/* Events section */}
        <div className='col-span-1 p-4 rounded-lg shadow-lg bg-primary/10 dark:bg-gray-800 relative'>
          <h2 className='text-2xl font-bold text-blue-900 mb-2'>Events</h2>
          <div className='scroll-container max-sm:h-[250px] overflow-y-auto'>
            <div className='scroll-text'>
              {events.concat(events).map((event) => (
                <div key={event.id} className='p-4 mb-4 flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative'>
                  <h3 className='text-lg font-semibold text-black/80 dark:text-light'>{event.name}</h3>
                  <p className='text-xs text-gray-500'>{event.description}</p>
                  <p className='text-black/10 text-8xl font-serif absolute top-0 right-0'>
                    !
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
