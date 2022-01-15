
import './ContactMe.css';
import '../PageCommon.css';
import MessageMeForm from './MessageMeForm';

function ContactMe()
{
    return(
        <main className="ContactMe PageCommon">
            <div>
                <div>
                    <ul>
                        <li>Email: jamie.thompson.1024@gmail.com</li>
                        <li>Phone: [work phone number]</li>
                    </ul>
                </div>
                <MessageMeForm></MessageMeForm>
            </div>
        </main>
    )
}

export default ContactMe;
