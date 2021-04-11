import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import {} from "@fortawesome/free-brands-svg-icons" 
import { faCodeBranch, faLaptopCode, faDatabase, faPeopleArrows } from "@fortawesome/free-solid-svg-icons";

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
                                
                                HTML
                                <br></br>
                                CSS
                                <br></br>
                                Bootstrap
                                <br></br>
                                Javascript
                                <br></br>
                                React Js
                                
                            </div>   
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faCodeBranch} size="2x"/>
                                </div>
                                <h3>Version Control</h3>
                                
                                    Command Line
                                    <br></br>
                                    Git
                                    <br></br>
                                    GitHub
                                
                            </div>   
                        </div>
                         {/* - */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faDatabase} size="2x"/>
                                </div>
                                <h3>Back-End</h3>
                                
                                    Python
                                    <br></br>
                                    Flask
                                    <br></br>
                                    API Rest
                                    <br></br>
                                    SQL
                                
                            </div>   
                        </div>
                         {/* - */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faPeopleArrows} size="2x"/>
                                </div>
                                <h3>Soft Skills</h3>
                                
                                    Learning ability
                                    <br></br>
                                    Teamwork
                                    <br></br>
                                    Adaptability
                                    <br></br>
                                    Problem solving
                                    <br></br>
                                    Communication Skills
                                
                            </div>   
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Services
