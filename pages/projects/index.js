import ProjectCard from "../../components/project/ProjectCard";
import { getProjects } from "../../services";

const projects = ({ projects }) => {

    return (
        <div>
            <div className="mb-2">
                <h2 className="text-2xl font-bold border-b-4 inline  border-gray-800 dark:border-white">All Projects</h2>
            </div>
            <ProjectCard projects={projects} />
        </div>
    )
}

export async function getStaticProps() {
    const projects = (await getProjects() || []);

    return {
        props: {
            projects
        }
    }
}

export default projects;