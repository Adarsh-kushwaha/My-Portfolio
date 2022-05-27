import moment from 'moment';
import React from 'react';
import Link from "next/link";

const BlogCard = ({ blog }) => {
  
  return (
    <Link href={`/blogs/${blog.slug}`}>
      <div className='dark:hover:bg-teal-900 hover:bg-[#0bf8a975] cursor-pointer rounded-lg transition md:p-4 p-2 hover:p-4 ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 '>
        <Link href={`/blogs/${blog.slug}`}>
          <a><h2 className='md:text-xl font-extrabold text-lg capitalize dark:text-green-300'>{blog.title}</h2></a>
        </Link>
        <div className='text-gray-500 text-sm flex flex-row justify-start gap-2 py-2'>
          <p>{moment(blog.createdAt).format("YYYY-MM-DD")}</p>
          <p className='w-[5px] h-[5px] rounded-full bg-gray-500 mt-2'></p>
          <p>{blog.author?.name}</p>
        </div>
        <p className=' pb-2 md:text-[16px] text-[15px] text-gray-800 dark:text-gray-300'>{blog.excerpt}</p>
      </div>
    </Link>
  )
}

export default BlogCard;