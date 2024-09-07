import React from 'react'
import food3 from '../assets/food-3.png'
import food4 from '../assets/food-4.png'
import food5 from '../assets/food-5.png'
import food6 from '../assets/food-6.png'
import PopularCategoriesCard from './PopularCategoriesCard'
const dataCategories = [
    {id:'1', image:food3 , title:'Main Dishes', subtitle:'(86 dishes)'},
    {id:'2', image:food4 , title:'Break Fast', subtitle:'(12 breakfast)'},
    {id:'3', image:food5 , title:'Desserts', subtitle:'(48 dessert)'},
    {id:'4', image:food6 , title:'Browse All', subtitle:'255 item'}
]
const PopularCategories = () => {
  return (
    <div className='text-center sm:mt-20 mt-28'>
    <h3 className='text-red uppercase font-bold text-lg'>Customer Favorites</h3>
      <h2 className='md:text-4xl text-2xl  font-bold mb-5'>Popular Categories</h2>
      <div className='grid md:grid-cols-4 grid-cols-1 md:gap-8 gap-4' >
      <PopularCategoriesCard data={dataCategories}/>
      </div>
    </div>
  )
}

export default PopularCategories
