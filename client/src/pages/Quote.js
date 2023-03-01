import React from "react";
import backgndImg1 from "../assets/Vector 1.svg";
import backgndImg2 from "../assets/Vector 2.svg";
import Button from "../components/input/Button";
import { stateCodes } from "../data/data";
import Select from "../components/input/Select";

const Quote = () => {
  return (
    <div className="flex w-full h-[calc(100vh-75px)] bg-primary-500 justify-center opacity-100 relative overflow-hidden">
      <img src={backgndImg1} className="absolute w-full top-[33%] z-0" />
      <img src={backgndImg2} className="absolute w-full top-[33%] z-0" />
      <form className="w-[575px] h-[720px] bg-white m-auto font-bold opacity-100 rounded-lg drop-shadow-lg overflow-hidden">
        <div className="bg-primary-300 text-white text-center py-[18px]">
          <p className="text-lg font-semibold">
            Fill in the form to receive a quote
          </p>
        </div>
        <div className="px-[69px] py-[49px] grid grid-rows-4 gap-5">
          <div className="flex flex-col">
            <label htmlFor="address">Street Address</label>
            <input
              name="address"
              id="address"
              className="p-2 bg-white border-2 border-slate-500 focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-md"
            ></input>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-5">
              <label htmlFor="city">City</label>
              <label htmlFor="state">State</label>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <input
                name="city"
                id="city"
                className="p-2 bg-white border-2 border-slate-500 focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-md"
              ></input>
              <Select
                name="states"
                prompt="Select state"
                data={stateCodes}
                dark={false}
              />
            </div>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-5">
              <label htmlFor="zipcode">Zip Code</label>
              <label htmlFor="phone">Phone Number</label>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <input
                name="zipcode"
                id="zipcode"
                className="p-2 bg-white border-2 border-slate-500 focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-md"
              ></input>
              <input
                name="phone"
                id="phone"
                className="p-2 bg-white border-2 border-slate-500 focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-md"
              ></input>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-5">
              <label htmlFor="date">Delivery Date</label>
              <label htmlFor="product">Product Type</label>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <input
                name="date"
                id="date"
                type="date"
                className="p-2 bg-white border-2 border-slate-500 focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-md"
              ></input>
              <option
                name="product"
                id="product"
                className="p-2 bg-white border-2 border-slate-500 focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-md"
              ></option>
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="amount">Product Amount (gallons)</label>
            <input
              name="amount"
              id="amount"
              className="p-2 bg-white border-2 border-slate-500 focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-md"
            ></input>
          </div>
          <Button type="submit" content="Submit" />
        </div>
      </form>
    </div>
  );
};

export default Quote;
