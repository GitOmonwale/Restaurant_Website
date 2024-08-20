import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import hero from '../assets/hero.png'
import food1 from '../assets/food-1.png'
import food2 from '../assets/food-2.png'
import comment from '../assets/comment.png'
const Hero = () => {
    return (
        <div>
            <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-4 gap-10 lg:mt-12 mt-0'>
                <div className='md:py-20 py-14 flex flex-col lg:gap-5 gap-2 max-w-2xl m-auto md:pr-10 pr-0'>
                    <h1 className='font-bold md:text-6xl sm:text-5xl text-4xl'>
                        <span>Dive into Delights Of Delectable </span>
                        <span className='text-green'>Food</span>
                    </h1>
                    <div className='text-gray md:max-w-full max-w-96'>
                        Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship
                    </div>
                    <div className='flex md:gap-10 gap-5'>
                        <button className="text-white py-2 px-4 rounded-3xl bg-green flex gap-2 items-center">
                            Order now
                        </button>
                        <button className='flex items-center gap-2'>
                            <span>Watch now</span>
                            <span className='flex items-center justify-center rounded-full shadow-md shadow-black p-4'>
                                <FaPlay cLassName='text-3xl ' />
                            </span>
                        </button>
                    </div>
                </div>
                <div className='relative sm:p-10 p-0 flex items-center justify-center'>
                    <div className='relative bg-green rounded-full h-96 w-96'>
                        <img src={hero} alt="" className='absolute m-auto -left-3 -bottom-3 w-[800px] h-[500px]' />
                        <img src={comment} alt="comment" className='absolute -top-14 -left-44 z-20 md:flex hidden' />
                    </div>
                    <div className='flex items-center justify-center gap-8 absolute bottom-0 flex-wrap'>
                        <div className='rounded-xl bg-white flex gap-4 p-2 font-bold shadow-lg'>
                            <img src={food1} alt="" width={70} height={100} className='rounded-xl' />
                            <div className='flex flex-col gap-1'>
                                <div className=''>
                                    Spicy noodles
                                </div>
                                <div className='flex text-yellow-400 gap-1'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                </div>
                                <div><span className='text-sm font-extrabold text-red'>$</span>18.00</div>
                            </div>
                        </div>
                        <div className='rounded-xl bg-white flex gap-4 p-2 font-bold shadow-lg'>
                        <img src={food2} alt="" width={70} height={100} className='rounded-xl' />
                        <div className='flex flex-col gap-1'>
                            <div className=''>
                                Vegetarian salad
                            </div>
                            <div className='flex text-yellow-400 gap-1'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaRegStar />
                            </div>
                            <div><span className='text-sm font-extrabold text-red'>$</span>23.00</div>
                        </div>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero
