import React from "react";
import toolbox1 from "./img/toolbox1.png";
import toolbox2 from "./img/toolbox2.png";
import toolbox3 from "./img/toolbox3.png";
import toolbox4 from "./img/toolbox4.png";

function Cards() {
    return (
        <div class="bg-white px-8 pb-20 pt-1">
            <div class="text-center">
                <p className="md:text-3xl text-lg my-16 font-bold text-blue-700 leading-snug">ALL-IN-ONE TOOLBOX FOR METAVERSE!</p>
                <div class="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
                    <div class="bg-transparent group relative overflow-hidden hover:shadow-lg transform duration-200">
                        <div class="relative items-center justify-center flex w-full h-80 md:h-64 lg:h-44">
                            <img src={toolbox1} alt="" className="w-auto h-1/2 object-cover" />
                            {/*<img src="https://cdn.pixabay.com/photo/2021/09/12/17/43/parrot-feathers-6619082_960_720.jpg"
                                alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                                class="w-full h-full object-center object-cover"/>*/}
                </div>
                            <div class="px-3 py-4">
                                <h3 class="text-sm text-gray-500 pb-2">
                                    <a class="bg-indigo-600 py-1 px-2 text-white rounded-lg" href="#">
                                        <span class="absolute inset-0"></span>
                            Studio / SDK
                        </a>
                                </h3>
                                <p class="text-base font-semibold text-black group-hover:text-indigo-600">
                                Essential AR / VR features you want to creat and your users want.</p>
                            </div>
            </div>
                    <div class="bg-transparent group relative overflow-hidden hover:shadow-lg transform duration-200">
                        <div class="relative items-center justify-center flex w-full h-80 md:h-64 lg:h-44">
                            <img src={toolbox2} alt="" className="w-auto h-1/2 object-cover" />
                        </div>
                        <div class="px-3 py-4">
                            <h3 class="text-sm text-gray-500 pb-2">
                                <a class="bg-indigo-600 py-1 px-2 text-white rounded-lg" href="#">
                                    <span class="absolute inset-0"></span>
                            Console
                        </a>
                            </h3>
                            <p class="text-base font-semibold text-black group-hover:text-indigo-600">
                                A tool to create, manage, and monitor your AR / VR content.
                                </p>
                        </div>
                    </div>
                    <div class="bg-transparent group relative overflow-hidden hover:shadow-lg transform duration-200">
                        <div class="relative items-center justify-center flex w-full h-80 md:h-64 lg:h-44">
                            <img src={toolbox3} alt="" className="w-auto h-1/2 object-cover" />
                        </div>
                        <div class="px-3 py-4">
                            <h3 class="text-sm text-gray-500 pb-2">
                                <a class="bg-indigo-600 py-1 px-2 text-white rounded-lg" href="#">
                                    <span class="absolute inset-0"></span>
                            Content
                        </a>
                            </h3>
                            <p class="text-base font-semibold text-black group-hover:text-indigo-600">
                                Curate contents to fit your users needs.
                                </p>
                        </div>
                    </div>
                    <div class="bg-transparent group relative overflow-hidden hover:shadow-lg transform duration-200">
                        <div class="relative items-center justify-center flex w-full h-80 md:h-64 lg:h-44">
                            <img src={toolbox4} alt="" className="w-auto h-1/2 object-cover" />
                        </div>
                        <div class="px-3 py-4">
                            <h3 class="text-sm text-gray-500 pb-2">
                                <a class="bg-indigo-600 py-1 px-2 text-white rounded-lg" href="#">
                                    <span class="absolute inset-0"></span>
                            Market
                        </a>
                            </h3>
                            <p class="text-base font-semibold text-black group-hover:text-indigo-600">
                                Buy / Sell your digital assets such as images, audio, video, 3D contents, 3D video, AR / VR stickers, games items, etc.
                                </p>
                        </div>
                    </div>
        </div>
                            </div>
</div>
    );
}

export default Cards;