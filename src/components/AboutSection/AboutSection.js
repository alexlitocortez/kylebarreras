import React from 'react';
import './AboutSection.css';
import kyleB from '/Users/l/kylebarreras/src/images/example_picture.jpeg';

function AboutSection() {
    return (
        <div>
            <div className='AboutSection-container'>
                <div className='kyle-image-container'>
                    <img className='kyleb-picture' src={kyleB} />
                </div>
                <div className='AboutSection-text'>
                    <h1 className='AboutSection-name'>About Me</h1>
                    <div className='AboutSection-divider'></div>
                    <p className='AboutSection-paragraph'>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
                    Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutSection
