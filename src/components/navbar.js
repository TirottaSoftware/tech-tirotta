import React, { Component } from 'react'
import "./navbar.css";

 class Navbar extends Component {
    render() {
        return (
        <div className = "navbar">
                <h1>Tech-Tirotta</h1>
            <div className = "nav-links">
                <li><a href = "#">Home</a></li>
                <li><a href = "#">About</a></li>
            </div>
        </div>
        )
    }
}   
export default Navbar;