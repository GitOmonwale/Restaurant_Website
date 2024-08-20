import React from 'react'
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
import { MdCopyright } from "react-icons/md";
const Footer = () => {
  return (
    <footer className="mt-20">
      <div className='grid md:grid-cols-4 grid-cols-2 gap-2'>
        <div className='flex flex-col max-w-80 gap-2'>
          <h1 className="font-extrabold text-3xl">
            <span className="bg-green text-white uppercase p-1 mr-1 rounded-lg">F</span>
            <span className="text-black uppercase ">OODI</span>
          </h1>
          <p className='text-gray'>Savor the artistry where every dish is a culinary masterpiece</p>
        </div>
        <div className='flex flex-col gap-2'>
          <h2 className='font-bold text-2xl'>
            Useful Links
          </h2>
          <div className='flex flex-col gap-3 text-gray'>
            <a href="">About us</a>
            <a href="">Events</a>
            <a href="">Blog</a>
            <a href="">FAQ</a>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
        <h2 className='font-bold text-2xl'>
            Main Menu
          </h2>
          <div className='flex flex-col gap-1 text-gray'>
            <a href="">Home</a>
            <a href="">Offers</a>
            <a href="">Menu</a>
            <a href="">Reservation</a>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
        <h2 className='font-bold text-2xl'>
            Contact us
          </h2>
          <div className='flex flex-col gap-1 text-gray'>
            <a href="">exemple@email.com</a>
            <a href="">+64 958 248 966</a>
            <a href="">Socil media</a>
          </div>
        </div>
      </div>

      <div className='flex items-center md:gap-20 gap-4 text-gray md:mt-3 mt-10 flex-wrap'>
        <div className='flex gap-5 md:text-2xl text-xl'>
          <div className='flex items-center justify-center rounded-full group hover:bg-green group p-4 bg-[#EDFFEF]'>
            <FiFacebook cLassName='text-gray group-hover:text-white' />
          </div>
          <div className='flex items-center justify-center rounded-full group hover:bg-green group p-4 bg-[#EDFFEF]'>
            <FiInstagram acLassName='text-gray group-hover:text-white' />
          </div>
          <div className='flex items-center justify-center rounded-full group hover:bg-green group p-4 bg-[#EDFFEF]'>
            <FiYoutube cLassName='text-gray group-hover:text-white' />
          </div>
          <div className='flex items-center justify-center rounded-full group hover:bg-green group p-4 bg-[#EDFFEF]'>
            <FiTwitter cLassName='text-3xl text-gray group-hover:text-white' />
          </div>
        </div>
        <a href="#" className='flex items-center gap-1'>
          <span>Copyright  2023 Dscode | All rights reserved</span>
        </a>
      </div>
    </footer>
  )
}

export default Footer
