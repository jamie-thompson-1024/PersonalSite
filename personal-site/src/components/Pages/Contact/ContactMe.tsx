
import './ContactMe.css';
import '../PageCommon.css';
import MessageMeForm from './MessageMeForm';

function ContactMe()
{
    return(
        <main className="ContactMe PageCommon">
            <div>
                <MessageMeForm></MessageMeForm>
            </div>
        </main>
    )
}

export default ContactMe;
