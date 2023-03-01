import React from "react";
import logo from "../assets/logo_footer.svg";
import Button from "../components/input/Button.js";
import chevron from "../assets/chevron-right.png";

const Footer = () => {
  return (
    <footer className="bg-[#21252B] px-[10vw] py-8 text-white font-semibold">
      <div className="max-w-[200px] ">
        <img src={logo}></img>
      </div>
      <div className="grid grid-cols-4 mt-3 gap-8">
        <div className="max-w-[210px] ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia,molestiae quas vel sint commodi
          </p>
          <Button dark={false} content="Get Quote"/>
        </div>
        <div>
          <h5 className="font-bold text-xl">Contact info</h5>
          <hr className="max-w-[100px] h-[5px]"></hr>
          <p className="pb-1">
            259 Westminster <br />
            StreetRowlett, TX 75088
          </p>
          <p className="py-1">(856) 342-8875</p>
          <p>buisness@gmail.com</p>
        </div>
        <div>
          <h5 className="font-bold text-xl">Quick Links</h5>
          <hr className="max-w-[100px] h-[5px]"></hr>
          <div className="grid grid-rows-3 gap-1">
            <a href="#Hero">
              Home
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 inline-block ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </a>

            <a href="#About-section">
              About Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 inline-block ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </a>
            <a href={"./ContactUs"}>
              Contact Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 inline-block ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <hr className="mt-8"></hr>
      <p className="mt-8 font-normal">©2022 Tetra, All Rights reserved</p>
    </footer>
  );
};

export default Footer;
