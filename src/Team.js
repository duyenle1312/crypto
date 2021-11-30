import React from "react";
import team1 from "./img/team1.png";
import team2 from "./img/team2.png";
import team3 from "./img/team3.png";
import team4 from "./img/team4.png";
import team5 from "./img/team5.png";
import team6 from "./img/team6.png";

export default function Team() {
    return (
        <div class="bg-white mx-auto px-4 sm:px-6 lg:px-4 py-20">
            <div class="text-center pb-12">

                <h1 class="uppercase mb-12 font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-black my-6">
                    METABOT team members
        </h1>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 px-28">
                <div class="w-full bg-blue-50 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
                    <div class="w-full md:w-2/5 h-80">
                        <img class="object-top object-cover w-full h-full" src={team1} alt="photo" />
                    </div>
                    <div class="m-auto w-full md:w-3/5 text-left p-4 space-y-2">
                        <p class="text-xl text-gray-700 font-bold">Eugene S Middleton</p>
                        <p class="text-base text-gray-400 font-normal">Software Engineer</p>
                        <p class="text-base leading-relaxed text-gray-500 font-normal">University of Texas at Austin Computer Science <br /> Software Engineering MS <br /> Software Engineering Phd  </p>
                        <div class="flex justify-start space-x-2">
                            
                        </div>
                    </div>
                </div>
                <div class="w-full bg-blue-50 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
                    <div class="w-full md:w-2/5 h-80">
                        <img class="object-top object-cover w-full h-full" src={team2} alt="photo" />
                    </div>
                    <div class="m-auto w-full md:w-3/5 text-left p-4 space-y-2">
                        <p class="text-xl text-gray-700 font-bold">	Robert Horvath</p>
                        <p class="text-base text-gray-400 font-normal">Graphic Designer</p>
                        <p class="text-base leading-relaxed text-gray-500 font-normal">MBTi - Designer <br /> Masters of Fine Arts | Univ. of Toronto <br /> Contemporary </p>
                        <div class="flex justify-start space-x-2">
                            
                        </div>
                    </div>
                </div>
                <div class="w-full bg-blue-50 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
                    <div class="w-full md:w-2/5 h-80">
                        <img class="object-center object-cover w-full h-full" src={team3} alt="photo" />
                    </div>
                    <div class="m-auto w-full md:w-3/5 text-left p-4 md:p-4 space-y-2">
                        <p class="text-xl text-gray-700 font-bold">John Kaya</p>
                        <p class="text-base text-gray-400 font-normal">Dev Ops</p>
                        <p class="text-base leading-relaxed text-gray-500 font-normal" > MBTi - CSO - Licensing Department Head <br />University Of California At Berkeley <br /> Environmental Economics And Policies </p>
                        <div class="flex justify-start space-x-2">
                            
                        </div>
                    </div>
                </div>
                <div class="w-full bg-blue-50 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
                    <div class="w-full md:w-2/5 h-80">
                        <img class="object-center object-cover w-full h-full" src={team4} alt="photo" />
                    </div>
                    <div class="m-auto w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
                        <p class="text-xl text-gray-700 font-bold">Ted Stormont </p>
                        <p class="text-base text-gray-400 font-normal">Marketing</p>
                        <p class="text-base leading-relaxed text-gray-500 font-normal"> Sports Announcer <br /> Financial News <br /> MB Telecom - CS manager </p>
                        <div class="flex justify-start space-x-2">
                            
                        </div>
                    </div>
                </div>
                <div class="w-full bg-blue-50 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
                    <div class="w-full md:w-2/5 h-80">
                        <img class="object-center object-cover w-full h-full" src={team5} alt="photo" />
                    </div>
                    <div class="m-auto w-full md:w-3/5 text-left p-4 md:p-4 space-y-2">
                        <p class="text-xl text-gray-700 font-bold">Josua Smith</p>
                        <p class="text-base text-gray-400 font-normal">Project Manager</p>
                        <p class="text-base leading-relaxed text-gray-500 font-normal">Symverse - Service Planning <br /> Septem - Service Planning <br />Buzzling - Marketing Director <br /> Makeone - E-commerce Marketing</p>
                        <div class="flex justify-start space-x-2">
                            
                        </div>
                    </div>
                </div>
                <div class="w-full bg-blue-50 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
                    <div class="w-full md:w-2/5 h-80">
                        <img class="object-center object-cover w-full h-full" src={team6} alt="photo" />
                    </div>
                    <div class="m-auto w-full md:w-3/5 text-left p-4 md:p-4 space-y-2">
                        <p class="text-xl text-gray-700 font-bold">	George Swigert</p>
                        <p class="text-base text-gray-400 font-normal">Customer Satisfaction</p>
                        <p class="text-base leading-relaxed text-gray-500 font-normal"> MBTi - Software Engineer
<br /> Hanyang University
<br /> Computer Science and Engineering</p>
                        <div class="flex justify-start space-x-2">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}