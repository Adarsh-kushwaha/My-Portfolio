import ProjectCard from "../../components/project/ProjectCard";
import { getProjects } from "../../services";

const projects = ({ projects }) => {
    
    return (
        <div>
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