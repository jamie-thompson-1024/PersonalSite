
import './Home.css';
import './PageCommon.css';

function Home()
{
    return (
        <main className="Home PageCommon">
            <div className="Home-TextContainer">
                <p>
                I am a 21 year old developer interested in furthering my knowledge 
                and experience preferably in a front end position. I have had an interest 
                in programming for as long as i can remember and over the past 3 years 
                have significantly improved my knowledge and skillset within web dev.
                </p>
            </div>
            <img src="/images/portrait.jpg" alt="my portrait"></img>
        </main>
    )
}

export default Home;
