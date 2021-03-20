import React from "react";
import Typed from "react-typed"


const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Web Development </h1>
                <Typed 
                className="typed-text" 
                typeSpeed={40}
                backSpeed={60}
                loop
                strings={
                    ["Web Design", "Web Development", "Facebook", "Ads", "SMM", "Google Ads"]
                    }/>
                <a href="#" className="btn-main-offer">Contact Me</a>
            </div>
        </div>
    )
}

export default Header
