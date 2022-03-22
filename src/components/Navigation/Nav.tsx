
import SVG from 'react-inlinesvg';
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
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

    const navBarRef = useRef<HTMLDivElement>(null);
    const navBarDisplacerRef = useRef<HTMLDivElement>(null);

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

    // make nav bar displacer element match nav bar height
    // to offset page content
    useLayoutEffect(() => {
        let navBar = navBarRef.current;
        let navBarDisplacer = navBarDisplacerRef.current;
        let timeout: any;
            
        timeout = setTimeout(() => {
            if(navBar && navBarDisplacer)
                navBarDisplacer.style.minHeight = `${navBar.offsetHeight}px`;
        }, 30);

        return () => {
            clearTimeout(timeout);
        };
    });

    if(isMobile)
    {
        if(min)
        {
            return(
                <>
                    <nav ref={navBarRef} className={`Nav Nav-Portrait-min ${ minTransition ? "Nav-expand-x-anim" : "Nav-contract-x-anim"}`}>
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
                    <div ref={navBarDisplacerRef}></div>
                </>
            )
        }else{
            return(
                <>
                    <nav ref={navBarRef} className={`Nav Nav-Portrait ${ transition ? "Nav-expand-y-anim" : "Nav-contract-y-anim"}`}>
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
                    <div ref={navBarDisplacerRef}></div>
                </>
            )
        }
    }else{
        return(
            <>
                <nav ref={navBarRef} className="Nav Nav-Landscape">
                    { links.map((link, i) => 
                            <Link 
                                className={link.path === location.pathname ? "Nav-ThisLocation" : ""} 
                                to={link.path} 
                                key={i}>
                                    { link.name }
                            </Link>
                    ) }
                </nav>
                <div ref={navBarDisplacerRef}></div>
            </>
        )
    }
}

export default Nav;
