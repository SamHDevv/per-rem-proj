import React from "react";
import sostenibleOnline from "../images/sostenible-online.png"
//FONT AWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import {PopupboxManager, PopupboxContainer} from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";


const Portfolio = () => {

//Sostenible Online

const openPopupboxSostenibleOnline = () => {
    const content = (
        <>
            <img className="portfolio-image-popupbox" src={sostenibleOnline} alt="Sostenible Online Project" />
            <p>Laborum sit qui officia dolore nulla. Non consequat cillum cupidatat adipisicing incididunt aliqua amet ea elit et sit et est dolore. Sit dolor enim aute ex sunt voluptate exercitation officia magna.</p>
            <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("google.com", "_blank")}>Demo Heroku Link</a>
            <br />
            <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("google.com", "_blank")}>Github Link</a>
        </>
        )
        PopupboxManager.open({content});
        
}
const popupboxConfigSostenibleOnline = {
    titleBar: {
        enable: true,
        text: "Sostenible Online Project"
    },
    fadeIn: true,
    fadeInSpeed: 500,
};


    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxSostenibleOnline}>
                        <img className="portfolio-image" src={sostenibleOnline} alt="Marcketplace Sostenible Online" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                {/* - */}
                    {/* <div className="portfolio-image-box">
                        <img className="portfolio-image" src={sostenibleOnline} alt="Marcketplace Sostenible Online" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div> */}
                {/* - */}
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigSostenibleOnline}/>
        </div>
    )
}

export default Portfolio