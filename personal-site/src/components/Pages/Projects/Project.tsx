
import { useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'
import { useEffect, useState } from 'react';

import './Project.css';
import '../PageCommon.css';

function Project()
{
    const markdownPath = decodeURIComponent(
        useLocation().search.substring(1));
        
    const [markdown, setMarkdown] = useState("");

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
