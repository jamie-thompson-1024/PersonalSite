
import { ChangeEvent, useCallback, useState } from 'react';
import { Filter } from './ProjectInfo';

import './SortFilterProjects.css';

function SortFilterProjects(props: { onChange: (newFilter: Filter) => void })
{

    const [tagSearchValue, setTagSearchValue] = useState("");

    const onSearchChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
        let newTagSearchValue = ev.target.value;

        setTagSearchValue(newTagSearchValue);

        let tagList = newTagSearchValue.split(' ').filter((tag) => tag !== '');
        props.onChange({ byTag: tagList.length !== 0 ? tagList : undefined });
    }, [props]);

    return (
        <div className="SortFilterProjects">
            <input 
                type="text" 
                placeholder="search tags" 
                value={tagSearchValue} 
                onChange={onSearchChange}></input>
        </div>
    )
}

export default SortFilterProjects;
