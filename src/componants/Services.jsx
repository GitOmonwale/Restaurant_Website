import React from 'react'
import catering from '../assets/catering.svg';
import delivery from '../assets/delivery.svg';
import shoppingCar from '../assets/shoppingCar.svg';
import gift from '../assets/gift.svg';
import ServicesCard from './ServicesCard';
const dataServices = [
    { id: '1', image: catering, title: 'Catering', description: 'Delight your guests with our flavors and  presentation' },
    { id: '2', image: delivery, title: 'Fast Delivering', description: 'We deliver your order promptly to your door' },
    { id: '3', image: shoppingCar, title: 'Online Ordering', description: 'Explore menu & order with ease using our Online Ordering ' },
    { id: '4', image: gift, title: 'Gift Cards', description: 'Give the gift of exceptional dining with Foodi Gift Cards' }
]

const Services = () => {
    return (
        <div className='grid sm:grid-cols-2 grid-cols-1 lg:gap-10 gap-5 mt-20'>
            <div className='flex flex-col gap-4'>
                <h3 className='text-lg uppercase text-red'>Our Story & Services</h3>
                <h2 className='md:text-4xl text-2xl font-bold'>Our Culinary Journey And Services</h2>
                <div className='text-gray font-bold'>
                    Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.
                </div>
                <button className="text-white py-2 px-4 rounded-2xl bg-green flex gap-2 items-center max-w-24">
                    Explore
                </button>
            </div>
            <div className='grid sm:grid-cols-2 grid-cols-1 gap-4'>
                <ServicesCard data={dataServices} />
            </div>
        </div>
    )
}

export default Services
