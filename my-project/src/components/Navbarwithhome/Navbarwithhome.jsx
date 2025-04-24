import React from 'react';

import { NavbarMenu } from '../../mockData/data'
import { FaArrowRight } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { DiResponsive } from 'react-icons/di';
import { FaPlay } from "react-icons/fa";
import ResponsiveMenu from '../ResponsiveMenu';
import logo from '../../../public/images/logo.jpg'
import contact from "../../../src/Contact";
import { Link } from "scroll";



const NavbarHome = () => {
    const [open, setOpen] = React.useState(false);

    // const item.title = useRef()

    return (
        <>
            <nav>
                <div className="container flex justify-between items-center py-8">
                    {/* Logo section */}
                    {/* <img src="/images/logo.jpg" alt="Company logo"/> */}
                    <div className='text-xl flex place-items-start gap-2 uppercase h-50 w-80'>
                        <a href="/"><img src={logo} alt="" /></a>
                    </div>
                    {/* Menu section */}
                    <div className='hidden md:block'>
                        <ul className='flex items-center gap-6 text-gray-600'>
                            <li>
                                <a
                                    href="/"
                                    className="inline-block py-1 px-3 hover:text-primary font-semibold"
                                >
                                    Home
                                </a>
                            </li>

                        </ul>
                    </div>
                    {/* login button  */}
                    <a href="/contact"><button className='hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-2 duration-200 hidden md:block'>Contact Us</button></a>
                    {/* Mobile hamburger Menu section */}
                    <div className='md:hidden' onClick={() =>
                        setOpen(!open)}>
                        <MdMenu className='text-4xl' />
                    </div>
                </div>
            </nav>
            {/* Mobile Sidebar section */}
            <ResponsiveMenu open={open} />
        </>
    )

};

export default NavbarHome;