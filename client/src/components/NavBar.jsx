import React from "react";
import { Link, NavLink } from "react-router-dom";
import '../App.css';

const NavBar = () => {
    return (
        <nav>
            <ul className="nav-list">
                <div className="nav-container">
                    <div className="nav-flex-title">
                        <li><NavLink to="/" className="nav-item"><b>Harmony</b></NavLink></li>
                    </div>
                    <div className="nav-flex">
                        <li><NavLink to="/about" className="nav-item">About</NavLink></li>
                    </div>
                    <div className="nav-flex">
                        <li><NavLink to="/todo" className="nav-item">To Do List</NavLink></li>
                    </div>
                </div>
            </ul>
        </nav>
    );
};

export default NavBar;