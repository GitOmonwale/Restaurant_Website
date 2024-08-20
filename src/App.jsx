import { useState } from 'react'
import NavBar from './componants/navbar/Navbar'
import Hero from './componants/Hero'
import PopularCategories from './componants/PopularCategories'
import SpecialDishes from './componants/SpecialDishes'
import Testimonials from './componants/Testimonials'
import Services from './componants/Services'
import Footer from './componants/Footer'
function App() {
  return (
    <div className='max-w-screen-2xl m-auto lg:px-20 md:px-10 px-5 font-inter'>
      <NavBar />
      <Hero />
      <PopularCategories />
      <SpecialDishes />
      <Testimonials />
      <Services/>
      <Footer/>
    </div>
  )
}

export default App
