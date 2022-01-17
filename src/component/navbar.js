import React from 'react'
import { NavLink } from 'react-router-dom';


export const navbar = () => {
    return (
        <>
           
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        {/* <div className="text-success h-100 w-75"><h4>Login & Register</h4></div> */}
        <div className="container-fluid justify-content-lg-center">
            <ul className="navbar-nav">
                <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/Login">Login</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/Register">Register</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/record">Records</NavLink>
                </li>
            </ul>
            </div>
        </nav>
        </>
    );
};

export default navbar;