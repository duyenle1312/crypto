import "./Form.css";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_rrvnzco",
        "template_3v5nih4",
        formRef.current,
        "user_DrriDPTGKO2Zj4RDXCA6W"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
      <div className="c text-center pt-24 mb-32">
          <p className="md:text-6xl text-3xl my-3 font-bold text-white leading-snug">CONTACT US</p>
      <div className="c-wrapper grid grid-cols-1 md:grid-cols-2">
        <div className="c-left text-left md:m-auto col-span-1 my-3">
          <div className="text-white m-auto">
                      <div className="mb-6">
                          <p className="uppercase text-md font-semibold text-blue-300">Email Address</p>
                          <p className="text-sm mt-3"> support@meta-bot.world</p>
                      </div>

                      <div className="mb-6">
                          <p className="uppercase text-md font-semibold text-blue-300">Twitter </p>
                          <p className="text-sm mt-3">https://twitter.com/Metabotofficial</p>
                      </div>

                      <div className="mb-6">
                          <p className="uppercase text-md font-semibold text-blue-300">Telegram community</p>
                          <a className="text-sm mt-3">https://t.me/MBTcommunity</a>
                      </div>
          </div>
        </div>
        <div className="c-right col-span-1">
          <form ref={formRef} > {/*onSubmit={handleSubmit}*/}
            <input  type="text" placeholder="Name" name="user_name" className="rounded-lg w-full" />
            <input  type="text" placeholder="Phone" name="user_subject"  className="rounded-lg w-full"/>
            <input  type="text" placeholder="Email" name="user_email"  className="rounded-lg w-full"/>
            <textarea  rows="3" placeholder="Message" name="message"  className="rounded-lg w-full py-3"/>
            <button className="px-4 py-3 mt-3 bg-blue-500 rounded-lg" >SEND</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
