import React from 'react'
import { FaStar } from "react-icons/fa";
import custumer from '../assets/custumer.png'
import custumer1 from '../assets/custumer-1.png'
import custumer2 from '../assets/custumer-2.png'
import custumer3 from '../assets/custumer-3.png'
const Testimonials = () => {
    return (
        <div className='grid md:grid-cols-2 grid-col-1 items-center mt-20 md:gap-0 gap-4'>
            <div className='m-auto md:order-1 order-2'>
                <img src={custumer} alt="" width={400} height={400} className=''/>
            </div>
            <div className='font-bold flex flex-col gap-4 md:pl-10 pl-0 md:order-2 order-1'>
                <div className='text-lg text-red uppercase'>Testimonials</div>
                <div className='md:text-4xl text-2xl'>What Our Customers Say About Us</div>
                <div className='text-gray'>“I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”</div>
                <div className='flex gap-8'>
                    <div className="flex ">
                        <div className='rounded-full w-12 h-12'>
                            <img src={custumer1} alt="custumer1" className='h-10 w-10 rounded-full' />
                        </div>
                        <div className='rounded-full w-12 h-12 -ml-5'>
                            <img src={custumer2} alt="custumer2" className='h-10 w-10 rounded-full' />
                        </div>
                        <div className='rounded-full w-12 h-12 -ml-5'>
                            <img src={custumer3} alt="custumer3" className='h-10 w-10 rounded-full' />
                        </div>
                    </div>
                    <div className=''>
                        <h3>Custumer Feedback</h3>
                        <div className='flex gap-4'>
                           <FaStar className='text-yellow-400'/>
                            <span className='text-gray'>4.9</span>
                            <span className='text-gray'>18.6k Reviews</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
