import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import {  FaUserCircle } from "react-icons/fa";
function Navbar() {
   
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid d-flex justify-content-between">
                    <Link to="/" className="navbar-brand title">Redux Contact App</Link>
                    <Link to="/addcontact" className="navbar-brand btn btn-primary add">
                        <div className="d-flex align-items-center justify-content-between">
                        <FaUserCircle size={15}/>
                        <p className="mb-0 ml-1">Add Contact</p></div> 
                    </Link>
            </div>
        </nav>
    )
}

export default Navbar
