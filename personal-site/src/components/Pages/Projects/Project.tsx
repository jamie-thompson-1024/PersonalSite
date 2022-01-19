
import { useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'
import { useEffect, useState } from 'react';

import './Project.css';
import '../PageCommon.css';

function Project()
{
    // get path to markdown file from url search string
    const markdownPath = decodeURIComponent(
        useLocation().search.substring(1));
        
    const [markdown, setMarkdown] = useState("");

    // fetch markdown file contents useing path from url
    useEffect(() => {
        fetch(`/Assets/projects/${markdownPath}`)
        .then((response) => {
            response.text()
            .then((text) => {
                setMarkdown(text);
            });
        });
    }, [markdownPath, setMarkdown]);

    return (
        <main className="Project PageCommon">
            <ReactMarkdown children={ markdown } />
        </main>
    )
}

export default Project;
