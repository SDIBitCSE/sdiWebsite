import React, {useContext} from 'react';
import { Link, NavLink } from 'react-router-dom';
import sdiHomeLogo from '../svgs/sdiHomeLogo.svg'
import { AuthContext } from '../context/context';

function Navbar(){
    const {user, logout} = useContext(AuthContext)

    const handleLogout = () =>{
        logout()
    }
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
                <a href="/" ><img src={sdiHomeLogo} className="sdi_logo" alt="img"/></a>
                <div className="links">
                {username != null && <NavLink to="/logout" activeClassName="is-active" className="sdi_navbar1">Logout</NavLink> }
                <NavLink to="/" exact activeClassName="is-active" className="sdi_navbar1">Home</NavLink>
                <NavLink to="/about" activeClassName="is-active" className="sdi_navbar1">About</NavLink>
                <NavLink to="/landingPage" activeClassName="is-active" className="sdi_navbar1">Notes </NavLink>
                {
                    user ? (
                        <Link onClick={handleLogout} to="/" activeClassName="is-active" className="sdi_navbar1">Logout </Link>
                    ) : (
                        <NavLink to="/login" activeClassName="is-active" className="sdi_navbar1">Login </NavLink>
                    )
                }
                {/* <NavLink to="/login" id="sdi_nav_last" activeClassName="is-active" className="sdi_navbar1">Login</NavLink> */}
                </div>
            </div>
    )
}

export default Navbar;