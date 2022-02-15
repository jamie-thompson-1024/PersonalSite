
import { useCallback } from 'react';
import { ProjectInfo } from './ProjectInfo';
import './ProjectItem.css';

function ProjectItem(props: { projectInfo: ProjectInfo })
{
    const onImageNotFound = useCallback((e) => {
        e.target.src = "/Assets/icons/no-image.svg";
    }, []);

    return (
        <article className="ProjectItem">
            <img 
                className="ProjectItem-Image"
                src={ props.projectInfo.thumbnail } 
                alt={ props.projectInfo.name + " Thumbnail" } 
                onError={onImageNotFound}/>
            <h2 className="ProjectItem-Title">
                <a href={ "/project?" + props.projectInfo.markdown }>
                    { props.projectInfo.name }
                </a>
            </h2>
            <div className="ProjectItem-TagBox">
                { props.projectInfo?.tags?.map((tag, i) => 
                    <p className="ProjectItem-Tag" key={i}>#{ tag }</p>
                )}
            </div>
            <p className="ProjectItem-Description">
                { props.projectInfo.description }
            </p>
        </article>
    );
}

export default ProjectItem;
