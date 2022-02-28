import React from 'react';
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { BsFillCircleFill } from "react-icons/bs";


const Navbar = ({ darkMode, setDarkMode }) => {

    const themeHandler = () => {
        setDarkMode(!darkMode)
    }

    return (
        <div className='container flex flex-row items-center justify-between py-4'>
            <div className=''>
                <h2 className='font-bold text-xl'>Adarsh</h2>
            </div>
            <div className='flex flex-row justify-between items-center gap-6'>
                <h2 className='font-bold text-xl'>Menu</h2>
                <div className='flex flex-row justify-start items-center'>
                    <div className='px-4' onClick={() => { setDarkMode(!darkMode) }}>
                        {darkMode ?
                            <div className='flex flex-row bg-[#353945] p-1.5 rounded-full justify-between items-center w-[70px] cursor-pointer'>
                                <MdDarkMode size={20} className="fill-[#808191]" />
                                <BsFillCircleFill className="fill-blue-500" />
                            </div>
                            : <div className='flex flex-row bg-[#353945] p-1.5 rounded-full justify-between items-center w-[70px] cursor-pointer'>
                                <BsFillCircleFill className="fill-blue-500" />
                                <MdLightMode size={20} className="fill-[#808191]" />
                            </div>}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Navbar