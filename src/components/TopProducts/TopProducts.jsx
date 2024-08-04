import React from 'react'
import Img1 from '../../assets/women/agri.jpg'
import Img2 from '../../assets/women/cinema.jpg'
import Img3 from '../../assets/women/mini.png'

const ProjectsData = [
  {
    id: 1,
    img: Img1,
    title: 'Agri Drine',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 2,
    img: Img2,
    title: 'Big scale drone',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 3,
    img: Img1,
    title: 'Mini drone',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
]

const TopProducts = () => {
  return (
    <div className='mb-20'>
      <div className='container'>
        {/* Header section */}
        <div className='text-left mb-24'>
          <h1 data-aos='fade-up' className='text-3xl font-bold'>
            Students Projects
          </h1>
        </div>
        {/* Body section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
          {ProjectsData.map((data) => (
            <div
              key={data.id}
              data-aos='zoom-in'
              className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]'
            >
              {/* image section */}
              <div className='h-[100px]'>
                <img
                  src={data.img}
                  alt=''
                  className='max-w-[140px] block mx-auto transform -translate-y-20 rounded-lg group-hover:scale-105 duration-300 drop-shadow-md'
                />
              </div>
              {/* details section */}
              <div className='p-4 text-center'>
                <h1 className='text-xl font-bold'>{data.title}</h1>
                <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TopProducts
