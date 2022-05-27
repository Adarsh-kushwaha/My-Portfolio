import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi"

const FeaturedProjects = ({ fProjects }) => {
  return (
    <div className='py-6 mb-6' >
      {
        fProjects.reverse().map((project) =>
          <div className='p-5 dark:bg-teal-900 bg-[#08e4a291] rounded-lg w-full transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 mt-6 ' key={project.title}>
            <div className='md:grid md:grid-cols-[1fr,5fr] flex flex-row items-center justify-start gap-4'>
              <div className='hidden md:block'><Image src={project.icon.url} alt="icon" width={100} height={100} /></div>
              <div>
                <div className='flex flex-row items-center justify-between w-full'>
                  <div className='pb-2'>
                    <h2 className='md:text-xl text-lg font-bold py-1'>{project.title}</h2>
                    <p className='text-sm text-gray-700 dark:text-gray-400 pb-1'>Completed On : {project.completedAt}</p>
                    <div className='flex flex-row gap-2'>{project.techUsed.map((tech) => <p className='bg-green-500 dark:bg-emerald-500 rounded-lg px-2 py-1 text-sm text-white' key={tech}>{tech}</p>)}</div>
                  </div>
                  <Link href={project.projectLink}>
                    <a href={project.projectLink} className='hover:underline flex flex-row items-center justify-center text-teal-800 dark:text-teal-400 font-bold'><p>View</p> <FiArrowUpRight size={22} /></a>
                  </Link>
                </div>
                <p className='md:text-[16px] text-[15px]'>{project.summary}</p>
              </div>
            </div>
          </div >
        )
      }


    </div>

  )
}

export default FeaturedProjects;