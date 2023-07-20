import React, { useState } from "react";
import logo from '../assets/images/logo-bookmark.svg';
import hamburger from '../assets/images/icon-hamburger.svg';
import twitter from '../assets/images/icon-twitter.svg';
import facebook from '../assets/images/icon-facebook.svg';

export default function Navbar({ fixed }) {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav className="flex flex-wrap items-start justify-between px-2 py-5 bg-transparent md:h-52 relative z-10">
            <div className="container p-5 mx-auto flex flex-wrap items-start justify-between">
                <div className="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start">
                    <a
                        className="text-lg md:text-sm font-normal leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-slate-900"
                        href="#"
                    >
                        <img src={logo} alt="" />
                    </a>
                    <button
                        className="text-slate-900 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <img src={hamburger} alt="" />
                    </button>
                </div>
                <div
                    className={
                        "md:flex flex-grow items-center" +
                        (navbarOpen ? " flex" : " hidden")
                    }
                    id="example-navbar-danger"
                >
                    <ul className="flex flex-col mx-auto md:mx-0 md:flex-row list-none md:ml-auto text-center">
                        <li className="nav-item md:pe-4 mt-7 md:mt-0">
                            <a
                                className="px-3 py-2 flex items-center text-lg md:text-sm uppercase tracking-widest font-normal leading-snug text-slate-900 hover:text-red-500 duration-150"
                                href="#"
                            >
                                features                                </a>
                        </li>
                        <li className="nav-item md:pe-4 mt-5 md:mt-0">
                            <a
                                className="px-3 py-2 flex items-center text-lg md:text-sm uppercase tracking-widest font-normal leading-snug text-slate-900 hover:text-red-500 duration-150"
                                href="#"
                            >
                                pricing
                            </a>
                        </li>
                        <li className="nav-item md:pe-4 mt-5 md:mt-0">
                            <a
                                className="px-3 py-2 flex items-center text-lg md:text-sm uppercase tracking-widest font-normal leading-snug text-slate-900 hover:text-red-500 duration-150"
                                href="#"
                            >
                                contact
                            </a>
                        </li>
                        <li className="nav-item mt-5 md:mt-0">
                            <button
                                className="px-8 drop-shadow-lg py-2 duration-150 flex items-center tracking-widest text-lg md:text-sm uppercase font-normal leading-snug text-white hover:bg-transparent hover:text-red-500 border-2 border-red-500 rounded-md bg-red-500"
                                href="#"
                            >
                                login
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}