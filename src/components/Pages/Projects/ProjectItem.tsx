
import { useCallback, useState } from 'react';
import { ProjectInfo } from './ProjectInfo';
import './ProjectItem.css';

function ProjectItem(props: { projectInfo: ProjectInfo })
{
    const [ imgSrc, setImgSrc ] = useState(props.projectInfo.thumbnail ?? "/Assets/icons/no-image.svg");

    const onImageNotFound = useCallback(() => {
        setImgSrc("/Assets/icons/no-image.svg");
    }, [setImgSrc]);

    return (
        <article className="ProjectItem">
            <img 
                className="ProjectItem-Image" 
                src={ imgSrc } 
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
