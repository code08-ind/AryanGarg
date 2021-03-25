import React from 'react';
import Common from './Common';
import Footer from './Footer';
import NavbarAbout from './NavbarAbout';

const About = () => {
    const img = "https://equal.ae/wp-content/uploads/2020/11/white.gif";
    document.title = "About Me";
    return (
        <>
            <NavbarAbout/>
            <Common img={img} head={"Welcome To About Page"} desc={"Here You Can Understand More About Me And My Skills And Work."} linkTo={"/about/me"} />
            <Footer />
        </>
    );
}

export default About;
