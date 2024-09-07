import React from 'react'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import food7 from '../assets/food-7.png'
import food8 from '../assets/food-8.png'
import food9 from '../assets/food-9.png'
import SpecialDishesCard from './SpecialDishesCard';
const dataDishes = [
    {id:'1', image:food7 , title:'Fattoush Salad', description:'Description of the item', price:24.00, star:4.9},
    {id:'2', image:food8 , title:'Vegetable Salad', description:'Description of the item', price:26.00, star:4.6}, 
    {id:'3', image:food9 , title:'Edd Vegi Salad', description:'Description of the item', price:23.00, star: 4.5},
]
const SpecialDishes = () => {
    return (
        <div className='mt-20'>
            <h3 className='uppercase text-red text-lg font-bold'>Special dishes</h3>
            <div className='flex items-center justify-between'>
                <h2 className='max-w-80 md:text-4xl text-2xl font-bold mb-5'>Standout Dishes From Our Menu</h2>
                <div className='flex items-center justify-between gap-4'>
                    <button className='rounded-full h-10 w-10 flex items-center justify-center bg-[#EFEFEF] hover:bg-green group'>
                        <MdOutlineKeyboardArrowLeft className='group-hover:text-white text-gray' />
                    </button>
                    <button className='rounded-full h-10 w-10 flex items-center justify-center bg-[#EFEFEF] hover:bg-green group'>
                        <MdOutlineKeyboardArrowRight />
                    </button>
                </div>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 md:gap-8 gap-4'>
            <SpecialDishesCard data={dataDishes}/>
            </div>
        </div>
    )
}

export default SpecialDishes
