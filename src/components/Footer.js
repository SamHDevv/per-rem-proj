import React from "react";
import {
    FacebookIcon,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    TelegramIcon,
    TelegramShareButton
} from "react-share";
import {Link} from "react-scroll"

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>Valencia, Spain</p>
                        </div>
                        {/* <div className="d-flex">
                            <a href="tel: 555-555-555"> +34 666 666 666</a>
                        </div> */}
                        {/* <div className="d-flex">
                            <p>samuelhl@yahoo.com</p>
                        </div> */}
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <Link smooth={true} to="home" offset={-110 } href="#">Home <span className="sr-only">(current)</span></Link>
                                <br/>
                                <Link smooth={true} to="about" offset={-110 } href="#">About Me <span className="sr-only">(current)</span></Link>
                                <br/>
                                <Link smooth={true} to="services" offset={-110 } href="#">Skills <span className="sr-only">(current)</span></Link>
                            </div>
                            <div className="col">
                                <Link smooth={true} to="experience" offset={-110 } href="#">Experience <span className="sr-only">(current)</span></Link>
                                <br/>
                                <Link smooth={true} to="portfolio" offset={-110 } href="#">Portfolio <span className="sr-only">(current)</span></Link>
                                <br/>
                                <Link smooth={true} to="contacts" offset={-110 } href="#">Contact <span className="sr-only">(current)</span></Link>
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
