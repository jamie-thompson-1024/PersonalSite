
import './Projects.css';
import '../PageCommon.css';
import SortFilterProjects from './SortFilterProjects';
import ProjectList from './ProjectList';
import { useCallback, useState } from 'react';
import { ProjectInfo, Order, Filter } from './ProjectInfo';

const allProjects: Array<ProjectInfo> = [
    {
        name: "Test Project 0",
        description: "Test Project Description",
        tags: ["framework", "language"],
        href: ""
    },
    {
        name: "Test Project 1",
        description: "Test Project Description",
        tags: ["framework", "language"],
        href: ""
    }
];

function Projects()
{
    const [projects, setProjects] = useState(allProjects);

    const onSortFilter = useCallback((order: Order, filter: Filter) => {

    }, [setProjects]);

    return (
        <main className="Projects PageCommon">
            <SortFilterProjects onChange={onSortFilter}/>
            <ProjectList projects={projects}/>
        </main>
    )
}

export default Projects;
