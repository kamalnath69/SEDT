import React, { useState } from 'react'
import img1 from '../../assets/infrastructure/img1.jpg'
import img2 from '../../assets/infrastructure/img2.jpg'
import img3 from '../../assets/infrastructure/img3.jpg'
import img4 from '../../assets/infrastructure/img4.jpg'
import img5 from '../../assets/infrastructure/img5.jpg'
import img6 from '../../assets/infrastructure/img6.jpg'
import img7 from '../../assets/infrastructure/img7.jpg'
import img8 from '../../assets/infrastructure/img8.jpg'
import img9 from '../../assets/infrastructure/img9.jpg'
import Modal from './Modal'

const Infrastructure = () => {
  const [selectedItem, setSelectedItem] = useState(null)

  const InfrastructureData = [
    {
      id: 1,
      title: 'Think Area',
      img: img1,
      desc: 'A dedicated think area designed for brainstorming and collaborative work.'
    },
    {
      id: 2,
      title: 'Campus Building',
      img: [img9,img2],
      desc: 'The main building of our campus, designed with modern architecture.'
    },
    {
      id: 3,
      title: 'Drone Lab',
      img: [img3, img4, img5],
      desc: 'Our drone lab where students get hands-on experience with the latest drone technology.'
    },
    {
      id: 4,
      title: 'Chat Corner',
      img: img6,
      desc: 'A cozy corner for students and staff to interact and chat freely.'
    },
    {
        id: 5,
        title: 'Advanced Technologies',
        img: [img7,img8],
        desc: 'Advanced technologies to enhance research and education with cutting-edge UAV innovations.'
      }
  ]

  const handleImageClick = (item) => {
    setSelectedItem(item)
  }

  const closeModal = () => {
    setSelectedItem(null)
  }

  return (
    <div className='py-10 mb-10'>
      <div className='container'>
        {/* header section */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <h1 data-aos='fade-up' className='text-3xl font-bold'>
            Infrastructure
          </h1>
          <p data-aos='fade-up' className='text-xs text-gray-400'>
            Our state-of-the-art infrastructure supports our mission to provide the best training and facilities.
          </p>
        </div>

        {/* Infrastructure cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {InfrastructureData.map((data) => (
            <div className='my-6' key={data.id} data-aos='zoom-in'>
              <div
                className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative cursor-pointer transform transition-transform hover:-translate-y-1'
                onClick={() => handleImageClick(data)}
              >
                <div className='mb-4'>
                  <img
                    src={Array.isArray(data.img) ? data.img[0] : data.img}
                    alt={data.title}
                    className='rounded-lg w-full h-48 object-cover'
                  />
                </div>
                <div className='flex flex-col items-center gap-4'>
                  <div className='space-y-3'>
                    <h1 className='text-xl font-bold text-black/80 dark:text-light'>
                      {data.title}
                    </h1>
                    <p className='text-xs text-gray-500'>{data.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedItem && (
          <Modal selectedItem={selectedItem} closeModal={closeModal} />
        )}
      </div>
    </div>
  )
}

export default Infrastructure
