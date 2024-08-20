import React, { useState } from "react";
import DropdownMenu from "./drop";
import search from '../../assets/search.svg';
import bag from '../../assets/shoppingBag.svg';
import contact from '../../assets/contact.svg';
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const options1 = [];
const options2 = [];

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full">
            <div className="flex justify-between items-center mt-5 px-4 md:px-0">
                <h1 className="font-extrabold text-3xl">
                    <span className="bg-green text-white uppercase p-1 mr-1 rounded-lg">F</span>
                    <span className="text-black uppercase">OODI</span>
                </h1>
                
                {/* Hamburger Menu Icon for Mobile */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-3xl focus:outline-none">
                        {isOpen ? <RxCross2 /> : <IoMdMenu />}
                    </button>
                </div>

                {/* Main Menu */}
                <nav className={`md:flex ${isOpen ? 'block' : 'hidden'} absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent z-50`}>
                    <ul className="flex flex-col md:flex-row md:items-center md:justify-center">
                        <a href="#" className="px-5 py-2.5">Home</a>
                        <DropdownMenu buttonText="Menu" options={options1} />
                        <DropdownMenu buttonText="Services" options={options2} />
                        <a href="#" className="px-5 py-2.5">Offers</a>
                    </ul>
                </nav>

                {/* Right Icons */}
                <div className="hidden md:flex gap-5 items-center">
                    <img src={search} alt="Search" />
                    <img src={bag} alt="Shopping Bag" />
                    <button className="text-white py-2 px-4 rounded-2xl bg-green flex gap-2 items-center">
                        <img src={contact} alt="Contact" width={20} height={8} />
                        <span>Contact us</span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Links */}
            {isOpen && (
                <div className="md:hidden flex flex-col items-center mt-4 bg-white shadow-md">
                    <ul className="flex flex-col items-center">
                        <a href="#" className="px-5 py-2.5">Home</a>
                        <DropdownMenu buttonText="Menu" options={options1} />
                        <DropdownMenu buttonText="Services" options={options2} />
                        <a href="#" className="px-5 py-2.5">Offers</a>
                    </ul>
                </div>
            )}
        </header>
    );
}

export default NavBar;
