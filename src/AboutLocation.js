import React from 'react';
import NavbarAbout from './NavbarAbout';

const AboutLocation = () => {
    document.title = "My Location";
    return (
        <>
            <NavbarAbout />
            <div className="map" style={{ height: "100vh", width: "100%" }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d110185.70410021824!2d76.30429208412085!3d30.342330335852733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x391028b75d6cd1b3%3A0x6396e5aec7f165f2!2sBachittar%20Nagar%2C%20Model%20Town%2C%20Patiala%2C%20Punjab%20147001%2C%20India!3m2!1d30.342349!2d76.3743331!5e0!3m2!1sen!2sin!4v1616570270455!5m2!1sen!2sin" width="100%" height="100%" style={{ border: "0" }} title="MyMap" loading="lazy"></iframe>
            </div>
        </>
    );
}

export default AboutLocation;
