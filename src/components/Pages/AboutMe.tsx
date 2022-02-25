
import './AboutMe.css';
import './PageCommon.css';

function AboutMe()
{
    return (
        <main className="AboutMe PageCommon">
            <div className="AboutMe-Head">
                <div>
                    <h1>
                        My name is<br />Jamie Thompson
                    </h1>
                    <p>
                        I am a mostly self-taught software developer based in Canterbury, NZ. Who is interested in 
                        furthering my knowledge and experience.
                    </p>
                </div>
                <img src="/Assets/images/head_shot.jpg" alt="me"></img>
            </div>
            <div className="AboutMe-Body">
                <p>
                    Starting when I was around 10 I was introduced to arduino and 
                    programming. I spent the next few years casually tinkering untill 
                    ICT classes in high school helped to give me a more solid foundation 
                    that I would build upon in my own time and during tertiary education.
                    <br /><br/>
                    Now I am relatively well versed in front-end web development, mostly vanilla and react.
                    But am fully willing to learn new frameworks and languages to further my knowledge and experice.
                    Recently I have also been delving into back-end frameworks, notably Next.js and Django.
                    While im still a bit new to back-end I would like to become more competent with it and 
                    at some point would like to go full-stack.
                    <br />< br />
                    Through tertiary education I developed some skills in C# and Java. Although not used 
                    all that often in my own projects, there is still a decent foundation to build off of.
                </p>
            </div>
        </main>
    )
}

export default AboutMe;
