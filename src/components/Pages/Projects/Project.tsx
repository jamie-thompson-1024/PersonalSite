
import { useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'
import React, { useEffect, useState } from 'react';

import './Project.css';
import '../PageCommon.css';

function flatten(text: string, child: any): string {
    return typeof child === 'string'
      ? text + child
      : React.Children.toArray(child.props.children).reduce(flatten, text)
}
  
function HeadingRenderer(props: { children: any, level: any }) {
    var children = React.Children.toArray(props.children)
    var text = children.reduce(flatten, '')
    var slug = text.toLowerCase().replace(/\W/g, '-')
    return React.createElement('h' + props.level, {id: slug}, props.children)
 }

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
            <ReactMarkdown 
                children={ markdown }
                components={{
                    h1: HeadingRenderer,
                    h2: HeadingRenderer,
                    h3: HeadingRenderer,
                    h4: HeadingRenderer,
                    h5: HeadingRenderer,
                    h6: HeadingRenderer,
                }}/>
        </main>
    )
}

export default Project;
