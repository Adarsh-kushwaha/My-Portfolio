import Bio from "../components/home/Bio";
import BlogCard from "../components/blog/BlogCard";
// import FeaturedBlog from "../components/home/FeaturedBlog";
import FeaturedProjects from "../components/home/FeaturedProjects";
import { getFeaturedProjects, getFeaturedBlogs, getPosts } from "../services";


const HomePage = ({ projects, blogs }) => {
  return (
    <div>
      <Bio fProjects={projects} />
      <h2 className="font-bold text-xl my-8">Projects.</h2>
      <FeaturedProjects fProjects={projects} />
      <h2 className="font-bold text-xl my-8">Blogs.</h2>
      <div className="grid grid-cols-1 gap-6 mt-14 p-1">
        {blogs?.map((blog, index) => <BlogCard key={index} blog={blog.node} />
        )}
      </div>
    </div >
  )
}


export async function getStaticProps() {
  const projectsData = (await getFeaturedProjects() || []);
  const blogsData = (await getFeaturedBlogs() || []);
  const blogs = (await getPosts() || DUMMY_POST);

  return {
    props: {
      projects: projectsData,
      blogs: blogs,
    }
  }

};




export default HomePage;