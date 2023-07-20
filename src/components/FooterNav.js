import logo from '../assets/images/logo-white.svg';
import facebook from '../assets/images/icon-facebook.svg';
import twitter from '../assets/images/icon-twitter.svg';

const FooterNav = () => {
    return (
        <nav className="flex flex-wrap items-center justify-between px-2 bg-[#242A45] relative z-10">
            <div className="container p-5 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-center md:w-auto md:static md:block md:justify-start">
                    <a
                        className="text-lg md:text-sm font-normal leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                        href="#"
                    >
                        <img src={logo} alt="" />
                    </a>
                </div>
                <div className="md:flex flex-grow items-center">
                    <ul className="flex flex-col mx-auto md:mx-0 md:flex-row list-none text-center items-center">
                        <li className="nav-item md:pe-4 mt-7 md:mt-0">
                            <a
                                className="px-4 py-2 flex items-center text-lg md:text-sm uppercase tracking-widest font-normal leading-snug text-white hover:text-red-500 duration-150"
                                href="#"
                            >
                                features                                </a>
                        </li>
                        <li className="nav-item md:pe-4 mt-5 md:mt-0">
                            <a
                                className="px-4 py-2 flex items-center text-lg md:text-sm uppercase tracking-widest font-normal leading-snug text-white hover:text-red-500 duration-150"
                                href="#"
                            >
                                pricing
                            </a>
                        </li>
                        <li className="nav-item md:pe-4 mt-5 md:mt-0">
                            <a
                                className="px-4 py-2 flex items-center text-lg md:text-sm uppercase tracking-widest font-normal leading-snug text-white hover:text-red-500 duration-150"
                                href="#"
                            >
                                contact
                            </a>
                        </li>
                    </ul>
                    <ul className='flex md:ml-auto items-center justify-center mt-7 md:mt-0'>
                        <li className='nav-item px-5'>
                            <a href="">
                                <img src={facebook} alt="" />
                            </a>
                        </li>
                        <li className='nav-item px-5'>
                            <a href="">
                                <img src={twitter} alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default FooterNav;