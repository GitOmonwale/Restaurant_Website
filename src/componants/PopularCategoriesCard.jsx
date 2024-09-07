import React from 'react'

const PopularCategoriesCard = ({ data }) => {
    return (
        <>
            {
                data.map(item => (
                    <div className='rounded-3xl shadow-md py-10 px-5 flex flex-col items-center gap-2' key={item.id}>
                        <div className='bg-turquois rounded-full flex items-center justify-center sm:h-32 sm:w-32 h-24 w-24'>
                            <img src={item.image} alt="" />
                        </div>
                        <div className='font-bold'>{item.title}</div>
                        <div className='text-gray'>{item.subtitle}</div>
                    </div>
                ))
            }
        </>
    )
}

export default PopularCategoriesCard
