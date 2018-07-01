import React from "react";
import logo from "./NYT11.png";
import './Header.css';

const Header = props => (
    <div>
        <div className="App-header navbar">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>New York Times Search</h1>
        </div>
        <div className="row">
            <div className="col-md-5" />
            <div className="collapse navbar-collapse col-md-2" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Save</a>
                    </li>
                </ul>
            </div>        
            <div className="col-md-5" />
        </div>
    </div>
);
export default Header;