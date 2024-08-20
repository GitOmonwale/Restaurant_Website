import React, { useState } from 'react';

const DropdownMenu = ({ buttonText, options }) => {

    return (
        <div className='group'>
            <button className="text-black font-medium text-sm px-5 py-2.5 text-center inline-flex items-center" type="button">
                {buttonText}
                <svg className="w-2.5 h-2.5 ms-3 text-green" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
            </button>
            <div className='bg-red flex-col hidden group-hover:flex'>
                {options.map((option, index) => (
                    <a
                        key={index}
                        href={option.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                        {option.label}
                    </a>
                ))}

            </div>
        </div>
    );
};

export default DropdownMenu;
