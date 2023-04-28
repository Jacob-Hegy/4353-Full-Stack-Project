import React, { useState } from "react";
import gasStation from "../assets/gas-station.svg";
import aboutImg from "../assets/about-img.svg";
import Button from "../components/input/Button";
import Select from "../components/input/Select";
import { stateCodes, products } from "../data/data";
import useMediaQuery from "../hooks/useMediaQuery";
import Footer from "../components/Footer.js";
import ContactUs from "./ContactUs";

const Stat = ({ number, icon, children }) => {
  return (
    <div className="justify-self-center">
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#89CDFE] text-center">
          <div class={`fa-solid w-12 h-12 ${icon} leading-[48px] text-white text-xl`}></div>
        </div>
        <p className="text-[20px] font-bold">{number}</p>
      </div>
      <div className="max-w-[200px] text-xl">
        <p>{children}</p>
      </div>
    </div>
  );
};

const Home = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");
  const isBelowLargeScreens = useMediaQuery("(max-width: 1024px)");
  const [stateQuery, setStateQuery] = useState("");

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
              <div className="[&>label>p]:font-semibold">
                <label htmlFor="states">
                  <p className="mb-4">LOCATION</p>
                  <Select
                    name="states"
                    prompt="Select state"
                    query={stateQuery}
                    setQuery={setStateQuery}
                    data={stateCodes}
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
        className={`grid items-center ${
          isAboveMediumScreens ? "grid-cols-4 h-[325px]" : "grid-rows-4"
        } justify-center gap-4 px-[8vw] pb-8`}
      >
        <Stat number={2000} icon={'fa-users'}>
          Regular customers served across the United States.
        </Stat>
        <Stat number={100000} icon={'fa-stopwatch'}>
          Gallons delivered on time with the best value & quality.
        </Stat>
        <Stat number={3258} icon={'fa-gas-pump'}>
          Gallons of fuel saved by our efficient delivery routes!
        </Stat>
        <Stat number={100} icon={'fa-truck'}>
          Delivery trucks on the road everyday for faster service!
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
              className={`w-auto h-auto max-w-[540px] px-[53px] py-[29px] text-black text-[17px] font-medium bg-white border-4 border-[#89CDFE] rounded-lg ${
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
                        Our mission is to provide reliable and affordable fuel delivery services to homes, businesses, and organizations across the region.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mt-3">
                  <div className="flex space-x-4">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#89CDFE] mt-2"></div>
                    <div className="flex-1 min-w-0">
                      <p>
                        We are dedicated to delivering fuel solutions that are both sustainable and cost-effective.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mt-3">
                  <div className="flex space-x-4">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#89CDFE] mt-2"></div>
                    <div className="flex-1 min-w-0">
                      <p>
                        As a responsible company, we also offer eco-friendly fuel options to help reduce our carbon footprint and protect the environment. 
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
