import React, {useState} from "react"
import emailjs from "emailjs-com"
import {useForm} from "react-hook-form"



const Contacts = () => {
    const [successMessage, setSuccessMessage] = useState("");
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
   
    const sendEmail = (serviceID, templateID, variables, userID) => {
        emailjs.send(serviceID, templateID, variables, userID)
          .then(() => {
            setSuccessMessage("Form sent succesfully! I'll contact you as soon as possible.");
          }).catch(err => console.error(`Something went wrong ${err}`));
      }
    
    return (
        <div id="contacts" className="contacts">
            <div className="text-center">
                <h1>Contact me</h1>
                <p>Feel free to contact me if you feel I can fit in the project you are working on</p>
                <span className="success-message">{successMessage}</span>
            </div>  
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>

                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        {/* NAME IMPUT */}
                        <div className="text-center">

                        <input 
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        name="name" 
                        ref={
                            register({
                                required: "Please enter your name",
                                maxLength: 20,
                                message: "Please enter a name with fewer than 20 character."
                            })
                        }        
                        />
                        <div className="line">
                        </div>
                        <span className="error-message">
                            {errors.name && errors.name.message}
                        </span>
                        </div>

                        {/* PHONE IMPUT */}
                        <div className="text-center">

                        <input 
                        type="text"
                        className="form-control"
                        placeHolder="Phone Number"
                        name="phone"
                        ref={
                            register({
                                required: "Please add your phone",
                            })
                        }           
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.phone && errors.phone.message}
                        </span>
                        {/* EMAIL IMPUT */}
                        <div className="text-center">

                        <input 
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        name="email"   
                        ref={
                            register({
                                required: "Please add your email",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid Email"
                                }
                            })
                        }        
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.email && errors.email.message}
                        </span>
                        {/* SUBJECT IMPUT */}
                        <div className="text-center">

                        <input 
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                        name="subject"
                        ref={
                            register({
                                required: "OOPS, you forgot to add the subject",
                            })
                        }            
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.subject && errors.subject.message}
                        </span>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        {/* DESCRIPTION */}
                        <div className="text-center">

                        <textarea 
                        type="text"
                        className="form-control"
                        placeholder="It would be great to know a little more about you / your project"
                        name="description" 
                        ref={
                            register({
                                required: "Please add a short description.",
                            })
                        }>
                        </textarea>
                        <div className="line"></div>
                        <span className="error-message">
                            {errors.description && errors.description.message}
                        </span>
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
