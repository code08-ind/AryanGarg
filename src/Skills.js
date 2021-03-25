import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Skills = (props) => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <>
            <div className="skills" data-aos="flip-left" style={{
                width: "80%",
                height: "14vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
                margin: "0 auto"
            }}>
                <div className="wrapper" id="html" style={{
                    width: "0%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    animation: `${props.animate} 4s cubic-bezier(0.075, 0.82, 0.165, 1) 2s 1 normal forwards`,

                }}>
                    <div className="lang" style={{ color: "white", fontFamily: "'Cinzel', serif", fontSize: "20px" }}>
                        {props.title}
                    </div>
                    <div className="performance" style={{ color: "white", fontFamily: "'Montserrat', sans-serif", fontSize: "15px", fontWeight: "600" }}>
                        {props.percent}%
                    </div>
                </div>
                <div className="base" style={{
                    height: "10px",
                    width: "100%",
                    backgroundColor: "white",
                    borderRadius: "10px",
                    border: "1px solid rgb(224, 224, 224)",
                    display: "flex",
                    alignItems: "center",
                    boxShadow: "1px 1px 13px 0px cyan",
                    WebkitBoxshadow: "1px 1px 13px 0px cyan",
                    MozBoxShadow: "1px 1px 13px 0px cyan",
                }}>
                    <div className="percent" style={{
                        width: "0%",
                        backgroundColor: "cyan",
                        height: "6px",
                        borderRadius: "12px",
                        animation: `${props.animate} 4s cubic-bezier(0.075, 0.82, 0.165, 1) 2s 1 normal forwards`,
                    }}>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skills;
