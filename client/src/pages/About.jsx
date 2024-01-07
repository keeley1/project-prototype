import React from "react";

const About = () => {
    return (
        <>
        <div className="about-container">
            <h1 className="page-title">About Harmony</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            
            <img src={require('../aboutImage.png')} height="220" className="about-image"/>

            <h2 className="features-title">Features:</h2>
            <div className="list-style">
                <div className="list-section">
                    <ul>
                        <li>Daily to do list</li>
                        <li>Personal goals</li>
                        <li>Daily affirmations</li>
                    </ul>
                </div>
                <div className="list-section">
                    <ul>
                        <li>Project creation</li>
                        <li>Daily mood check in</li>
                        <li>Space to practice gratitude</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
};

export default About;