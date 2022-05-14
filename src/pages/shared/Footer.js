import React from 'react';

const Footer = () => {
    return (
      <div className="Footer">
        <div className="flex justify-between px-20 py-10">
          <div className="flex flex-col text-accent">
            <span className="footer-title">Services</span>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
          <div className="flex flex-col text-accent">
            <span className="footer-title">Oral Health</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
          <div className=" flex flex-col text-accent">
            <span className="footer-title">Our Buisness</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </div>
        <div className="flex justify-center">
          <h3>Copyrights 2022 All rights received</h3>
        </div>
      </div>
    );
};

export default Footer;