import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const SpecialDishesCard = ({ data }) => {
    return (
        <>
            {data.map(item => {
                const [isFavorite, setIsFavorite] = useState(item.isFavorite);

                const toggleFavorite = () => {
                    setIsFavorite(!isFavorite);
                };

                return (
                    <div className='relative rounded-3xl shadow-xl md:p-10 p-5 flex flex-col gap-2 font-bold' key={item.id}>
                        <div className='rounded-full flex items-center justify-center'>
                            <img src={item.image} alt={item.title} />
                        </div>
                        <div className='text-xl'>{item.title}</div>
                        <div className='text-gray'>{item.description}</div>
                        <div className='flex items-center justify-between'>
                            <div>
                                <span className='text-sm font-extrabold text-red'>$</span>{item.price}
                            </div>
                            <div className='flex items-center'>
                                <FaStar className='text-yellow-400' />
                                <span className='text-gray ml-1'>{item.star}</span>
                            </div>
                        </div>
                        <div 
                            className='absolute top-0 right-0 h-16 w-16 rounded-tr-3xl rounded-bl-3xl bg-green flex items-center justify-center cursor-pointer'
                            onClick={toggleFavorite} 
                        >
                            {isFavorite ? (
                                <FaHeart className='text-red-500 text-white' />
                            ) : (
                                <FaRegHeart className='text-white' />
                            )}
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default SpecialDishesCard;
