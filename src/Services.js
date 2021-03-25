import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Card from './Card';
import Data from './Data';
import Status from './Status';
import Footer from './Footer';
import Navbar from './Navbar';

const Services = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    document.title = "Services I Provide";
    return (
        <>
            <Navbar/>
            <h2 className="text-center new mt-4" data-aos="zoom-in">Our <span>Services</span></h2>
            <div className="container old">
                <div className="row">
                    {Data.map((element, key) => {
                        return <Card key={element.key} title={element.title} img={element.img} desc={element.desc} link={element.link} />
                    })}
                </div>
                <br />
                <div className="row">
                    {Status.map((element, key) => {
                        return <Card key={element.key} title={element.title} img={element.img} desc={element.desc} link={element.link} />
                    })}
                </div>
                <br />
            </div>
            <br />
            <Footer/>
        </>
    );
}

export default Services;
