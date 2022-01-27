
import { useCallback } from 'react';
import { ProjectInfo } from './ProjectInfo';
import './ProjectItem.css';

function ProjectItem(props: { projectInfo: ProjectInfo })
{
    const onImageNotFound = useCallback((e) => {
        e.target.src = "/Assets/icons/no-image.svg";
    }, []);

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
            <img 
                className="ProjectItem-Image"
                src={ props.projectInfo.thumbnail } 
                alt={ props.projectInfo.name + " Thumbnail" } 
                onError={onImageNotFound}/>
        </div>
    )
}

export default ProjectItem;
