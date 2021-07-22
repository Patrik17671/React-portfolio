import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import "./NavBar.css";
import hamburger from "../../Images/menu.svg"
import close from "../../Images/close.svg"
import logo from "../../Images/Logo.svg"

const NavBar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                        <img src={logo} alt="logo" height="50px"/>
                    </NavLink>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink exact to="/" activeClassName="active" className="nav-links" onClick={handleClick}>
                                O mne
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/projects" activeClassName="active" className="nav-links" onClick={handleClick}>
                                Projekty
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/contactMe" activeClassName="active" className="nav-links" onClick={handleClick}>
                                Napíš mi
                            </NavLink>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <img src={click ? close : hamburger } alt="ham" height="20px"/>
                    </div>

                </div>
            </nav>
        </>
    );
};

export default NavBar;
