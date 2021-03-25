import React from 'react';
import NavbarAbout from './NavbarAbout';
import Skills from './Skills';
import SkillsData from './SkillsData';

const AboutSkills = () => {
    document.title = "My Skills";
    return (
        <>
            <NavbarAbout />
            <div className="skillSet" style={{ height: "100%", width: "100%" }}>
                <h2 className="text-center new mt-0 mb-4 text-lg" style={{ fontSize: "50px",color:"#fff" }}>My <span>Skills</span></h2>
                {SkillsData.map((element) => {
                    return (
                        <Skills key={element.key} title={element.title} percent={element.percent} animate={element.animate} />
                    );
                })}
            </div>
        </>
    );
}

export default AboutSkills;
