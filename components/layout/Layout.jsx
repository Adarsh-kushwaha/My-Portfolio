import React, { useState } from 'react';
import Navbar from './Navbar';


const Layout = ({ children }) => {
    const [darkMode, setDarkMode] = useState(true)

    return (
        <div className={darkMode ? "dark" : " "}>
            <div className='dark:bg-[#1A282B] bg-green-50 dark:text-white text-gray-800  py-8'>
                <main className="md:w-[50%] md:m-auto md:px-2 px-4">
                    <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout;