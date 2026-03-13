"use client";
/*import React from "react";*/
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";


import { FaBars } from "react-icons/fa";

const Navbar = () => {
    const router = useRouter();
    const [open, setOpen] = useState(false);

    const handleNavClick = () => {
        setOpen(false)
    }

   


    return (
        
        <div className="fixed top-0 left-0 w-full z-50 bg-black shadow-md text-white">
          <div className="flex items-center justify-between px-6 py-3">

            <Image 
                src="/Images/Logo.png"
                width={140}
                height={140}
                alt="Logo Image"
            />

            {/* Desktop Menu  */}
                 <div  className="hidden font-sans md:flex gap-10 text-m font-medium pr-8">
                    <a 
                        href="#hero"
                        className="cursor-pointer hover:text-custom-hover"
                        onClick={handleNavClick}
                    > 
                    Home
                    </a>   
                    <a 
                        href="#about"
                        className="cursor-pointer hover:text-custom-hover"
                        onClick={handleNavClick}
                    > 
                    About
                    </a> 
                    <a 
                        href="#services"
                        className="cursor-pointer hover:text-custom-hover"
                        onClick={handleNavClick}
                    > 
                    Services
                    </a>   
                    <a 
                        href="#portfolio"
                        className="cursor-pointer hover:text-custom-hover"
                        onClick={handleNavClick}
                    > 
                    Portfolio
                    </a> 
                    <a 
                        href="#contact"
                        className="cursor-pointer hover:text-custom-hover"
                        onClick={handleNavClick}
                    > 
                    Contact
                    </a>        
                </div>
{/* Mobile Menu Button  */}

            <button
                className="md:hidden text-2xl pt-5"
                onClick={() => setOpen(!open)}
            >
                <FaBars />
                {/* Add the button logo */}
            </button>
          </div>


{/* Mobile Menu  */}
            {open && ( 
                <div  className=" font-sans absolute top-22 left-0 w-full bg-black flex flex-col text-center pl-6 gap-4 py-4 md:hidden ">
                <a 
                    href="#hero"
                    className="cursor-pointer hover:text-custom-hover"
                    onClick={handleNavClick}
                 > 
                 Home
                </a>   
                 <a 
                    href="#about"
                    className="cursor-pointer hover:text-custom-hover"
                    onClick={handleNavClick}
                 > 
                 About
                </a> 
                 <a 
                    href="#services"
                    className="cursor-pointer hover:text-custom-hover"
                    onClick={handleNavClick}
                 > 
                 Services
                </a>   
                 <a 
                    href="#portfolio"
                    className="cursor-pointer hover:text-custom-hover"
                    onClick={handleNavClick}
                 > 
                 Portfolio
                </a> 
                 <a 
                    href="#contact"
                    className="cursor-pointer hover:text-custom-hover"
                    onClick={handleNavClick}
                 > 
                 Contact
                </a>        
            </div>
            )} 
            
        </div>
    );
};

export default Navbar;