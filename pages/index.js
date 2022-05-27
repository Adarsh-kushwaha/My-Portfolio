import Bio from "../components/home/Bio";
import BlogCard from "../components/blog/BlogCard";
import FeaturedProjects from "../components/home/FeaturedProjects";
import { getFeaturedProjects, getPosts } from "../services";


const HomePage = ({ projects, blogs }) => {
  return (
    <div>
      <Bio fProjects={projects} />
      <h2 className="text-2xl my-10 font-bold border-b-4 inline  border-gray-800 dark:border-white">Projects</h2>
      <FeaturedProjects fProjects={projects} />
      <h2 className="text-2xl font-bold border-b-4 inline  border-gray-800 dark:border-white">Blogs.</h2>
      <div className="grid grid-cols-1 gap-6 mt-2 pt-8">
        {blogs.reverse().map((blog, index) => {
          if (blog.node.featured) {
            return <BlogCard key={index} blog={blog.node} />
          }
        }
        )}
      </div>
    </div >
  )
}


export async function getStaticProps() {
  const projectsData = (await getFeaturedProjects() || []);
  const blogs = (await getPosts() || DUMMY_POST);

  return {
    props: {
      projects: projectsData,
      blogs: blogs,
    }
  }

};




export default HomePage;