
import './Projects.css';
import '../PageCommon.css';
import SortFilterProjects from './SortFilterProjects';
import ProjectList from './ProjectList';
import { useCallback, useEffect, useState } from 'react';
import { ProjectInfo, Filter } from './ProjectInfo';

function Projects()
{
    const [projects, setProjects] = useState<ProjectInfo[]>([]);
    const [filteredProjects, setFilteredProjects] = useState<ProjectInfo[]>(projects);
    const [filter, setFilter] = useState<Filter>({});

    // applies order/filter to original projects list 
    const onSortFilter = useCallback((newFilter?: Filter) => {
        setFilter(newFilter ?? {});
    }, [setFilter]);

    // update filtered list when filter or projects are changed
    useEffect(() => {
        if(!filter || !filter.byTag)
        {            
            setFilteredProjects(projects);
        } else {
            let filterTags = filter.byTag ?? [];

            let newFiltered = projects.filter((project) => {
                return filterTags.every((filterTag) => {
                    return project.tags?.some((projectTag) => 
                        filterTag.toLocaleLowerCase() === projectTag.toLocaleLowerCase()
                    );
                });
            });

            setFilteredProjects(newFiltered);
        }
    }, [filter, projects]);

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
                }
            });
        });

        return () => {
            doAsync = false;
        };
    }, []);

    return (
        <main className="Projects PageCommon">
            <SortFilterProjects onChange={onSortFilter}/>
            <ProjectList projects={filteredProjects}/>
        </main>
    )
}

export default Projects;
