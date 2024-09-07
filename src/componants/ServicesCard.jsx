import React from 'react'

const ServicesCard = ({ data }) => {
    return (
        <>
            {
                data.map(item => (
                    <div className='rounded-3xl shadow-sm shadow-gray md:py-10 py-3 md:px-5 px-3 flex flex-col items-center gap-2 text-center' key={item.id}>
                        <img src={item.image} alt="" />
                        <div className='font-bold text-green uppercase'>{item.title}</div>
                        <div className='text-[#90BD95]'>{item.description}</div>
                    </div>
                ))
            }
        </>
    )
}

export default ServicesCard
