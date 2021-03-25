import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarAbout = () => {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-12 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light pb-0 mb-0">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand pb-0" to="/">AryanGarg</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav" style={{ marginLeft: 'auto' }}>
                                        <li className="nav-item mb-0 pb-0">
                                            <NavLink exact activeClassName="activeLink" className="nav-link mb-0" to="/">HOME</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact activeClassName="activeLink" className="nav-link" to="/services">SERVICES</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact activeClassName="activeLink" className="nav-link" to="/about/me">ABOUT ME</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact activeClassName="activeLink" className="nav-link" to="/about/skills">SKILLS</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact activeClassName="activeLink" className="nav-link" to="/about/stats">STATS</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact activeClassName="activeLink" className="nav-link" to="/about/location">LOCATION</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact activeClassName="activeLink" className="nav-link" to="/about">ABOUT</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact activeClassName="activeLink" className="nav-link" to="/contact">CONTACT</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavbarAbout;
