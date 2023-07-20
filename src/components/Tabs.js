import { useState } from "react";
import "./Tabs.css";
import FeaturesOne from '../assets/images/illustration-features-tab-1.svg';
import FeaturesTwo from '../assets/images/illustration-features-tab-2.svg';
import FeaturesThree from '../assets/images/illustration-features-tab-3.svg';
import rectangletwo from '../assets/images/Rectangle Copy 14.svg';

function Tabs() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="container mx-auto mt-10 h-full">
            <div className="flex justify-center h-36">
                <div className="px-9 opacity-75 duration-150 hover:opacity-100" >
                    <button
                        className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(1)}
                    >
                        Simple Bookmarking
                    </button>
                </div>
                <div className="px-9 opacity-75 duration-150 hover:opacity-100">
                    <button
                        className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(2)}
                    >
                        Speedy Searching
                    </button>
                </div>
                <div className="px-9 opacity-75 duration-150 hover:opacity-100">
                    <button
                        className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(3)}
                    >
                        Easy Sharing
                    </button>
                </div>
            </div>
            <div className="px-11">
                <div className={toggleState === 1 ? "content  active-content" : "content"}>
                    <div className="grid md:grid-cols-2">
                        <div className="mx-auto">
                            <img src={rectangletwo} className="absolute hidden lg:block z-0 left-0 pt-11 mt-11" alt="" />
                            <img src={FeaturesOne} className="relative z-10" alt="" />
                        </div>
                        <div className="flex flex-col justify-center md:ms-11 text-center md:text-start mt-11 md:mt-0">
                            <h2 className='text-4xl font-medium'>Bookmarks in 1 click</h2>
                            <p className="mt-5 opacity-50 text-lg leading-7 md:w-8/12">
                                Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.
                            </p>
                            <div className="mt-7">
                                <button className='bg-indigo-500 duration-150 px-4 md:px-7 text-sm py-3 drop-shadow-lg border-2 border-indigo-500 hover:bg-transparent hover:border-indigo-500 hover:text-indigo-500 text-white rounded-md font-medium'>More info</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={toggleState === 2 ? "content  active-content" : "content"}>
                    <div className="grid md:grid-cols-2 md:ms-11">
                        <div className="mx-auto">
                            <img src={rectangletwo} className="absolute hidden lg:block z-0 left-0 pt-11 mt-11" alt="" />
                            <img src={FeaturesTwo} className="relative z-10" alt="" />
                        </div>
                        <div className="flex flex-col justify-center md:ms-11 text-center md:text-start mt-11 md:mt-0">
                            <h2 className='text-4xl font-medium'>Intelligent search</h2>
                            <p className="mt-5 opacity-50 text-lg leading-7 md:w-8/12">
                                Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.
                            </p>
                            <div className="mt-7">
                                <button className='bg-indigo-500 duration-150 px-4 md:px-7 text-sm py-3 drop-shadow-lg border-2 border-indigo-500 hover:bg-transparent hover:border-indigo-500 hover:text-indigo-500 text-white rounded-md font-medium'>More info</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={toggleState === 3 ? "content  active-content" : "content"}>
                    <div className="grid md:grid-cols-2 md:ms-11">
                        <div className="mx-auto">
                            <img src={rectangletwo} className="absolute hidden lg:block z-0 left-0 pt-11 mt-11" alt="" />
                            <img src={FeaturesThree} className="relative z-10" alt="" />
                        </div>
                        <div className="flex flex-col justify-center md:ms-11 text-center md:text-start mt-11 md:mt-0">
                            <h2 className='text-4xl font-medium'>Share your bookmarks</h2>
                            <p className="mt-5 opacity-50 text-lg leading-7 md:w-8/12">
                                Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.
                            </p>
                            <div className="mt-7">
                                <button className='bg-indigo-500 duration-150 px-4 md:px-7 text-sm py-3 drop-shadow-lg border-2 border-indigo-500 hover:bg-transparent hover:border-indigo-500 hover:text-indigo-500 text-white rounded-md font-medium'>More info</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tabs;