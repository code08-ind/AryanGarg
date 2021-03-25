import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import FlutterData from './FlutterData';
import Info from './Info';
import Footer from './Footer';
import Navbar from './Navbar';

const Front = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    document.title = "Flutter Projects";
    return (
        <>
            <Navbar />
            <h2 className="text-center new mt-4" data-aos="zoom-in">Flutter <span>Projects</span></h2>
            {FlutterData.map((element) => {
                return <Info key={element.id} title={element.title} description={element.description} link={element.link} projectLink={element.projectLink} imgLink={element.imgLink} />
            })}
            <Footer />
        </>
    );
}

export default Front;
