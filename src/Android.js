import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import AndroidData from './AndroidData';
import Info from './Info';
import Footer from './Footer';
import Navbar from './Navbar';

const Front = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    document.title = "Android Application Projects";
    return (
        <>
            <Navbar/>
            <h2 className="text-center new mt-4" data-aos="zoom-in">Android Application <span>Projects</span></h2>
            {AndroidData.map((element) => {
                return <Info key={element.id} title={element.title} description={element.description} link={element.link} projectLink={element.projectLink} imgLink={element.imgLink} />
            })}
            <Footer />
        </>
    );
}

export default Front;
