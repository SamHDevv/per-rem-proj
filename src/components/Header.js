import React from "react";
import Typed from "react-typed";
import {Link} from "react-scroll";


const Header = () => {
    return (
        <div id="home" className="header-wraper">
            <div className="main-info">
                <h1>FullStack Developer </h1>
                <Typed 
                className="typed-text" 
                typeSpeed={40}
                backSpeed={60}
                loop
                strings={
                    ["HTML/CSS", "JavaScript", "Relational Database", "Python", "React", "Git", "HTTP/REST"]
                    }/>
                <Link smooth={true} offset={ -110} className="btn-main-offer" to="contacts">Contact Me</Link>
            </div>
        </div>
    )
}

export default Header
