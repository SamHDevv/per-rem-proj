import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faFacebookF, faGoogle} from "@fortawesome/free-brands-svg-icons" 
import { faDesktop, faFileCode, faCode, faCodeBranch, faLaptopCode, faDatabase, faPeopleArrows } from "@fortawesome/free-solid-svg-icons";

function Services() {
    return (
        <div id="services" className="services">
            <h1 className="py-5">Skills</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faLaptopCode} size="2x"/>
                                </div>
                                <h3>Front-End</h3>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Bootstrap</li>
                                    <li>Javascript</li>
                                    <li>React Js</li>
                                </ul>
                            </div>   
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faCodeBranch} size="2x"/>
                                </div>
                                <h3>Version Control</h3>
                                <ul>
                                    <li>Command Line</li>
                                    <li>Git</li>
                                    <li>GitHub</li>
                                </ul>
                            </div>   
                        </div>
                         {/* - */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faDatabase} size="2x"/>
                                </div>
                                <h3>Back-End</h3>
                                <ul>
                                    <li>Python</li>
                                    <li>Flask</li>
                                    <li>API Rest</li>
                                    <li>SQL</li>
                                </ul>
                            </div>   
                        </div>
                         {/* - */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faPeopleArrows} size="2x"/>
                                </div>
                                <h3>Soft Skills</h3>
                                <ul>
                                    <li>Learning ability</li>
                                    <li>Teamwork</li>
                                    <li>Adaptability</li>
                                    <li>Problem solving</li>
                                    <li>Communication Skills</li>
                                </ul>
                            </div>   
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Services
