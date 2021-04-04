import React from "react";
import author from "../me.jpg";

const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                    <img className="profile-img" src={author} alt="author..." />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About Me</h1>
                    <p>
                    From very early in my life, I started to fall in love with technology 😍 This love has helped me develop a very good technological mindset and made me curious to learn more.
                    <br></br><br></br>
                    My passion for technology led me to browse programming on my own and opt for a Full-Stack web development Bootcamp, gaining knowledge in HTML5, CSS, Javascript, React, Python / Flask, SQL, Git, Github, command line.
                    <br></br><br></br>
                    I am curious and restless by nature, I have a wide disposition for teamwork, as well as a facility to learn in a self-taught way; respectful and patient, with availability to dialogue and ability to solve problems.
                    <br></br><br></br>
                    I really want to learn and face new professional challenges as a programmer; joining any interesting project that I can help with.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
