import React from 'react';
import './PortfolioSection.css';
import portfolioImageOne from '/Users/l/kylebarreras/src/images/portfolio-1.jpeg';
import portfolioImageTwo from '/Users/l/kylebarreras/src/images/portfolio-2.jpeg';
import portfolioImageThree from '/Users/l/kylebarreras/src/images/portfolio-3.png';

function PortfolioSection() {
    return (
        <div>
            <div className='portfolio-container'>
            <h1 className='portfolio-header'>Portfolio</h1>
                <div className='portfolio-divider'></div>
                <div className='portfolio-row'>
                    <div className='portfolio-text-one'>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </div>
                    <div className='image-container'>
                        <img className='portfolio-image' src={portfolioImageOne} />
                    </div>
                </div>
                <div className='portfolio-row'>
                    <div className='portfolio-text-two'>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </div>
                    <div className='image-container'>
                        <img className='portfolio-image' src={portfolioImageTwo} />
                    </div>
                </div>
                <div className='portfolio-row'>
                    <div className='portfolio-text-three'>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </div>
                    <div className='image-container'>
                        <img className='portfolio-image' src={portfolioImageThree} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioSection
