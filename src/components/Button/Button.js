import React from 'react';
import './Button.css';

function Button() {
    return (
        <div>
            <button className='sendMessage'>
                <svg>
                    <rect x='0' y='0' fill='none' width='100%' height='100%' />
                </svg>
                Send Message
            </button>
        </div>
    )
}

export default Button

