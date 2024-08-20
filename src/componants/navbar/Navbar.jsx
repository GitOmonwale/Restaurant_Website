import React, { useState } from "react";
import DropdownMenu from "./drop";
import search from '../../assets/search.svg';
import bag from '../../assets/shoppingBag.svg';
import contact from '../../assets/contact.svg';
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";

const options1 = [];
const options2 = [];

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    // Variants pour l'animation du menu
    const menuVariants = {
        hidden: { opacity: 0, height: 0 },
        visible: { opacity: 1, height: "auto", transition: { duration: 0.5 } },
    };

    return (
        <header className="w-full">
            <div className="flex justify-between items-center mt-5 px-4 md:px-0">
                <motion.h1 
                    className="font-extrabold text-3xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="bg-green text-white uppercase p-1 mr-1 rounded-lg">F</span>
                    <span className="text-black uppercase">OODI</span>
                </motion.h1>
                
                {/* Hamburger Menu Icon for Mobile */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-3xl focus:outline-none">
                        {isOpen ? <RxCross2 /> : <IoMdMenu />}
                    </button>
                </div>

                {/* Main Menu */}
                <nav className={`md:flex hidden absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent z-50`}>
                    <ul className="flex flex-col md:flex-row md:items-center md:justify-center">
                        <a href="#" className="px-5 py-2.5">Home</a>
                        <DropdownMenu buttonText="Menu" options={options1} />
                        <DropdownMenu buttonText="Services" options={options2} />
                        <a href="#" className="px-5 py-2.5">Offers</a>
                    </ul>
                </nav>

                {/* Right Icons */}
                <div className="hidden md:flex gap-5 items-center">
                    <motion.img 
                        src={search} 
                        alt="Search" 
                        initial={{ opacity: 0, x: 20 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        transition={{ duration: 0.5 }} 
                    />
                    <motion.img 
                        src={bag} 
                        alt="Shopping Bag" 
                        initial={{ opacity: 0, x: 20 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        transition={{ duration: 0.5, delay: 0.1 }} 
                    />
                    <motion.button 
                        className="text-white py-2 px-4 rounded-2xl bg-green flex gap-2 items-center"
                        initial={{ opacity: 0, scale: 0.8 }} 
                        animate={{ opacity: 1, scale: 1 }} 
                        transition={{ duration: 0.5, delay: 0.2 }} 
                    >
                        <img src={contact} alt="Contact" width={20} height={8} />
                        <span>Contact us</span>
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu Links */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        className="md:hidden flex flex-col items-center mt-4 bg-white shadow-md overflow-hidden"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={menuVariants}
                    >
                        <ul className="flex flex-col items-center">
                            <a href="#" className="px-5 py-2.5">Home</a>
                            <DropdownMenu buttonText="Menu" options={options1} />
                            <DropdownMenu buttonText="Services" options={options2} />
                            <a href="#" className="px-5 py-2.5">Offers</a>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

export default NavBar;
