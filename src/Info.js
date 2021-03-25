import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Info = (props) => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <>
            <div className="container">
                <hr style={{
                    border: "0px",
                    height: "2px",
                    background: "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))"
                }} />
            </div>
            <div className="container desc">
                <div className="row">
                    <div className="col-sm-7">
                        <img src={props.imgLink} alt="Projects" data-aos="flip-left" />
                    </div>
                    <div className="col-sm-5" data-aos="fade-left">
                        <h3 className="mt-3">{props.title}</h3>
                        <p>{props.description}</p>
                        <div className="project">
                            <a href={props.link}><button className="btn btn-primary">See Project</button></a>
                            <a href={props.projectLink}><i className="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
                <br />
                <br />
            </div>
        </>
    );
}

export default Info;
