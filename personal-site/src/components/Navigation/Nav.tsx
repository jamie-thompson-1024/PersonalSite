
import SVG from 'react-inlinesvg';
import { useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Nav.css';

const landscapeMinWidth = 600;
const links = [
    { name: "Home", path: "/"},
    { name: "About Me", path: "/aboutme"},
    { name: "Projects", path: "/projects"},
    { name: "Resume", path: "/resume"},
    //{ name: "Contact Me", path: "/contactme"},
];

function Nav()
{
    const [min, setMin] = useState(true);
    // set mobile mode if screen width below threshold
    const [isMobile, setIsMobile] = useState(window.innerWidth < landscapeMinWidth);

    const [transition, setTransition] = useState(true);
    const [minTransition, setMinTransistion] = useState(true);

    const location = useLocation();

    const resize = useCallback(() => {
        setIsMobile(window.innerWidth < landscapeMinWidth);
    }, []);

    // update mode on window resize
    useEffect(() => {
        window.addEventListener('resize', resize);
        return () => {
            window.removeEventListener('resize', resize);
        };
    }, [resize]);

    if(isMobile)
    {
        if(min)
        {
            return(
                <nav className={`Nav Nav-Portrait-min ${ minTransition ? "Nav-expand-x-anim" : "Nav-contract-x-anim"}`}>
                    <button onClick={() => { 
                            setTransition(true); 
                            setMinTransistion(false);
                            setTimeout(() => {
                                setMin(false);}, 
                            350); }}>
                        <SVG src="/Assets/icons/hamburger-menu.svg" />
                    </button>
                    <div>{ links.find(link => location.pathname === link.path)?.name }</div>
                </nav>
            )
        }else{
            return(
                <nav className={`Nav Nav-Portrait ${ transition ? "Nav-expand-y-anim" : "Nav-contract-y-anim"}`}>
                    { links.map((link, i) => 
                        <Link 
                            className={link.path === location.pathname ? "Nav-ThisLocation" : ""} 
                            to={link.path} 
                            key={i}>
                                { link.name }
                        </Link>
                    ) }
                    <button onClick={() => { 
                            setTransition(false); 
                            setMinTransistion(true);
                            setTimeout(() => {
                                setMin(true);}, 
                            400); }}>
                        <SVG src="/Assets/icons/up-arrow.svg" />
                    </button>
                </nav>
            )
        }
    }else{
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
