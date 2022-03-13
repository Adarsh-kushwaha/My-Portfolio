import Bio from "../components/home/Bio";
import FeaturedBlog from "../components/home/FeaturedBlog";
import FeaturedProjects from "../components/home/FeaturedProjects";
import { getFeaturedProjects, getFeaturedBlogs } from "../services";

const HomePage = ({ projects, blogs }) => {
  return (
    <>
      <Bio fProjects={projects} />
      <h2 className="font-bold text-xl my-8">Projects.</h2>
      <FeaturedProjects fProjects={projects} />
      <h2 className="font-bold text-xl my-8">Blogs.</h2>
      <FeaturedBlog blog={blogs}/>
    </>
  )
}


export async function getStaticProps() {
  const projectsData = (await getFeaturedProjects() || []);
  const blogsData = (await getFeaturedBlogs() || []);

  return {
    props: {
      projects: projectsData,
      blogs: blogsData,
    }
  }

};





export default HomePage;