import React from 'react';
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { BsFillCircleFill } from "react-icons/bs";
// import { GiHamburgerMenu } from "react-icons/gi"
import Link from "next/link";


const Navbar = ({ darkMode, setDarkMode }) => {

    return (
        <div className='container flex flex-row items-center justify-between py-4 w-full mb-10'>
            <div className=''>
                <h2 className='font-bold md:text-2xl text-lg bg-gradient-to-r from-green-500 via-green-400 to-blue-500 hover:animate-pulse hover:shadow-md rounded-xl shadow-sm px-4 py-1 text-white'><Link href="/"><a>Adarsh.</a></Link></h2>
            </div>
            <div className='flex flex-row justify-between items-center md:gap-6 gap-4'>
                <div className='font-bold text-xl cursor-pointer flex flex-row items-center justify-start gap-4'>
                    <p className={`md:text-[16px] text-[15px] font-medium hover:text-green-500 hover:border-b-[3px] hover:border-green-500 }`} ><Link href="/blogs"><a>Blogs</a></Link></p>
                    <p className={`md:text-[16px] text-[15px] font-medium hover:text-green-500 hover:border-b-[3px] hover:border-green-500 `} ><Link href="/projects"><a>Projects</a></Link></p>
                </div>
                <div className='flex flex-row justify-start items-center'>
                    <div onClick={() => { setDarkMode(!darkMode) }}>
                        {darkMode ?
                            <div className='flex flex-row bg-[#213135] p-2 rounded-full justify-between items-center md:w-[70px] cursor-pointer w-[60px] '>
                                <MdDarkMode size={20} className="fill-[#808191]  " />
                                <BsFillCircleFill className="fill-green-500 " />
                            </div>
                            : <div className='flex flex-row bg-[#11191b] p-2 rounded-full justify-between items-center md:w-[70px] cursor-pointer w-[60px] '>
                                <BsFillCircleFill className="fill-green-500" />
                                <MdLightMode size={20} className="fill-[#808191]" />
                            </div>}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Navbar