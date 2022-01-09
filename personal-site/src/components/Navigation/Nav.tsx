
import { useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Nav.css';

const landscapeMinWidth = 600;
const links = [
    { name: "Home", path: "/"},
    { name: "About Me", path: "/aboutme"},
    { name: "Projects", path: "/projects"},
    { name: "Contact Me", path: "/contactme"},
];

function Nav()
{
    const [min, setMin] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < landscapeMinWidth);

    const location = useLocation();

    const resize = useCallback(() => {
        setIsMobile(window.innerWidth < landscapeMinWidth);
    }, []);

    useEffect(() => {
        window.addEventListener('resize', resize);
        return () => {
            window.removeEventListener('resize', resize);
        };
    }, [resize]);

    if(isMobile)
    {
        // Portrait
        if(min)
        {
            return(
                <nav className="Nav Nav-Portrait-min">
                    <button onClick={() => { setMin(false); }}>{'>'}</button>
                    <div>{ links.find(link => link.path === location.pathname )?.name }</div>
                </nav>
            )
        }else{
            return(
                <nav className="Nav Nav-Portrait">
                    { links.map((link, i) => 
                        <Link 
                            className={link.path === location.pathname ? "Nav-ThisLocation" : ""} 
                            to={link.path} 
                            key={i}>
                                { link.name }
                        </Link>
                    ) }
                    <button onClick={() => { setMin(true); }}>^</button>
                </nav>
            )
        }
    }else{
        // Landscape
        return(
            <nav className="Nav Nav-Landscape">
                { links.map((link, i) => 
                        <Link 
                            className={link.path === location.pathname ? "Nav-ThisLocation" : ""} 
                            to={link.path} 
                            key={i}>
                                { link.name }
                        </Link>
                ) }
            </nav>
        )
    }
}

export default Nav;
