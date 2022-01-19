
import './Projects.css';
import '../PageCommon.css';
import SortFilterProjects from './SortFilterProjects';
import ProjectList from './ProjectList';
import { useCallback, useEffect, useState } from 'react';
import { ProjectInfo, Order, Filter } from './ProjectInfo';

function Projects()
{
    const [projects, setProjects] = useState<ProjectInfo[]>([]);
    const [filteredProjects, setFilteredProjects] = useState<ProjectInfo[]>(projects);

    // applies order/filter to original projects list 
    const onSortFilter = useCallback((order?: Order, filter?: Filter) => {
        setFilteredProjects(projects);
    }, [setFilteredProjects, projects]);

    // retreives project list
    useEffect(() => {
        let doAsync = true;

        fetch('/Assets/projects/projects.json')
        .then((response) => {
            response.json()
            .then(({ projects }) => {
                if(doAsync)
                {
                    setProjects(projects);
                    onSortFilter();
                }
            });
        });

        return () => {
            doAsync = false;
        };
    }, [setProjects, onSortFilter]);

    return (
        <main className="Projects PageCommon">
            <SortFilterProjects onChange={onSortFilter}/>
            <ProjectList projects={filteredProjects}/>
        </main>
    )
}

export default Projects;
