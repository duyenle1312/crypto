import React from "react";
import app5 from "./img/app6.png";
import app2 from "./img/app2.png";
import app3 from "./img/app3.png";
import app4 from "./img/app4.png";
import app7 from "./img/app7.png";
const Tabs = ({ color }) => {
    const [openTab, setOpenTab] = React.useState(1);
    return (
        <>
            <div className="flex flex-wrap justify-center items-center">
                <div className="w-10/12">
                    <ul
                        className="flex my-12 list-none flex-wrap py-3 flex-row px-3 bg-gray-800 rounded-full"
                        role="tablist"
                    >
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-md font-bold uppercase px-5 py-3 shadow-lg rounded-full block leading-normal " +
                                    (openTab === 1
                                        ? "text-white bg-" + color + "-600"
                                        : "text-" + color + "-300 bg-transparent")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                            >
                                GAME
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-md font-bold uppercase px-5 py-3 shadow-lg rounded-full block leading-normal " +
                                    (openTab === 2
                                        ? "text-white bg-" + color + "-600"
                                        : "text-" + color + "-300 bg-transparent")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                COMMERCE
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-md font-bold uppercase px-5 py-3 shadow-lg rounded-full block leading-normal " +
                                    (openTab === 3
                                        ? "text-white bg-" + color + "-600"
                                        : "text-" + color + "-300 bg-transparent")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(3);
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist"
                            >
                                EVENT
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-md font-bold uppercase px-5 py-3 shadow-lg rounded-full block leading-normal " +
                                    (openTab === 4
                                        ? "text-white bg-" + color + "-600"
                                        : "text-" + color + "-300 bg-transparent")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(4);
                                }}
                                data-toggle="tab"
                                href="#link4"
                                role="tablist"
                            >
                                SNS
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-md font-bold uppercase px-5 py-3 shadow-lg rounded-full block leading-normal " +
                                    (openTab === 5
                                        ? "text-white bg-" + color + "-600"
                                        : "text-" + color + "-300 bg-transparent")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(5);
                                }}
                                data-toggle="tab"
                                href="#link5"
                                role="tablist"
                            >
                                COIN
                            </a>
                        </li>
                    </ul>
                    <div className="relative flex flex-col text-left min-w-0 break-words bg-transparent w-full mb-6 shadow-lg rounded">
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">
                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                    <div className="hero bg-blue-50 py-16">
                                        <div className="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
                                            <div className="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                                                <div className="hero-text col-span-6">
                                                    <h1 className=" font-bold text-4xl md:text-5xl max-w-xl text-blue-500 leading-tight">
                                                        Metaverse
        </h1>
                                                    <hr className=" w-12 h-1 bg-orange-500 rounded-full mt-8" />
                                                    <p className="text-gray-800 text-base leading-relaxed mt-8 font-semibold">
                                                        The points used in the metaverse game are converted into MBT Metabot crypto currency and used to buy and sell game assets.
        </p>
                                                </div>
                                                <div className="hero-image col-span-6">
                                                <img src={app5} alt="" className="w-auto h-1/2 object-cover" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={openTab === 2 ? "block" : "hidden"} id="link3">
                                    <div className="hero py-16">
                                        <div className="hero bg-blue-50 py-16">
                                            <div className="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
                                                <div className="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                                                    <div className="hero-text col-span-6">
                                                        <h1 className=" font-bold text-4xl md:text-5xl max-w-xl text-blue-500 leading-tight">
                                                        Metabot Marketplace
        </h1>
                                                        <hr className=" w-12 h-1 bg-orange-500 rounded-full mt-8" />
                                                        <p className="text-gray-800 text-base leading-relaxed mt-8 font-semibold">
                                                        Retailers engage their customers, creat a more interactive shopping experiences, and help their product stand out by using AR / VR software to provide virtual try-ons.
        </p>
                                                </div>
                                                <div className="hero-image col-span-6">
                                                <img src={app2} alt="" className="w-auto h-1/2 object-cover" />
                                                </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                <div className="hero py-16">
                                        <div className="hero bg-blue-50 py-16">
                                            <div className="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
                                                <div className="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                                                    <div className="hero-text col-span-6">
                                                        <h1 className=" font-bold text-4xl md:text-5xl max-w-xl text-blue-500 leading-tight">
                                                        Metabot Event
        </h1>
                                                        <hr className=" w-12 h-1 bg-orange-500 rounded-full mt-8" />
                                                        <p className="text-gray-800 text-base leading-relaxed mt-8 font-semibold">
                                                        Retailers engage their customers, create a more interactive shopping experience, and help their products stand out by using AR / VR software to provide virtual try-ons.
        </p>
                                                </div>
                                                <div className="hero-image col-span-6">
                                                <img src={app3} alt="" className="w-auto h-1/2 object-cover" />
                                                </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={openTab === 4 ? "block" : "hidden"} id="link3">
                                <div className="hero py-16">
                                        <div className="hero bg-blue-50 py-16">
                                            <div className="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
                                                <div className="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                                                    <div className="hero-text col-span-6">
                                                        <h1 className=" font-bold text-4xl md:text-5xl max-w-xl text-blue-500 leading-tight">
                                                        Metaverse Social Network Service
        </h1>
                                                        <hr className=" w-12 h-1 bg-orange-500 rounded-full mt-8" />
                                                        <p className="text-gray-800 text-base leading-relaxed mt-8 font-semibold">
                                                        COVID-19 pandemic has made many changes in human encounters. Now it becomes natural to discover and meet various people in a virtual space.        </p>
                                                </div>
                                                <div className="hero-image col-span-6">
                                                <img src={app4} alt="" className="w-auto h-1/2 object-cover" />
                                                </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={openTab === 5 ? "block" : "hidden"} id="link3">
                                    <div className="hero py-16">
                                        <div className="hero bg-blue-50 py-16">
                                            <div className="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
                                                <div className="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                                                    <div className="hero-text col-span-6">
                                                        <h1 className=" font-bold text-4xl md:text-5xl max-w-xl text-blue-800 leading-tight">
                                                        Metabot On-Demand Service
        </h1>
                                                        <hr className=" w-12 h-1 bg-orange-500 rounded-full mt-8" />
                                                        <p className="text-gray-800 text-base leading-relaxed mt-8 font-semibold">
                                                        The points used in the metaverse game are converted into MBT Metabot crypto currency and used to buy and sell game assets.
                                        
                                
        </p>
                                                </div>
                                                <div className="hero-image col-span-6">
                                                <img src={app7} alt="" className="w-auto h-1/2 object-cover" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>     
    );
};

function Tab() {
    return (
        <div className="px-12 justify-center text-center">
            <p className="md:text-3xl text-lg mt-12 font-bold text-white leading-snug">METABOT SOLUTIONS FOR</p>
            <p className="md:text-3xl text-lg font-bold text-blue-500 leading-snug">METAVERSE APPLICATIONS</p>
            <Tabs color="indigo" />;
        </div>
    );
}

export default Tab;
// JavaScript source code
