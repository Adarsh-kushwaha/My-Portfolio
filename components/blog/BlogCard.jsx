import React from 'react'

const BlogCard = ({ post }) => {
  return (
    
      <div className='dark:hover:bg-[#015c509c] hover:bg-[#0bf8a975] cursor-pointer p-4 rounded-lg transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105'>
        <h2 className='text-xl font-bold capitalize'>Blog One Heding</h2>
        <div className='text-gray-500 text-sm flex flex-row justify-start gap-2 py-2'>
          <p>1 week ago</p>
          <p className='w-[5px] h-[5px] rounded-full bg-gray-500 mt-2'></p>
          <p>3 min to read</p>
        </div>
        <p className='text-gray-500 pb-2 text-sm'>Web development, with a focus on the React ecosystem. I’ve written a total of 6 articles</p>
      </div>
   
  )
}

export default BlogCard