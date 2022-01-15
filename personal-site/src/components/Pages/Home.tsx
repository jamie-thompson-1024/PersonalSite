
import './Home.css';
import './PageCommon.css';

function Home()
{
    return (
        <main className="Home PageCommon">
            <div className="Home-TextContainer">
                <h1>Hi, My name is Jamie Thompson</h1>
                <h2>Im a programmer who specialises in web development</h2>
            </div>
            <img src="/images/portrait.jpg" alt="my portrait"></img>
        </main>
    )
}

export default Home;
