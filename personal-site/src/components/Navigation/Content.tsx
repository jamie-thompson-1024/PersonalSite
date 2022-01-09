
import { Routes, Route } from 'react-router-dom';
import AboutMe from '../Pages/AboutMe';
import ContactMe from '../Pages/Contact/ContactMe';
import Home from '../Pages/Home';
import Projects from '../Pages/Projects/Projects';

import './Content.css';

function Content()
{
    return(
        <div className="Content">
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/aboutme" element={ <AboutMe /> } />
                <Route path="/projects" element={ <Projects /> } />
                <Route path="/project" element={ undefined } />
                <Route path="/contactme" element={ <ContactMe /> } />
            </Routes>
        </div>
    )
}

export default Content;
