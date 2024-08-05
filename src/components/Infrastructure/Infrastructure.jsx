import React, { useState } from 'react';
import Slider from 'react-slick';
import Modal from './Modal';
import { IMAGE_URLS } from './imageUrls';

const Infrastructure = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const InfrastructureData = [
    {
      id: 1,
      title: 'Think Area',
      img: IMAGE_URLS.thinkArea,
      desc: 'A dedicated think area designed for brainstorming and collaborative work.'
    },
    {
      id: 2,
      title: 'Campus Building',
      img: IMAGE_URLS.campusBuilding,
      desc: 'The main building of our campus, designed with modern architecture.'
    },
    {
      id: 3,
      title: 'Drone Lab',
      img: IMAGE_URLS.droneLab,
      desc: 'Our drone lab where students get hands-on experience with the latest drone technology.'
    },
    {
      id: 4,
      title: 'Chat Corner',
      img: [IMAGE_URLS.chatCorner],
      desc: 'A cozy corner for students and staff to interact and chat freely in a peaceful environment.'
    },
    {
      id: 5,
      title: 'Advanced Technologies',
      img: IMAGE_URLS.advancedTechnologies,
      desc: 'Advanced technologies to enhance research and education with cutting-edge UAV innovations.'
    },
    {
      id: 6,
      title: 'Professional Trainers',
      img: IMAGE_URLS.professionalTrainers,
      desc: 'Our professional trainers provide top-notch training and support to help students excel in their studies.'
    }
  ];

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const handleSliderTouchStart = (e) => {
    e.stopPropagation(); // Prevent touch events on slider from affecting parent
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    cssEase: 'linear',
    pauseOnHover: true,
    pauseOnFocus: true,
    draggable: true,
    swipe: true,
    touchMove: true
  };

  return (
    <div className='py-10 mb-10'>
      <div className='container'>
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <h1 data-aos='fade-up' className='text-3xl font-bold'>
            Infrastructure
          </h1>
          <p data-aos='fade-up' className='text-xs text-gray-400'>
            Our state-of-the-art infrastructure supports our mission to provide the best training and facilities.
          </p>
        </div>

        <div className='hidden md:block'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {InfrastructureData.map((data) => (
              <div className='my-6 h-[400px]' key={data.id} data-aos='zoom-in'>
                <div
                  className='flex flex-col gap-2 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative cursor-pointer transform transition-transform hover:-translate-y-1 h-full flex flex-col'
                  onClick={() => handleItemClick(data)}
                >
                  <div
                    className='mb-2 slider-wrapper flex-grow'
                    onClick={(e) => e.stopPropagation()} // Prevent click event from affecting parent
                    onTouchStart={handleSliderTouchStart} // Prevent touch event propagation
                  >
                    <Slider {...settings} className='slider'>
                      {Array.isArray(data.img) ? (
                        data.img.map((slide, index) => (
                          <div key={index}>
                            <img
                              src={slide}
                              alt={`${data.title} ${index + 1}`}
                              className='rounded-lg w-full h-48 object-cover'
                            />
                          </div>
                        ))
                      ) : (
                        <div>
                          <img
                            src={data.img}
                            alt={data.title}
                            className='rounded-lg w-full h-48 object-cover'
                          />
                        </div>
                      )}
                    </Slider>
                  </div>
                  <div className='flex flex-col items-center gap-4'>
                    <div className='space-y-2'>
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
        </div>

        <div className='md:hidden'>
          <Slider {...settings} className='slider-container'>
            {InfrastructureData.map((data) => (
              <div className='my-6 h-[400px]' key={data.id} data-aos='zoom-in'>
                <div
                  className='flex flex-col gap-2 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative cursor-pointer transform transition-transform hover:-translate-y-1 h-full flex flex-col'
                  onClick={() => handleItemClick(data)}
                >
                  <div
                    className='mb-2 slider-wrapper flex-grow'
                    onClick={(e) => e.stopPropagation()} // Prevent click event from affecting parent
                    onTouchStart={handleSliderTouchStart} // Prevent touch event propagation
                  >
                    <Slider {...settings} className='slider'>
                      {Array.isArray(data.img) ? (
                        data.img.map((slide, index) => (
                          <div key={index}>
                            <img
                              src={slide}
                              alt={`${data.title} ${index + 1}`}
                              className='rounded-lg w-full h-48 object-cover'
                            />
                          </div>
                        ))
                      ) : (
                        <div>
                          <img
                            src={data.img}
                            alt={data.title}
                            className='rounded-lg w-full h-48 object-cover'
                          />
                        </div>
                      )}
                    </Slider>
                  </div>
                  <div className='flex flex-col items-center gap-4'>
                    <div className='space-y-2'>
                      <h1 className='text-xl font-bold text-black/80 dark:text-light'>
                        {data.title}
                      </h1>
                      <p className='text-xs text-gray-500'>{data.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {selectedItem && (
          <Modal selectedItem={selectedItem} closeModal={closeModal} />
        )}
      </div>
    </div>
  );
};

export default Infrastructure;
