import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Student = () => {
    const form = useRef();
    const [otp, setOtp] = useState(''); // State to store the OTP
    const [generatedOtp, setGeneratedOtp] = useState(''); // State to store the generated OTP

    const sendEmail = (e) => {
        e.preventDefault();

        const submited = document.getElementById("ans");


        emailjs.sendForm('service_w2jo5o4', 'template_7mowadg', form.current, 'CXS1RGo2QmIw9tLZk')
            .then(
                (result) => {
                    console.log('SUCCESS!', result.text);
                    submited.innerHTML = "Submitted";
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

    const sendOtp = (e) => {
        e.preventDefault();
        let digits = '0123456789';
        let OTP = '';
        for (let i = 0; i < 4; i++) {
            OTP += digits[Math.floor(Math.random() * digits.length)];
        }
        setGeneratedOtp(OTP);

        // Send OTP email
        emailjs.send('service_w2jo5o4', 'template_7mowadg', {
            user_name: form.current.user_name.value,
            email_id: form.current.email_id.value,
            otp: OTP // Include the OTP in the email data
        }, 'CXS1RGo2QmIw9tLZk')
            .then(
                (result) => {
                    console.log('SUCCESS!', result.text);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

    const verifyOtp = (e) => {
      
        if (otp === generatedOtp) {
            alert('OTP Verified Successfully!');
        } else {
            alert('Invalid OTP!');
        }
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
                        <input id="company" type="text" placeholder="ADDRESS" name='user_address' />
                    </div>

                    <div id="compName">
                        <input type="text" placeholder="AGE" name="user_age" />
                    </div>

                    <div id="compName">
                        <input id="phone" type="text" placeholder="PHONE NUMBER" name='user_number' maxLength="10" minLength="10" />
                    </div>

                    <div id="compName">
                        <input id="company" type="email" placeholder="EMAIL" name='email_id' />
                    </div>

                    <div id="compName">
                        <input type="password" placeholder="PASSWORD" name="user_password" />
                    </div>

                    <button className='btnD' id="sendbtn" onClick={sendOtp}>Send OTP</button>

                    <div id="compName">
                        <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
                    </div>

                    <button className='btnD' onClick={verifyOtp}>Verify OTP</button>

                    <div id="ans"></div>
                </div>
            </form>
        </div>
    )
}

export default Student;
