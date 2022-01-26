
import { ProjectInfo } from './ProjectInfo';
import './ProjectItem.css';

function ProjectItem(props: { projectInfo: ProjectInfo })
{
    return (
        <div className="ProjectItem">
            <a 
                className="ProjectItem-Title" 
                href={ "/project?" + props.projectInfo.markdown }>
                    { props.projectInfo.name }
            </a>
            <p className="ProjectItem-Description">{ props.projectInfo.description }</p>
            <div className="ProjectItem-TagBox">
                { props.projectInfo?.tags?.map((tag, i) => 
                    <p className="ProjectItem-Tag" key={i}>#{ tag }</p>
                )}
            </div>
            <picture className="ProjectItem-Image">
                <source srcSet={ props.projectInfo.thumbnail } />
                <img  
                    src="/Assets/icons/no-image.svg" 
                    alt={ props.projectInfo.name + " Thumbnail" } />
            </picture>
        </div>
    )
}

export default ProjectItem;
