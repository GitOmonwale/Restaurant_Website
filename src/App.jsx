import { useState } from 'react';
import { motion } from 'framer-motion';
import NavBar from './componants/navbar/Navbar';
import Hero from './componants/Hero';
import PopularCategories from './componants/PopularCategories';
import SpecialDishes from './componants/SpecialDishes';
import Testimonials from './componants/Testimonials';
import Services from './componants/Services';
import Footer from './componants/Footer';

function App() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className='max-w-screen-2xl m-auto lg:px-20 md:px-10 px-5 font-inter'>
      <NavBar />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <Hero />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        <PopularCategories />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        <SpecialDishes />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Testimonials />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Services />
      </motion.div>

      <Footer />
    </div>
  );
}

export default App;
