import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import FrontData from './FrontData';
import Info from './Info';
import Footer from './Footer';
import Navbar from './Navbar';

const Front = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    document.title = "Front End Web Projects";
    return (
        <>
            <Navbar/>
            <h2 className="text-center new mt-4" data-aos="zoom-in">Front End Web <span>Projects</span></h2>
            {FrontData.map((element) => {
                return <Info key={element.id} title={element.title} description={element.description} link={element.link} projectLink={element.projectLink} imgLink={element.imgLink} />
            })}
            <Footer />
        </>
    );
}

export default Front;
