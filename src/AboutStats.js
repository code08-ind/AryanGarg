import React, { useEffect } from 'react';
import NavbarAbout from './NavbarAbout';
import Aos from 'aos';
import 'aos/dist/aos.css';

const AboutStats = () => {
    document.title = "My Stats";
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <>
            <NavbarAbout />
            <section className="main">
                <div className="stats">
                    <div className="row">
                        <div className="col-md-4" data-aos="zoom-in">
                            <i className="fas fa-tasks"></i>
                            <h1>Projects Completed</h1>
                            <h4>50+</h4>
                        </div>
                        <div className="col-md-4" data-aos="zoom-in">
                            <i className="fas fa-suitcase"></i>
                            <h1>Languages Working In</h1>
                            <h4>5</h4>
                        </div>
                        <div className="col-md-4" data-aos="zoom-in">
                            <i className="fas fa-mug-hot"></i>
                            <h1>Clients</h1>
                            <h4>20+</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4" data-aos="fade-down">
                            <i className="fas fa-edit"></i>
                            <h1>Lines Of Codes</h1>
                            <h4>20,000+</h4>
                        </div>
                        <div className="col-md-4" data-aos="fade-down">
                            <i className="fas fa-chalkboard"></i>
                            <h1>FrameWorks Used</h1>
                            <h4>6</h4>
                        </div>
                        <div className="col-md-4" data-aos="fade-down">
                            <i className="fas fa-user-friends"></i>
                            <h1>Visitors</h1>
                            <h4>200+</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4" data-aos="flip-up">
                            <i className="fas fa-tools"></i>
                            <h1>Tools Used</h1>
                            <h4>10+</h4>
                        </div>
                        <div className="col-md-4" data-aos="flip-up">
                            <i className="fas fa-layer-group"></i>
                            <h1>Technology Stack</h1>
                            <h4>MERN STACK</h4>
                        </div>
                        <div className="col-md-4" data-aos="flip-up">
                            <i className="far fa-clock"></i>
                            <h1>Avg. Hours Spent Daily</h1>
                            <h4>5+</h4>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutStats;
