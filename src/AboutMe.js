import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import NavbarAbout from './NavbarAbout';

const AboutMe = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    document.title = "More About Me";
    return (
        <>
            <NavbarAbout />
            <section className="aboutMe">
                <div className="moreAboutMe">
                    <div className="rows">
                        <h2 className="text-center new mt-3 mb-1 text-lg" data-aos="flip-right" style={{ fontSize: "60px", marginTop: "50px" }}>About <span>Me</span></h2>
                        <p className="more mt-4" data-aos="zoom-in-down" id="first">This is <b>Aryan Garg</b> from <b>Jalandhar,
                                    Punjab , India</b>. I am a code loving boy who loves coding in
                                <b>Python, C, C++ , Full Stack Web Development</b> and <b>Data Structures</b>. Currently I am
                                pursuing my
                                <b>B.Tech</b> in <b>Information Technology(IT)</b> from <b>Dr. B. R. Ambedkar National
                            Institute Of
                                    Technology, Jalandhar</b>. Apart from being a Script kiddy and Unofficial web
                                developer, I am also interested in <b>Digital Marketing, Data Visualisation</b> and I am
                                Currently Learning Various other variants of <b>Backend </b>in <b>Web Developement</b>
                                and in depth in <b>Data Structures</b>.I am also working on <b>Flutter App Developement</b> and working on developing the apps for people welfare. I am also a member of <b>DSC NITJ</b>.
                            </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutMe;