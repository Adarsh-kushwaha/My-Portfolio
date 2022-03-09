import Image from 'next/image';
import React from 'react';

const Bio = () => {
    return (
        <div className='md:flex md:flex-row md:items-center md:justify-center w-full gap-8'>
            <div className='grid grid-cols gap-4'>
                <h1 className='text-2xl font-bold '>Hi! I am Adarsh Kushwaha</h1>
                <p className='text-md font-medium '>I’m a full-stack engineer, a designer, and a content creator. I work at CodeChem as a developer/designer, and I’m a core member at Chakra UI, contributing as a Developer Advocate. I’m also an egghead.io instructor.
                </p>
                <div className='flex flex-row gap-4 justify-start items-center'>
                    <div>Twitter</div>
                    <div>Github</div>
                    <div>Linkedin</div>
                </div>
            </div>
            <div >
                <Image src="https://i.gifer.com/HTl5.gif" alt="profile" width={900} height={900} className=' rounded-full' />
            </div>
        </div>
    )
}

export default Bio;