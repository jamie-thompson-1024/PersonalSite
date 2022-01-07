
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
                <Route path="/">
                    <Home />
                </Route>
                <Route path="/aboutme">
                    <AboutMe />
                </Route>
                <Route path="/projects">
                    <Projects />
                </Route>
                <Route path="/project">
                    
                </Route>
                <Route path="/contactme">
                    <ContactMe />
                </Route>
            </Routes>
        </div>
    )
}

export default Content;
