
import './Resume.css';

function Resume()
{
    return (
        <main className="Resume PageCommon">
            <object data="/Assets/Resume.pdf" type="application/pdf">
                <div>No PDF viewer available</div>
                <a href="/Assets/Resume.pdf">PDF Availbale here</a>
            </object>
        </main>
    )
}

export default Resume;
