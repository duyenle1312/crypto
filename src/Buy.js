import React from "react";
import Table from "./Table";
import Timer from "./Timer";
import "./Timer.css";
import ConnectWallet from "./Connect";

export default function Buy() {
    return (

        <div>           
            <div className="justify-center items-center min-h-screen bg-white text-center">
                <div className="flex justify-center items-center mt-16 px-8">
                    <h1 className="text-3xl text-black font-semibold uppercase px-6">Let's countdown for the Private Sale coming!</h1>
                </div>
                <div className="flex justify-center items-center">
                    <Timer date="12/02/2021 11:00:00" />
                </div>

                <div className="flex justify-center items-center mt-16">
                    <h1 className="text-3xl font-semibold text-black uppercase">Metabot Token Availability</h1>
                </div>
                <div className="flex justify-center items-center mb-12">
                    <Table />
                </div>
            
                <div className="flex justify-center items-center mt-16">
                    <h1 className="text-6xl font-bold text-black uppercase">How to buy?</h1>
                </div>
                <div className="flex justify-center items-center -mt-3 mb-6">
                    <p className="text-xl text-black ">Send the equivalent of BNB to the following wallets</p>
                </div>

                <div className="lg:hidden flex flex-wrap justify-center items-center w-full overflow-auto">
                    <div className="w-full justify-center items-center mt-3">
                        <p className="text-blue-500 text-center text-xl p-3"><b>Seed Round</b> 0x467Ad9b0165101B035bB7283BA3d0ED872061aED</p>
                    </div>
                    <div className="w-full justify-center items-center">
                        <p className="text-blue-600 text-center text-xl p-3"><b>Private Sale</b> 0x4609e4706B04C92c4908C5997a7569643e95a883</p>
                    </div>
                    <div className="w-full justify-center items-center">
                        <p className="text-blue-700 text-center text-xl p-3"><b>Pre-Sale</b> 0x5054ecFB322844d2977ab9e5f7382C88568D7250</p>
                    </div>
                    <div className="w-full justify-center items-center">
                        <p className="text-blue-800 text-center text-xl p-3"><b>Public Sale</b> 0x2D7F782DE30666F6A56E022F79313614146b1e33</p>
                    </div>
                </div>

                <div className="lg:block hidden">
                    <div className="justify-center items-center mt-3">
                        <input className="text-white text-center bg-blue-500 text-xl" type="text" value="Seed Round: 0x467Ad9b0165101B035bB7283BA3d0ED872061aED" readonly="readonly" />
                    </div>
                    <div className="flex justify-center items-center -mt-6">
                        <input className="text-white text-center bg-blue-600 text-xl" type="text" value="Private Sale: 0x4609e4706B04C92c4908C5997a7569643e95a883" readonly="readonly" />
                    </div>
                    <div className="flex justify-center items-center -mt-6">
                        <input className="text-white text-center bg-blue-700 text-xl" type="text" value="Pre-Sale: 0x5054ecFB322844d2977ab9e5f7382C88568D7250" readonly="readonly" />
                    </div>
                    <div className="flex justify-center items-center -mt-6">
                        <input className="text-white text-center bg-blue-800 text-xl" type="text" value="Public Sale: 0x2D7F782DE30666F6A56E022F79313614146b1e33" readonly="readonly" />
                    </div>
                </div>
                <ConnectWallet />
            </div>
        </div>
    );
}