
import { ProjectInfo } from './ProjectInfo';
import ProjectItem from './ProjectItem';
import './ProjectList.css';

function ProjectList(props: { projects: ProjectInfo[] })
{
    return (
        <div className="ProjectList">
            { props.projects.map((project) => 
                <ProjectItem projectInfo={ project } key={project.name} />
            )}
        </div>
    )
}

export default ProjectList;
