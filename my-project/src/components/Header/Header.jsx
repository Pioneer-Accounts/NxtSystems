import React, { useState } from "react";
import { Link } from "scroll"
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../../public/images/logo.jpg"


const Header = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className="container flex justify-between items-center py-8">
            <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
                <a href="/">
                    <img src={logo} alt="" />
                </a>
                <div className="hamburger" onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li>
                        <Link to="/" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu} >Home</Link>
                    </li>
                    <li>
                        <Link to="/about" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu} >About Us</Link>
                    </li>
                    <li>
                        <Link to="/services" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu} >Services</Link>
                    </li>
                    <li>
                        <Link to="/choose" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu} >Why Choose Us</Link>
                    </li>
                    <li>
                        <Link to="/team" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu} >Team</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}




export default Header;