
import { ProjectInfo } from './ProjectInfo';
import ProjectItem from './ProjectItem';
import './ProjectList.css';

function ProjectList(props: { projects: ProjectInfo[] })
{
    return (
        <div className="ProjectList">
            { props.projects.map((project, i) => 
                <ProjectItem projectInfo={ project } key={i} />
            )}
        </div>
    )
}

export default ProjectList;
