import React from 'react'

const FeaturedBlog = ({blog}) => {
    console.log(blog)
    return (
        <div>
            {/*<Link href={`/blogs/${blog.slug}`}>
                <a>
                    <div className='dark:hover:bg-[#015c509c] hover:bg-[#0bf8a975] cursor-pointer p-4 rounded-lg transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105'>
                        <Link href={`/blogs/${blog.slug}`}>
                            <a><h2 className='text-xl font-bold capitalize'>{blog.title}</h2></a>
                        </Link>
                        <div className='text-gray-500 text-sm flex flex-row justify-start gap-2 py-2'>
                            <p>{moment(blog.createdAt).format("YYYY-MM-DD")}</p>
                            <p className='w-[5px] h-[5px] rounded-full bg-gray-500 mt-2'></p>
                            <p>{blog.author.name}</p>
                        </div>
                        <p className='text-gray-500 pb-2 text-sm'>{blog.excerpt}</p>
                    </div>
                </a>
    </Link>*/}
        </div>
    )
}

export default FeaturedBlog