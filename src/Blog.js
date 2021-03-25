import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import BlogData from './BlogData';
import Info from './Info';
import Footer from './Footer';
import Navbar from './Navbar';

const Front = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    document.title = "Android Application Projects";
    document.title = "My Blogs";
    return (
        <>
            <Navbar/>
            <h2 className="text-center new mt-4" data-aos="zoom-in">My <span>Blogs</span></h2>
            {BlogData.map((element) => {
                return <Info key={element.id} title={element.title} description={element.description} link={element.link} projectLink={element.projectLink} imgLink={element.imgLink} />
            })}
            <Footer />
        </>
    );
}

export default Front;
