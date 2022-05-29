import React from 'react'
import Link from 'next/link';
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi"

const ProjectCard = ({ projects }) => {
  
    return (
        <div className='py-4'>
            {
                projects?.reverse().map((project) =>
                    <div className='p-4 dark:bg-teal-900 bg-[#08e4a291] rounded-lg w-full transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 mt-6' key={project.node.title}>
                        <div className='md:grid md:grid-cols-[1fr,4fr] flex flex-row items-center justify-start gap-6 '>
                            <div className='hidden md:block'><Image src={project.node.icon.url} alt="icon" width={150} height={150} /></div>
                            <div>
                                <div className='flex flex-row items-center justify-between w-full'>
                                    <div className='pb-2'>
                                        <h2 className='text-xl font-bold py-1'>{project.node.title}</h2>
                                        <p className='text-sm text-gray-700 dark:text-gray-400 pb-1'>Completed On : {project.node.completedAt}</p>
                                        <div className='flex flex-row gap-2'>{project.node.techUsed.map((tech) => <p className='bg-green-500 rounded-lg px-2 py-1 text-sm' key={tech}>{tech}</p>)}</div>
                                    </div>
                                    <Link href={project.node.projectLink}>
                                        <a href={project.node.projectLink} className='hover:underline flex flex-row items-center justify-center text-green-700 dark:text-teal-400 '><p>View</p> <FiArrowUpRight size={22} /></a>
                                    </Link>
                                </div>
                                <p>{project.node.summary}</p>
                            </div>
                        </div>
                    </div >
                )
            }


        </div>
    )
}

export default ProjectCard