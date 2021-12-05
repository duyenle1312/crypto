import React, { useState } from "react";
import "./App.css";
import "./Home.css";
import './index.css';
import logo from "./img/logo.png";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Pdf from "./components/documents/meta.pdf"
import About from "./About";
import Footer from "./Footer";
import Project from "./Project";
import Tab from "./Tab";
import YoutubeEmbed from "./YouTube";
import Form from "./Form";
import Cards from "./CardInfo";
import Team from "./Team";
import Roadmap from "./img/roadmap.png";

function Home() {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  // Toogle Menu
   const [show, setShow] = useState(true);
  return (
    <div>
        <div className="home min-h-screen" id="Home">
          <div className="home__bg min-h-screen">

                  <header class="flex header sticky top-0 bg-transparent shadow-md items-center justify-between px-8 py-02">
                      <div class="w-4/12 md:w-1/12 text-left flex">
                          <img src={logo} alt="" className="h-16 w-16" />
                          <p className="ml-3 m-auto text-left text-white font-bold uppercase">Metabot</p>
                      </div>

                      <nav class="md:block hidden nav font-semibold text-lg">
                          <ul class="flex items-center">
                              <li class="p-4 hover:text-black">
                                  <a href="" className="text-white">Metabot</a>
                              </li>
                              <li class="p-4 hover:text-green duration-200 cursor-pointer">
                                  <a href="">MBlock</a>
                              </li>
                              <li class="p-4 hover:text-green-500">
                                  <a href="">MMarket</a>
                              </li>
                          </ul>
                      </nav>

                      {/*<div class="md:flex hidden w-3/12 justify-end gap-4">
                          <a href="">
                              EN
                          </a>
                          <a href="">
                              FR
                          </a>
                      </div>*/}
                  
                      <div class="md:hidden">
                          <MenuRoundedIcon color="primary" />                      
                      </div>
                  </header>

            {/*<div className="header d__flex align__items__center pxy__30" className="md:opacity-0 opacity-100 p-8">
               Toogle Menu className="md:opacity-0 opacity-100 p-8" Working 
              <div className="toggle__menu">
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  class="bi bi-justify white pointer"
                  className="z-50"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </div>
              {show ?(
              <div className="sideNavbar z-40">
                  <ul className="sidebar d__flex">
                  <li className="sideNavbar">
                  <a href="#home">Home</a>
                </li>
                <li className="sideNavbar">
                  <a href="#about">About</a>
                </li>
                <li className="sideNavbar">
                  <a href="#services">Services</a>
                </li>
                <li className="sideNavbar">
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li className="sideNavbar">
                  <a href="#blog">Blog</a>
                </li>
                <li className="sideNavbar">
                  <a href="#contact">Contact</a>
                </li>
                  </ul>
              </div>
               ) : null}
            </div> */}             

            {/* HOME CONTENT */}
            <div className="container">
              <div className="home__content">
                <div className="home__meta" style={{ width: "55%", marginTop: "-80px" }}>
                  <p className="md:text-5xl text-xl font-bold text-white leading-snug">DECORATE THE WORLD WITH YOUR IMAGINATION</p>
                  <p className="md:text-xl text-sm mt-6 text-white">
                        The All-In-One Blockchain Platform for <br/> Real-Time Metaverse Community and Your Digital Twin
                  </p> 
                  <p className="my-3">
                    In the world of Metabot, more participants can create and share
                    AR & VR content together based on their experiences, skills, and
                    content by applying the world’s most advanced AR / VR SDK.
                  </p>
                    <div className="md:flex inline-block gap-x-6 mt-8">
                   <a href="/buy" class="mb-3 flex items-center md:w-3/12 font-semibold md:text-sm text-xs justify-center p-3 text-base font-medium leading-6 text-white text-blue-700 transition duration-150 ease-in-out border border-transparent rounded-lg rounded-full bg-blue-100 hover:bg-white focus:outline-none focus:border-blue-700 focus:shadow-outline-blue" data-unsp-sanitized="clean">
                      BUY MBT
                   </a>
                    <a href={Pdf} target='_blank' rel='noopener noreferrer' class="mb-3 flex items-center md:w-3/12 font-semibold md:text-base text-xs justify-center p-3 text-base font-medium leading-6 text-white text-blue-700 transition duration-150 ease-in-out border border-transparent rounded-lg rounded-full bg-blue-100 hover:bg-white focus:outline-none focus:border-blue-700 focus:shadow-outline-blue" data-unsp-sanitized="clean">
                        WHITEPAPER
                   </a>
                    </div>
              
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="App">
              <YoutubeEmbed embedId="wwLY89pevcA" />
              <Cards />
              <Tab />
              <About />
              <div className="text-center">
                <h3 class="uppercase mt-12 md:mt-32 my-6 font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-black my-6">
                      ROADMAP
                </h3>
              </div>
              <img class="md:px-9 object-top object-cover w-full h-full" src={Roadmap} alt="photo" />
              <Team />
              <Project />
              <Form />
              <Footer />
          </div>
        </div>
  );
}

export default Home;
