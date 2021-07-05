import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import sdiHomeLogo from '../svgs/sdiHomeLogo.svg'

function Navbar(){
    var username = JSON.parse(localStorage.getItem('userdata'));
    const handleSideBar = () =>{
        let x = document.getElementById("sdi_nav");
        if(x.className === "sdi_navbar"){
            x.className += " sdi_navbar2";
        }else{
            x.className = "sdi_navbar";
        }
    };   
    return(
            <div className="sdi_navbar" id="sdi_nav">
                <div className="sdi_bar" onClick={() => handleSideBar()}>
                    <div className="sdi_bar1"></div>
                    <div className="sdi_bar2"></div>
                    <div className="sdi_bar3"></div>
                </div>
                <Link to="/" className="sdi_navbar"><img src={sdiHomeLogo} alt="img"/></Link>
                <div className="links">
                {username != null && <NavLink to="/logout" activeClassName="is-active" className="sdi_navbar1">Logout</NavLink> }
                <NavLink to="/" exact activeClassName="is-active" className="sdi_navbar1">Home</NavLink>
                <NavLink to="/about" activeClassName="is-active" className="sdi_navbar1">About</NavLink>
                <NavLink to="/blogs" id="sdi_nav_last" activeClassName="is-active" className="sdi_navbar1">Blogs</NavLink>
                </div>
            </div>
    )
}

export default Navbar;