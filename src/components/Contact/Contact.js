import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div>
            <section className='contact-wrapper'>
                <div className='contact-container'>
                    <h1 className='contact-header'>Contact Me</h1>
                    <div className='contact-row'>
                        <form>
                            <div className='name-email-half'>
                                <div>
                                    <input type='text' name='name' id='name' placeholder='Name' />
                                </div>
                                <div>
                                    <input type='text' name='email' id='email' placeholder='Email' />
                                </div>
                            </div>
                            <div>
                                <textarea type='submit' name='message' id='message' placeholder='Message' />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact