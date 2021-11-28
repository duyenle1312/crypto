import React from "react";
import "./About.css";
import aboutImg from "./img/about.jpg";

function About() {
  //  Up To Top Btn

  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2 m-auto">
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
