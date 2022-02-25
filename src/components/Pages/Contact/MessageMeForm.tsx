
import { useEffect, useState } from 'react';

import './MessageMeForm.css';

const failMessage = "Error";

function MessageMeForm()
{
    const [formEnabled, setFormEnabled] = useState(false);
    const [botQuestion, setBotQuestion] = useState("");
    // floor large random number to get likely unique string
    const [formId] = useState("" + Math.floor(Math.random() * 10000000000000));

    // get bot test question from server using unique string
    useEffect(() => {
        fetch('/message/botquestion', {
            method: 'POST',
            mode: 'same-origin',
            body: formId
        })
        .then(response => {
            if(response.ok)
                // if seccesful enable form and set question
                response.text()
                .then(text => text)
                .then((question) => {
                    setFormEnabled(true);
                    setBotQuestion(question);
                });
            else
            {
                // if failed disable form and set question to error message
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
                        // if question equal to fail message color red
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
