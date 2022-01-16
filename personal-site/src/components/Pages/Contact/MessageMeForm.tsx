
import { useEffect, useState } from 'react';

import './MessageMeForm.css';

const failMessage = "Error";

function MessageMeForm()
{
    const [formEnabled, setFormEnabled] = useState(false);
    const [botQuestion, setBotQuestion] = useState("");
    const [formId] = useState("" + Math.floor(Math.random() * 10000000000000));

    useEffect(() => {
        fetch('/message/botquestion', {
            method: 'POST',
            mode: 'same-origin',
            body: formId
        })
        .then(response => {
            if(response.ok)
                response.text()
                .then(text => text)
                .then((question) => {
                    setFormEnabled(true);
                    setBotQuestion(question);
                });
            else
            {
                setFormEnabled(false);
                setBotQuestion(failMessage);
            }
        });
    }, [setBotQuestion, formId]);

    return (
        <div className={ "MessageMeForm" + (failMessage === botQuestion ? " MessageMeForm-disabled" : "") }>
            <form action="/message/submit">
                <div>
                    <label
                        htmlFor="name">Name: </label>
                    <input 
                        name="name" type="text" readOnly={!formEnabled}></input>
                </div>

                <div>
                    <label
                        htmlFor="email">Email: </label>
                    <input 
                        name="email" type="email" readOnly={!formEnabled}></input>
                </div>

                <div>
                    <label
                        htmlFor="subject">Subject: </label>
                    <input 
                        name="subject" type="text" readOnly={!formEnabled}></input>
                </div>

                <div>
                    <label
                        htmlFor="message">Message: </label>
                    <textarea 
                        name="message" readOnly={!formEnabled}></textarea>
                </div>

                <div>
                    <label
                        htmlFor="bottest" 
                        className={ "" + failMessage === botQuestion ? " MessageMeForm-failed" : "" }>
                            { botQuestion }
                        </label>
                    <input 
                        name="bottest" readOnly={!formEnabled}></input>
                </div>
                    
                <input 
                    name="submit" type="button" readOnly={!formEnabled} value='Submit'></input>
            </form>
        </div>
    )
}

export default MessageMeForm;
