import React from "react"
import emailjs from "emailjs-com"
import {useForm} from "react-hook-form"



const Contacts = () => {
    const { register, handleSubmit, errors } = useForm();

    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "user_WzkL0QxsfpSiYzmeJ6u12";

    const onSubmit = (data, r) => {
        sendEmail(

            serviceID, 
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            userID
        )
        r.target.reset();         
    }
   
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(serviceID, templateID, e.target, userID)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
    
    return (
        <div className="contacts">
            <div className="text-center">
                <h1>Contact me</h1>
                <p>Dolor duis esse culpa Lorem cillum. Aute qui id ullamco non consectetur mollit. Sint ad tempor voluptate in sint ad exercitation. Sunt anim mollit esse occaecat est labore dolor tempor est do pariatur esse occaecat. Cupidatat aliqua dolore cupidatat qui proident. Duis non non cillum ullamco.</p>
            </div>  
            <div className="container">
                <form onSubmit={sendEmail}>

                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        {/* NAME IMPUT */}
                        <div className="text-center">

                        <input 
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        name="name"         
                        />
                        <div className="line">
                        </div>
                        </div>

                        {/* PHONE IMPUT */}
                        <div className="text-center">

                        <input 
                        type="text"
                        className="form-control"
                        placeHolder="Phone Number"
                        name="phone"         
                        />
                        <div className="line"></div>
                        </div>
                        {/* EMAIL IMPUT */}
                        <div className="text-center">

                        <input 
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        name="email"         
                        />
                        <div className="line"></div>
                        </div>
                        {/* SUBJECT IMPUT */}
                        <div className="text-center">

                        <input 
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                        name="subject"         
                        />
                        <div className="line"></div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        {/* DESCRIPTION */}
                        <div className="text-center">

                        <textarea 
                        type="text"
                        className="form-control"
                        placeholder="It would be great to know a little more about you / your project"
                        name="description"> 
                        </textarea>
                        <div className="line"></div>
                        </div>
                        <button className="btn-main-offer contact-btn" type="submit">Contact Me</button>
                    </div>
                </div>
            </form>
            </div>
        </div>
    )
}

export default Contacts
