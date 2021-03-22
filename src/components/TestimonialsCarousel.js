import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
//AVATARS IMPORTS
import avatar1 from "../images/avatars/avatar-1.png"
import avatar2 from "../images/avatars/avatar-2.png"
import avatar3 from "../images/avatars/avatar-3.png"
import avatar4 from "../images/avatars/avatar-4.png"

const TestimonialsCarousel = () => {
    return (
        <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={3000}
        >
            <>
                <img src={avatar1} alt="John Doe 1" />
                <div className="myCarousel">
                <h3>John Doe 1</h3>
                <p>Lorem quis consequat Lorem consequat in consequat dolore Lorem eu culpa minim sint. Incididunt enim cupidatat aliqua id elit nisi labore exercitation eu fugiat do mollit. Pariatur eiusmod pariatur officia anim fugiat voluptate cupidatat eiusmod mollit enim deserunt. Ut esse eiusmod dolor minim quis officia ullamco officia eiusmod ad in. Qui voluptate minim nulla aliquip laboris culpa labore dolore ullamco ex quis amet. Sit dolore veniam adipisicing anim proident officia culpa veniam aute pariatur. Occaecat ad culpa nisi culpa pariatur officia amet dolore anim.</p>
                </div>
            </>
            <>
                <img src={avatar2} alt="Jane Doe 2" />
                <div className="myCarousel">
                <h3>John Doe 1</h3>
                <p>Lorem quis consequat Lorem consequat in consequat dolore Lorem eu culpa minim sint. Incididunt enim cupidatat aliqua id elit nisi labore exercitation eu fugiat do mollit. Pariatur eiusmod pariatur officia anim fugiat voluptate cupidatat eiusmod mollit enim deserunt. Ut esse eiusmod dolor minim quis officia ullamco officia eiusmod ad in. Qui voluptate minim nulla aliquip laboris culpa labore dolore ullamco ex quis amet. Sit dolore veniam adipisicing anim proident officia culpa veniam aute pariatur. Occaecat ad culpa nisi culpa pariatur officia amet dolore anim.</p>
                </div>
            </>
            <>
                <img src={avatar3} alt="John Doe 3" />
                <div className="myCarousel">
                <h3>John Doe 1</h3>
                <p>Lorem quis consequat Lorem consequat in consequat dolore Lorem eu culpa minim sint. Incididunt enim cupidatat aliqua id elit nisi labore exercitation eu fugiat do mollit. Pariatur eiusmod pariatur officia anim fugiat voluptate cupidatat eiusmod mollit enim deserunt. Ut esse eiusmod dolor minim quis officia ullamco officia eiusmod ad in. Qui voluptate minim nulla aliquip laboris culpa labore dolore ullamco ex quis amet. Sit dolore veniam adipisicing anim proident officia culpa veniam aute pariatur. Occaecat ad culpa nisi culpa pariatur officia amet dolore anim.</p>
                </div>
            </>
            <>
                <img src={avatar4} alt="John Doe 4" />
                <div className="myCarousel">
                <h3>John Doe 1</h3>
                <p>Lorem quis consequat Lorem consequat in consequat dolore Lorem eu culpa minim sint. Incididunt enim cupidatat aliqua id elit nisi labore exercitation eu fugiat do mollit. Pariatur eiusmod pariatur officia anim fugiat voluptate cupidatat eiusmod mollit enim deserunt. Ut esse eiusmod dolor minim quis officia ullamco officia eiusmod ad in. Qui voluptate minim nulla aliquip laboris culpa labore dolore ullamco ex quis amet. Sit dolore veniam adipisicing anim proident officia culpa veniam aute pariatur. Occaecat ad culpa nisi culpa pariatur officia amet dolore anim.</p>
                </div>
            </>
        </ Carousel>
    )
}

export default TestimonialsCarousel
