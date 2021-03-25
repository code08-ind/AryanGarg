import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand" to="/">AryanGarg</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0" style={{ marginLeft: 'auto' }}>
                                        <li className="nav-item">
                                            <NavLink exact activeClassName="activeLink" className="nav-link" to="/">HOME</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact activeClassName="activeLink" className="nav-link" to="/services">SERVICES</NavLink>
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

export default Navbar;
