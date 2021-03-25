import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { db } from './Firebase';

const Forms = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [loader, setLoader] = useState(false);
    const [loadingText, setLoadingText] = useState("Submit Form");

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);
        setLoadingText("Submitting Form");
        db.collection("contacts").add({
            name: name,
            email: email,
            phone: phone,
            message: message,
        }).then(() => {
            alert('Thanks For Sumitting Your Response 👍');
            setLoader(false);
            setLoadingText("Submit Form");
        }).catch((error) => {
            alert(error.message);
            setLoader(false);
            setLoadingText("Submit Form");
        });
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
    }

    return (
        <>
            <h2 className="text-center new mt-2 mb-4" data-aos="flip-up">Contact <span>Me</span></h2>
            <div className="container forms" style={{ height: "75vh", width: "70%" }}>
                <form style={{ height: "85%" }} onSubmit={handleSubmit}>
                    <div className="form-group" data-aos="fade-down">
                        <label>Email Address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="xyz@example.com" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group" data-aos="fade-down">
                        <label>Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group" data-aos="fade-down">
                        <label>Phone</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="form-group" data-aos="fade-down">
                        <label>Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter Your Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    </div>
                    <button className="btn btn-success text-center mt-3 mx-auto" data-aos="zoom-in" type="submit" style={{ backgroundColor: loader ? "#ccc" : "#198754" }}>{loadingText}</button>
                </form>
                <div className="middle">
                    <h2 style={{ fontFamily: "'Lora', serif" }} data-aos="flip-up">Get In Touch With Me</h2>
                    <div className="main" data-aos="zoom-in-down">
                        <a className="btns facebook" href="https://www.facebook.com/aryan.garg.9022662">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a className="btns twitter" href="https://twitter.com/AryanGa15781393">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a className="btns linkedin" href="https://www.linkedin.com/in/aryan-garg-661552198/">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a className="btns instagram" href="https://www.instagram.com/aryan_garg_08/">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a className="btns github" href="https://github.com/code08-ind">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="contact-info">
                <div className="card" style={{ backgroundColor: "#F2F3F4" }} data-aos="flip-down">
                    <i className="icon fas fa-envelope"></i>
                    <div className="card-content">
                        <h3>Email</h3>
                        <span>gargaryan82000@gmail.com</span>
                    </div>
                </div>

                <div className="card" style={{ backgroundColor: "#F2F3F4" }} data-aos="flip-down">
                    <i className="icon fas fa-phone"></i>
                    <div className="card-content">
                        <h3>Phone Number</h3>
                        <span>+91 79869-57185</span>
                    </div>
                </div>

                <div className="card" style={{ backgroundColor: "#F2F3F4" }} data-aos="flip-down">
                    <i className="icon fas fa-map-marker-alt"></i>
                    <div className="card-content">
                        <h3>Location</h3>
                        <span>Patiala, Punjab</span>
                    </div>
                </div>
            </div>
            <br />
            <footer><p>Created With <span style={{ color: "rgb(220,20,60)" }} data-aos="flip-down">&#10084;</span> By Aryan Garg | All Rights Reserved &copy; 2021 </p></footer>
        </>
    );
}

export default Forms;
