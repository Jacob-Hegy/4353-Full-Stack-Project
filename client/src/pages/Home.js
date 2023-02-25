import React from "react";
import gasStation from "../assets/gas-station.svg";
import Button from "../components/input/Button";
import Select from "../components/input/Select";
import { stateCodes, products } from "../data/data";
import useMediaQuery from "../hooks/useMediaQuery";
import Footer from "../components/Footer.js"

const Home = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");
  const isBelowLargeScreens = useMediaQuery("(max-width: 1024px)");

  return (
    <div>
      <section id="Hero" className="h-[100vh]">
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
            className={`w-[500px] h-[500px] bg-white p-10 place-self-end self-center rounded-xl shadow-md flex flex-col justify-center z-[30] ${isBelowLargeScreens ? "ml-auto" : ""} ${!isAboveMediumScreens ? "ml-0" : ""}`}
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
                <Select name="states" prompt="Select state" data={stateCodes} />
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
          
      <section className="grid grid-cols-4  h-[100vh] d-block">
          <div>One</div>
          <div>One</div>
          <div>One</div>
          <div>One</div>
      </section>

      <section>

      </section>

      <Footer>

      </Footer>
    </div>
    
  );
};

export default Home;
