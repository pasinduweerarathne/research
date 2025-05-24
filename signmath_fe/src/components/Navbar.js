import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../styles/navbar.css';
import logoImage from '../assets/user.png';
import menu from '../assets/menu.png';
import logo from '../assets/AppLogo.png';
// import { auth } from '../Config/firebase';
// import { useAuthState } from 'react-firebase-hooks/auth';

export const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    // const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    const logOut = (event) => {
        event.preventDefault();
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("user");
        navigate("/login")
        window.location.reload();
    }

    return (
        <nav className="navbar">
            {/* <div className="container"> */}
            <div className="logo">
                <img src={logo} alt="Logo" height="auto" width="200px" />
            </div>
            <div className="menu-icon" onClick={handleShowNavbar}>
                <img src={menu} alt="Logo" height="auto" width="30px" />
            </div>
            <div className={`nav-elements  ${showNavbar && 'active'}`}>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact Us</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={logOut} to="/logout"> Sign Out</NavLink>
                    </li>
                    <li>
                        <NavLink to="/sp">
                            <img src={logoImage} alt="Logo" height="25px" width="25px" />
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                   <p>{user?.displayName}</p>
                    <img src={user?.photoURL || ""} width='30px' style={{ marginLeft: '10px', borderRadius: '20px' }} />
                    <img src={logoImage} alt="Logo" height="auto" width="40px" />
                </div> */}


            {/* </div> */}
        </nav>
    )
}