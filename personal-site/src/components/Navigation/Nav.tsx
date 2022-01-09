
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Nav.css';

const landscapeMinWidth = 800;
const links = [
    { name: "Home", path: "/"},
    { name: "About Me", path: "/aboutme"},
    { name: "Projects", path: "/projects"},
    { name: "Contact Me", path: "/contactme"},
];

function Nav()
{
    const [min, setMin] = useState(false);
    const location = useLocation();

    if(window.innerWidth < landscapeMinWidth)
    {
        // Portrait
        if(min)
        {
            return(
                <div className="Nav">
                    <button>{'>'}</button>
                    <div>{ location }</div>
                </div>
            )
        }else{
            return(
                <div className="Nav">
                    { links.map((link, i) => 
                        <Link to={link.path} key={i}>{ link.name }</Link>
                    ) }
                    <button>^</button>
                </div>
            )
        }
    }else{
        // Landscape
        return(
            <div className="Nav">
                { links.map((link, i) => 
                    <Link to={link.path} key={i}>{ link.name }</Link>
                ) }
            </div>
        )
    }
}

export default Nav;
