import Image from 'next/image';
import React from 'react';
import { FiArrowUpRight } from "react-icons/fi"
import Link from 'next/link';

const Bio = () => {
    return (
        <div className='md:flex md:flex-row md:items-center md:justify-center w-full gap-8'>
            <div className='grid grid-cols gap-3 '>
                <h1 className='md:text-3xl font-bold text-2xl'>Hi! I am Adarsh Kushwaha</h1>
                <p className='text-md font-bold text-gray-700 dark:text-gray-300 dark:font-medium '>I'm a teacher and developer who enjoys coding, especially when it comes to creating awesome websites. Nothing satisfies me more than creating new things and working on unique ideas. In 2019, I began as a wordpress developer and then shifted to react developer, and now I am learning <span className='font-bold text-green-400'>Blockchain Development.</span>
                </p>
                <div className='flex flex-row gap-4 justify-start items-center my-6'>
                    <div className=' flex flex-row gap-2 items-center justify-center text-blue-400 hover:underline font-bold'>
                        <Link href="https://twitter.com/heyadarshhere">
                            <a href='https://twitter.com/heyadarshhere'>Twitter</a>
                        </Link>
                        <FiArrowUpRight size={22} />
                    </div>
                    <div className=' flex flex-row gap-2 items-center justify-center dark:text-blue-200 hover:underline font-bold text-blue-700'>
                        <Link href="https://github.com/Adarsh-kushwaha">
                            <a href='https://github.com/Adarsh-kushwaha'>GitHub</a>
                        </Link>
                        <FiArrowUpRight size={22} />
                    </div>
                    <div className=' flex flex-row gap-2 items-center justify-center dark:text-blue-50 hover:underline font-bold text-blue-900'>
                        <Link href="https://www.linkedin.com/in/adarshkushwaha/" >
                            <a href='https://www.linkedin.com/in/adarshkushwaha/'>Linkedin</a>
                        </Link>
                        <FiArrowUpRight size={22} />
                    </div>

                </div>
            </div>
            <figure className=' p-8 md:p-0 w-[100%] overflow-hidden relative'>
                <Image src="https://i.gifer.com/QDyD.gif" alt="profile" width={1000} height={1000} className='rounded-full' />
                <div className='md:hidden p-2 px-4 rounded-full border-[1px] dark:border-[#b8b8b8ce] text-sm dark:bg-gray-700 bg-green-100 text-center mx-2 flex flex-row items-center justify-center gap-2 absolute top-[80%] left-[10%] right-[10%]'>
                    <div>📗</div>
                    <div>Learning about blockchain</div>
                </div>
            </figure>

        </div>
    )
}

export default Bio;