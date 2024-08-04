import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import AOS from 'aos'
import 'aos/dist/aos.css'
import TopProducts from './components/TopProducts/TopProducts'
import Banner from './components/Banner/Banner'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100
    })
    AOS.refresh()
  }, [])

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
      <Navbar />
      <section id='home'>
        <Hero />
      </section>
      <section id='about'>
        <Testimonials />
      </section>
      <section id='course'>
        <TopProducts />
      </section>
      <section id='intern'>
        <Banner />
      </section>
      <section id='rpc'>
        <Testimonials />
      </section>
      <section id='contact'>
        <Footer />
      </section>
    </div>
  )
}

export default App
