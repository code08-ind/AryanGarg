import React from 'react';
import Forms from './Forms';
import Navbar from './Navbar';

const Contact = () => {
    document.title = "Contact Me";
    return (
        <>
            <Navbar/>
            <Forms />
        </>
    );
}

export default Contact;
