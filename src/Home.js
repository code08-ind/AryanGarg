import React from 'react';
import Common from './Common';
import Footer from './Footer';
import Navbar from './Navbar';
import Logo from './images/document-mgt.gif';

const Home = () => {
    document.title = "ARYAN GARG";
    return (
        <>
            <Navbar/>
            <Common img={Logo} head={"Welcome To Home Page"} desc={"I Am A MERN Stack Web Developer And Android Application Developer"} linkTo={"/about"}/>
            <Footer />
        </>
    );
}

export default Home;
