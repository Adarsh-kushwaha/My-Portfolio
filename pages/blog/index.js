import BlogCard from "../../components/Blog/BlogCard";

const DUMMY_POST = [{ title: "Blog 1 Heading", excerpt: "this id blog one excerpt to get idea about blog is about what?" },
{ title: "Blog 2 Heading", excerpt: "this id blog one excerpt to get idea about blog is about what?" }]

const Blog = () => {
    return <>
        <div>
            <div className="text-xl font-bold py-2">Blogs.</div>
            <div className="text-md my-2">Web development, with a focus on the React ecosystem. I’ve written a total of 6 articles</div>
            <div className="flex justify-center">
                <div className="my-3 w-full">
                    <input
                        type="text"
                        className="
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        bg-transparent bg-clip-padding
                        border border-solid border-green-400
                        rounded
                        transition
                        ease-in-out
                        m-0
                     focus:text-gray-700 dark:focus:text-white focus:bg-white dark:focus:bg-[#223236] focus:border-green-600 focus:outline-none"
                        id="exampleFormControlInput1"
                        placeholder="Example label"
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-14">
                {DUMMY_POST.map((post, index) => <BlogCard key={post.title} title={post.title} excerpt={post.excerpt} />
                )}
            </div>
        </div>
    </>
}

export default Blog;