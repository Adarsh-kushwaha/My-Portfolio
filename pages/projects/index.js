import { getProjects } from "../../services";

const projects = ({ project }) => {
    return (
        <>
            Currently Site Is In Development Phase !
        </>
    )
}

export async function getStaticProps() {
    const project = (await getProjects() || []);

    return {
        props: {
            project
        }
    }
}

export default projects;