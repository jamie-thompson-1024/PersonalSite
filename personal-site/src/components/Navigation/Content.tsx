
import { Routes, Route } from 'react-router-dom';
import AboutMe from '../Pages/AboutMe';
import ContactMe from '../Pages/Contact/ContactMe';
import Home from '../Pages/Home';
import Resume from '../Pages/Resume';
import Project from '../Pages/Projects/Project';
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
                <Route path="/project" element={ <Project /> } />
                <Route path="/resume" element={ <Resume /> } />
                { /*<Route path="/contactme" element={ <ContactMe /> } />*/ }
            </Routes>
        </div>
    )
}

export default Content;
