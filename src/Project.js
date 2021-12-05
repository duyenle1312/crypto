import React from "react";
import "./Project.css";
import "./App.css";
import Project1 from './img/portfolio-1.jpg';
import Project2 from './img/portfolio-2.jpg';
import Project3 from './img/portfolio-3.jpg';
import Project4 from './img/portfolio-4.jpg';

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
          <div className="heading px-12">
              <div className="-mt-8 flex items-center justify-center text-center">
                  <p className="md:text-6xl text-3xl my-3 font-bold text-white leading-snug">Our Latest Projects</p>
              </div>
              <div className="flex items-center justify-center text-center">
                  <p className="text-lg my-3 font-bold text-white leading-snug">Metabot Blockchain (MBT) Technology - The Key to The Metaverse</p>
              </div>
              <div className="flex items-center justify-center text-center mb-6">
                  <p className="text-lg font-bold text-white leading-snug">but the majority have suffered alteration.</p>
              </div>
              
          </div>

           <div className="container">
               <div className="row">
             
                 <div className="col__3">
                     <div className="project__box pointer relative">
                         <div className="project__box__img pointer relative">
                             <div className="project__img__box">
                                 <img src={Project1} alt="" className="project__img" />
                             </div>
                             <div className="mask__effect"></div>
                         </div>
                         <div className="project__meta absolute">
                         <h5 className="project__text">AR & VR</h5>
                         <h4 className="project__text">Prepare with MGear</h4>
                         <a href="#" className="project__btn">View Details</a>
                         </div>
                     </div>
                 </div>


                 <div className="col__3">
                     <div className="project__box pointer relative">
                         <div className="project__box__img pointer relative">
                             <div className="project__img__box">
                                 <img src={Project2} alt="" className="project__img" />
                             </div>
                             <div className="mask__effect"></div>
                         </div>
                         <div className="project__meta absolute">
                         <h5 className="project__text">THE NEW INTERNET</h5>
                         <h4 className="project__text">Metabot World on Net</h4>
                         <a href="#" className="project__btn">View Details</a>
                         </div>
                     </div>
                 </div>


                 <div className="col__3">
                     <div className="project__box pointer relative">
                         <div className="project__box__img pointer relative">
                             <div className="project__img__box">
                                 <img src={Project3} alt="" className="project__img" />
                             </div>
                             <div className="mask__effect"></div>
                         </div>
                         <div className="project__meta absolute">
                         <h5 className="project__text">METABOT STUDIO</h5>
                         <h4 className="project__text">Produce AR/VR production</h4>
                         <a href="#" className="project__btn">View Details</a>
                         </div>
                     </div>
                 </div>


                 <div className="col__3">
                     <div className="project__box pointer relative">
                         <div className="project__box__img pointer relative">
                             <div className="project__img__box">
                                 <img src={Project4} alt="" className="project__img" />
                             </div>
                             <div className="mask__effect"></div>
                         </div>
                         <div className="project__meta absolute">
                         <h5 className="project__text">PARTICIPANTS</h5>
                         <h4 className="project__text">Metabot World Participants</h4>
                         <a href="#" className="project__btn">View Details</a>
                         </div>
                     </div>
                 </div>


                 <div className="col__3">
                     <div className="project__box pointer relative">
                         <div className="project__box__img pointer relative">
                             <div className="project__img__box">
                                 <img src={Project3} alt="" className="project__img" />
                             </div>
                             <div className="mask__effect"></div>
                         </div>
                         <div className="project__meta absolute">
                         <h5 className="project__text">METABOT ECONOMY </h5>
                         <h4 className="project__text">Crypto Currency</h4>
                         <a href="#" className="project__btn">View Details</a>
                         </div>
                     </div>
                 </div>


                 <div className="col__3">
                     <div className="project__box pointer relative">
                         <div className="project__box__img pointer relative">
                             <div className="project__img__box">
                                 <img src={Project4} alt="" className="project__img" />
                             </div>
                             <div className="mask__effect"></div>
                         </div>
                         <div className="project__meta absolute">
                         <h5 className="project__text">APPLICATIONS</h5>
                         <h4 className="project__text">Power Tool for Developers</h4>
                         <a href="#" className="project__btn">View Details</a>
                         </div>
                     </div>
                 </div>
             
                 <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
                 {/*<button className="view__more pointer btn">View more</button>*/}
                 </div>

               </div>
           </div>
    </div>
  );
}

export default Project;
