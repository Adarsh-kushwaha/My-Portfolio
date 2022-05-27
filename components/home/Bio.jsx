import Image from 'next/image';
import React from 'react';
import { FiArrowUpRight } from "react-icons/fi"
import Link from 'next/link';
import profile from "../../assets/adarsh.png"

const Bio = ({ fProjects }) => {
    return (
        <div className='md:flex md:flex-row md:items-center md:justify-center w-full gap-8'>
            <div className='grid grid-cols gap-3 '>
                <div className='md:text-3xl text-xl'><span className='font-bold'>Hi!</span>👋<span className='font-bold'> I am</span> <span className='text-2xl md:text-4xl px-1 dark:text-green-400 text-green-500 font-extrabold'>Adarsh Kushwaha</span></div>
                <div className='text-md'> I am <span className='text-green-500 font-bold' >Frontend Web Developer</span> 💻 and have handfull experience in Backend develpment, currently living in India. <br />I started my career as a 👨‍🏫teacher and then switched to full time web developer. I do <span className='text-green-500 font-bold'>Freelance, Make Videos, Write Blogs</span> and also looking for <span className='font-extrabold underline'>good opportunity.</span> Currently Learning <span className='font-bold text-green-500'>Blockchain Development</span> and working on my new course ✌️.
                </div>
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

            <figure className='p-8 md:p-0 w-[100%]'>
                <Image src={profile} alt="profile" width={1500} height={1500} className='rounded-full flex-wrap' />

            </figure>

        </div>
    )
}

export default Bio;