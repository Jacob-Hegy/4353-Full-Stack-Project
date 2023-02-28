import React from "react";
import gasStation from "../assets/gas-station.svg";
import aboutImg from "../assets/about-img.svg";
import Button from "../components/input/Button";
import Select from "../components/input/Select";
import { stateCodes, products } from "../data/data";
import useMediaQuery from "../hooks/useMediaQuery";
import Footer from "../components/Footer.js";
import ContactUs from "./ContactUs";

const Stat = ({ number, children }) => {
  return (
    <div className="justify-self-center">
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#89CDFE]"></div>
        <p className="text-[20px] font-bold">{number}</p>
      </div>
      <div className="max-w-[200px]">
        <p>{children}</p>
      </div>
    </div>
  );
};

const Home = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");
  const isBelowLargeScreens = useMediaQuery("(max-width: 1024px)");

  return (
    <div>
      <section id="Hero" className="h-[calc(100vh-75px)]">
        <div
          className={`${
            isAboveMediumScreens ? "bg-gradient-desktop" : "bg-gradient-mobile"
          } h-full`}
        >
          <div
            className={`max-w-[1400px] mx-auto h-full flex ${
              isAboveMediumScreens ? "justify-between" : "justify-center"
            } items-center gap-8 px-4`}
          >
            {/* Image Left */}

            {isAboveMediumScreens && (
              // <div className="absolute -left-[3vw] top-[50%] -translate-y-[50%]">
              <div
                className={`${
                  isBelowLargeScreens
                    ? "absolute -left-[3vw] top-[50%] -translate-y-[50%]"
                    : ""
                }`}
              >
                <img src={gasStation} alt="gas station" />
              </div>
            )}

            {/* Brief Form */}
            <form
              action=""
              className={`w-[500px] h-[500px] bg-white p-10 place-self-end self-center rounded-xl shadow-md flex flex-col justify-center z-[30] ${
                isBelowLargeScreens && isAboveMediumScreens ? "ml-auto" : ""
              }`}
            >
              <h1 className="text-center font-bold text-3xl mb-5">
                Get Your Next Fuel Quote Today
              </h1>
              <p className="text-center mb-7">
                Getting a fuel quote has never been easier
              </p>
              <div className="grid grid-cols-2 gap-8 [&>label>p]:font-semibold">
                <label htmlFor="states">
                  <p className="mb-4">LOCATION</p>
                  <Select
                    name="states"
                    prompt="Select state"
                    data={stateCodes}
                  />
                </label>
                <label htmlFor="products">
                  <p className="mb-4">PRODUCT</p>
                  <Select
                    name="products"
                    prompt={"Select product"}
                    data={products}
                  />
                </label>
              </div>
              <Button type="submit" content="Get a Quote" />
            </form>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}

      <section
        id="Stats-section"
        className={`grid ${
          isAboveMediumScreens ? "grid-cols-4 h-[325px]" : "grid-rows-4"
        } justify-center gap-4 px-[8vw] pb-8`}
      >
        <Stat number={3258}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi
        </Stat>
        <Stat number={3258}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi
        </Stat>
        <Stat number={3258}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi
        </Stat>
        <Stat number={3258}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi
        </Stat>
      </section>

      {/* ABOUT US SECTION */}

      <section id="about-section" className="h-[620px] bg-[#F5F5F5]">
        <div className="flex h-full">
          {isAboveMediumScreens && (
            <div className="flex-1 justify-center m-auto">
              <img className="m-auto" src={aboutImg}></img>
            </div>
          )}
          <div className="flex-1 text-white justify-center m-auto">
            <div
              className={`w-[540px] h-[450px] px-[53px] py-[29px] text-black text-[17px] font-medium bg-white border-4 border-[#89CDFE] rounded-lg ${
                !isAboveMediumScreens && "mx-auto"
              }`}
            >
              <h5 className="text-[#89CDFE]">About Us</h5>
              <h2 className="text-[28px] font-bold">
                25+ Years Of Experience In The Oil Industry
              </h2>
              <ul>
                <li className="mt-3">
                  <div className="flex space-x-4">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#89CDFE] mt-2"></div>
                    <div className="flex-1 min-w-0">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia, molestiae quas vel sint commodi
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mt-3">
                  <div className="flex space-x-4">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#89CDFE] mt-2"></div>
                    <div className="flex-1 min-w-0">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia, molestiae quas vel sint commodi
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mt-3">
                  <div className="flex space-x-4">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#89CDFE] mt-2"></div>
                    <div className="flex-1 min-w-0">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia, molestiae quas vel sint commodi
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="contactus">
        <ContactUs />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
