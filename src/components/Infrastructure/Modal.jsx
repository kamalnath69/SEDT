import React from 'react'
import Slider from 'react-slick'

const Modal = ({ selectedItem, closeModal }) => {
  const isSlideshow = Array.isArray(selectedItem?.img)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  }

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden max-w-3xl w-full mx-4 relative'>
        <button
          className='absolute top-2 right-2 text-white bg-red-600 hover:bg-red-700 rounded-full p-2 z-50'
          onClick={closeModal}
        >
          X
        </button>
        {isSlideshow ? (
          <Slider {...settings}>
            {selectedItem.img.map((slide, index) => (
              <div key={index}>
                <img
                  src={slide}
                  alt={`${selectedItem.title} ${index + 1}`}
                  className='w-full h-96 object-cover'
                />
              </div>
            ))}
          </Slider>
        ) : (
          <img
            src={selectedItem.img}
            alt={selectedItem.title}
            className='w-full h-96 object-cover'
          />
        )}
        <div className='p-6'>
          <h2 className='text-2xl font-bold mb-2'>{selectedItem.title}</h2>
          <p className='text-gray-700 dark:text-gray-300 mb-4'>{selectedItem.desc}</p>
          <a
            href='https://sece.ac.in'
            className='text-blue-500 hover:underline'
            target='_blank'
            rel='noopener noreferrer'
          >
            See More
          </a>
        </div>
      </div>
    </div>
  )
}

export default Modal
