import React from "react";
import "./About.css";
import aboutImg from "./img/about.jpg";

const Tabs = ({ color }) => {
    const [openTab, setOpenTab] = React.useState(1);
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full">
                    <ul
                        role="tablist"
                    >
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded-full block leading-normal " +
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
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded-full block leading-normal " +
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
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded-full block leading-normal " +
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
                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words bg-transparent w-full mb-6 shadow-lg rounded">
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">
                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                    <div className="hero bg-blue-50 py-16">
                                        <div className="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
                                            <div className="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                                                <div className="hero-text col-span-6">
                                                    <h1 className=" font-bold text-4xl md:text-5xl max-w-xl text-gray-900 leading-tight">
                                                        Metabot
        </h1>
                                                    <hr className=" w-12 h-1 bg-orange-500 rounded-full mt-8" />
                                                    <p className="text-gray-800 text-base leading-relaxed mt-8 font-semibold">
                                                        The points used in the metaverse game are converted into MBT Metabot crypto currency and used to buy and sell game assets.
        </p>
                                                </div>
                                                <div className="hero-image col-span-6">
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                    <div className="hero bg-blue-50 py-16">
                                        <div className="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
                                            <div className="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                                                <div className="hero-text col-span-6">
                                                    <h1 className=" font-bold text-4xl md:text-5xl max-w-xl text-gray-900 leading-tight">
                                                        Metabot
        </h1>
                                                    <hr className=" w-12 h-1 bg-orange-500 rounded-full mt-8" />
                                                    <p className="text-gray-800 text-base leading-relaxed mt-8 font-semibold">
                                                        Retailers engage their customers, create a more interactive shopping experience, and help their products stand out by using AR / VR software to provide virtual try-ons.
        </p>
                                                </div>
                                                <div className="hero-image col-span-6">
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                    <div className="hero py-16">
                                        <div className="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
                                            <div className="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                                                <div className="hero-text col-span-6">
                                                    <h1 className=" font-bold text-4xl md:text-5xl max-w-xl text-white leading-tight">
                                                        Metabot
        </h1>
                                                    <hr className=" w-12 h-1 bg-orange-500 rounded-full mt-8" />
                                                    <p className="text-gray-300 text-base leading-relaxed mt-8 font-semibold">
                                                        In the metaverse world, you can easily participate in famous performances and exhibitions with people in a non-face-to-face virtual space as if you are actually participating.
        </p>
                                                </div>
                                                <div className="hero-image col-span-6">
                                                    
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

function About() {
  //  Up To Top Btn
    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");
       upToTop.classList.toggle("active", window.scrollY > 0)
    });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="px-12">
           <Tabs color="indigo" />;
        </div>
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                Metabot is a blockchain-based platform that creates
                an augmented and virtual reality ecosystem by
                introducing the applications of the underlying technology
                required in the metaverse (three-dimensional virtual
                world).
              </p>
              <p className="about__text p__color">
                Metaverse is already close to us and will become the
                mainstream of the augmented and virtualreality space
                connecting the internet, The metaverse of the future will
                be very similar to reality. And human avatars and AI will
                live together, as in the novel Snow Crash.
              </p>
              <p className="about__text p__color">
              In the world of Metabot, more participants can create and 
              share AR & VR content together based on their
    experiences, skills, and content.
              </p>
              <div className="about__button d__flex align__items__center">
                {/* <a href="#">
                  <button className="about btn pointer">Download Cv</button>
                </a>
                <a href="#">
                  <button className="about btn pointer">Hire Me</button>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
