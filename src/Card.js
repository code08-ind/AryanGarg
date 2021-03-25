import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom';

const Card = (props) => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <>
            <div className="col-lg-4 col-sm-12" style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <div className="card" data-aos="flip-left" style={{
                    width: "22rem",
                    marginTop: "20px",
                    marginLeft: "15px",
                    marginRight: "15px",
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: "400"
                }}>
                    <img src={props.img} className="card-img-top" alt="Services" />
                    <div className="card-body">
                        <h5 className="card-title" style={{
                            fontFamily: "'Cinzel', serif",
                            fontWeight: "600"
                        }}>{props.title}</h5>
                        <p className="card-text">{props.desc}</p>
                        <NavLink to={props.link} className="btn btn-outline-primary">Check Work Now</NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
