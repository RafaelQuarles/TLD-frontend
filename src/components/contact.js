import React from "react";
import { Link } from "gatsby";
import emailSvg from "../images/email.svg";

const Contact = () => {
  return (
    <div
      id="contact"
      className="my-24 flex flex-col md:flex-row rounded-xl md:rounded-2xl contactContainer shadow-2xl overflow-hidden"
    >
      <div className="flex flex-col text-center rounded-2xl min-w-1/3">
        <img
          src={emailSvg}
          alt="email illustration"
          className="w-1/2 md:w-4/5 m-auto md:block my-2"
        />
        <div className="text-left bg-gray-900 px-6 py-10 h-full">
          <h2 className="text-yellow-400 font-extrabold text-xl md:text-2xl pb-2">
            Phone:
          </h2>
          <p className="text-gray-300 font-extrabold text-xl md:text-lg pb-2 ">
            (123) 456-7890
          </p>
          <h2 className="text-yellow-400 font-extrabold text-xl md:text-2xl pb-2">
            Email:
          </h2>
          <p className="text-gray-300 font-extrabold text-sm md:text-lg pb-2">
            CustomerService@ toplinedistributors.com
          </p>
          <h2 className="text-yellow-400 font-extrabold text-xl md:text-2xl pb-2">
            Address:
          </h2>
          <p className="text-gray-300 font-extrabold text-md md:text-xl pb-2">
            370 Great SW Pkwy SW
          </p>
          <p className="text-gray-300 font-extrabold text-md md:text-xl pb-2">
            Suite J <span className="text-sm">( Rear Entrance )</span>
          </p>
          <p className="text-gray-300 font-extrabold text-md md:text-xl pb-2">
            Atlanta, GA 30336
          </p>
        </div>
      </div>
      <div className="pt-8 text-center bg-gray-600 h-full md:w-full">
        <form>
          <div className="">
            <div className="">
              <h2 className="text-gray-300 font-extrabold text-2xl md:text-3xl leading-tight mb-2">
                Let's Talk<span className="text-yellow-400 ml-1">,</span>
              </h2>
            </div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="rounded-lg p-3 md:p-4 my-2 w-4/5 md:w-2/3"
              required
            />
            <br />
            <input
              type="phone"
              name="phone"
              placeholder="Phone Number"
              className="rounded-lg p-3 md:p-4 my-2 w-4/5 md:w-2/3"
            />
            <br />
            <input
              type="text"
              name="company"
              placeholder="Company"
              className="rounded-lg p-3 md:p-4 my-2 w-4/5 md:w-2/3"
            />
            <br />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="rounded-lg p-3 md:p-4 my-2 w-4/5 md:w-2/3"
              required
            />
            <br />
            <textarea
              type="text"
              name="message"
              placeholder="Message"
              className="rounded-lg p-3 md:p-4 my-2 w-4/5 md:w-2/3 h-40"
            ></textarea>
            <br />

            <button
              id="submit"
              type="submit"
              className="bg-gray-300 hover:bg-yellow-400 rounded-lg p-2 w-1/2 mt-2 my-12"
            >
              Send!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
