import React from "react";
import {
    FacebookIcon,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    TelegramIcon,
    TelegramShareButton
} from "react-share";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>Valencia España 2021</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel: 555-555-555"> +34 666 666 666</a>
                        </div>
                        <div className="d-flex">
                            <p>samuelhl@yahoo.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav">Home</a>
                                <br/>
                                <a className="footer-nav">About Me</a>
                                <br/>
                                <a className="footer-nav">Services</a>
                            </div>
                            <div className="col">
                                <a className="footer-nav">Experience</a>
                                <br/>
                                <a className="footer-nav">Portfolio</a>
                                <br/>
                                <a className="footer-nav">Contacts</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton
                                url={"https://samhernandez.eu/"}
                                quote={"FullStack Developer"}
                                hashtag="#JuniorDev"
                                > 
                                <FacebookIcon className="mx-3" size="36"/>

                            </FacebookShareButton>
                            <LinkedinShareButton
                                url={"https://samhernandez.eu/"}
                                quote={"FullStack Developer"}
                                hashtag="#JuniorDev"
                                > 
                                <LinkedinIcon className="mx-3" size="36"/>

                            </LinkedinShareButton>
                            <TelegramShareButton
                                url={"https://samhernandez.eu/"}
                                quote={"FullStack Developer"}
                                hashtag="#JuniorDev"
                                > 
                                <TelegramIcon className="mx-3" size="36"/>
                            </TelegramShareButton>

                        </div>
                        <p className="pd-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;New Horizon | All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
