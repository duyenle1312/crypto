import "./Form.css";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
    //const [submitting, setSubmitting] = useState(false);
    //const [email, setEmail] = useState("");
    //const [name, setName] = useState("");
    //const [message, setMessage] = useState("");

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
          <p className="md:text-6xl text-3xl my-3 font-bold text-black leading-snug uppercase">CONTACT US</p>
      <div className="c-wrapper grid grid-cols-1 md:grid-cols-2">
        <div className="c-left text-left md:m-auto col-span-1 my-3">
          <div className="text-white m-auto">
                      <div className="mb-6">
                          <p className="uppercase text-md font-semibold text-blue-500">Email Address</p>
                          <p className="text-sm mt-3 text-black"> support@meta-bot.world</p>
                      </div>

                      <div className="mb-6">
                          <p className="uppercase text-md font-semibold text-blue-500">Twitter </p>
                          <p className="text-sm mt-3 text-black">https://twitter.com/Metabotofficial</p>
                      </div>

                      <div className="mb-6">
                          <p className="uppercase text-md font-semibold text-blue-500">Telegram community</p>
                          <a className="text-sm mt-3 text-black">https://t.me/MBTcommunity</a>
                      </div>
          </div>
        </div>
        <div className="c-right col-span-1">
                  <form 
                      acceptCharset="UTF-8"
                      action="https://getform.io/f/1476b252-72be-4324-9da5-2f8f2b6a6d77"
                      method="POST"
                      encType="multipart/form-data"
                      name="ContactForm"
                  > {/*ref={formRef} onSubmit={handleSubmit} Link: https://app.getform.io/forms/34360# */}
            <input  type="text" placeholder="Name" name="name" className="text-black rounded-lg w-full" />
            <input  type="text" placeholder="Phone" name="phone"  className="text-black rounded-lg w-full"/>
            <input  type="text" placeholder="Email" name="email"  className="text-black rounded-lg w-full"/>
            <textarea  rows="3" placeholder="Message" name="message"  className="text-black rounded-lg w-full py-3"/>
            <button className="px-4 py-3 mt-3 bg-blue-500 rounded-lg" >SEND</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
