import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom';

const Common = (props) => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <>
            <div className="container home">
                <div className="row">
                    <div className="col-md-5 one" data-aos="fade-down">
                        <h2 className="head">{props.head}</h2>
                        <h2 className="main">AryanGarg</h2>
                        <p>{props.desc}</p>
                        <NavLink to={props.linkTo}><button className="btn1">Get Started</button></NavLink>
                    </div>
                    <div className="col-md-7 two">
                        <img src={props.img} alt="Hello" data-aos="flip-right" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Common;
