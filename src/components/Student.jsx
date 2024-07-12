import React, {useRef} from 'react';
import emailjs, { send } from '@emailjs/browser';

const Student = () => {


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const submited = document.getElementById("ans");

        emailjs.sendForm('service_w2jo5o4', 'template_7mowadg', form.current, {
                publicKey: 'CXS1RGo2QmIw9tLZk',
            })
            .then(
                (submitted) => {
                    console.log('SUCCESS!');
                    submitted.innerHTML = "Submitted";
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };


    return (
        <div id='cont' className='rightM'>


            <form ref={form} onSubmit={sendEmail}>
                <h3>Student Registration</h3>
                <div className="formpart">

                    <div id="compName">
                        <input id="firstN" type="text" placeholder="NAME" name='user_name' />
                    </div>


               


                    <div id="compName">
                        <input id="company" type="text" placeholder="ADDRESS" name='user_address'/>
                    </div>


                    <div id="compName">
                        <input type="text" placeholder="AGE" name="user_age" />

                    </div>

                    <div id="compName">
                        <input id="phone" type="text" placeholder="PHONE NUMBER" name='user_number' maxLength="10" minLength="10" />
                    </div>


                    <div id="compName">
                        <input id="company" type="email" placeholder="EMAIL" name='email_id'/>
                    </div>

                    <div id="compName">
                        <input type="password" placeholder="PASSWORD" name="user_password" />
                    </div>


                    <input id="sendbtn" type="submit" value="Send" />

                    <div id="ans"></div>
                </div>

            </form>



        </div>
    )
}

export default Student;
