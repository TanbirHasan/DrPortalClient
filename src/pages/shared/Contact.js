import React from 'react';

const Contact = () => {
    return (
      <div className="form mt-20 py-20">
        <div className="flex flex-col items-center justify-center mb-10">
          <h3 className="text-primary text-1xl">Connect Us</h3>
          <h2 className="text-3xl text-white">Stay Connected With Us</h2>
        </div>
        <form className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Email"
            className="w-1/4 px-2 py-2 my-1 border-2 rounded-md"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-1/4 px-2 py-2 my-1 border-2 rounded-md"
          />
          <textarea
            placeholder="Your Message"
            cols="20"
            rows="7"
            className="w-1/4 px-2 border-2 rounded-md"
          ></textarea>
        </form>
      </div>
    );
};

export default Contact;