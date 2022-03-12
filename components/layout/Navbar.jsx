import React from 'react';
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { BsFillCircleFill } from "react-icons/bs";
// import { GiHamburgerMenu } from "react-icons/gi"
import Link from "next/link";


const Navbar = ({ darkMode, setDarkMode }) => {


    return (
        <div className='container flex flex-row items-center justify-between py-4 w-full mb-10'>
            <div className=''>
                <h2 className='font-bold text-lg hover:underline'><Link href="/"><a>Adarsh.</a></Link></h2>
            </div>
            <div className='flex flex-row justify-between items-center gap-6'>
                <div className='font-bold text-xl cursor-pointer flex flex-row items-center justify-start gap-4'>
                    <p className='text-[16px] font-medium hover:text-green-400 hover:underline'><Link href="/blogs"><a>Blogs</a></Link></p>
                    <p className='text-[16px] font-medium hover:text-green-400 hover:underline'><Link href="/projects"><a>Projects</a></Link></p>
                </div>
                <div className='flex flex-row justify-start items-center'>
                    <div onClick={() => { setDarkMode(!darkMode) }}>
                        {darkMode ?
                            <div className='flex flex-row bg-[#11191b] p-2 rounded-full justify-between items-center w-[70px] cursor-pointer '>
                                <MdDarkMode size={20} className="fill-[#808191]" />
                                <BsFillCircleFill className="fill-green-500" />
                            </div>
                            : <div className='flex flex-row bg-[#11191b] p-2 rounded-full justify-between items-center w-[70px] cursor-pointer'>
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