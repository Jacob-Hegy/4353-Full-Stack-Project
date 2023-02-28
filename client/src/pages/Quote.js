import React from "react";
import backgndImg1 from "../assets/Vector 1.svg";
import backgndImg2 from "../assets/Vector 2.svg";
import arrow from "../assets/Arrow.svg";

const Quote = () => {
  return (
    <div className="flex w-full h-[calc(100vh-75px)] bg-[#384955] justify-center opacity-100">
      <img src={backgndImg1} className="absolute w-full top-[33%] z-0"></img>
      <img src={backgndImg2} className="absolute w-full top-[33%] z-0"></img>
      <form className="w-[575px] h-[720px] bg-white m-auto font-bold opacity-100 rounded-lg drop-shadow-lg">
        <div className="bg-[#384955] text-white text-center py-[18px]">
          Fill in the form to receive a quote
        </div>
        <div className="px-[69px] py-[49px] grid grid-rows-4 gap-5">
          <div className="flex flex-col">
            <label htmlFor="address">Street Address</label>
            <input
              name="address"
              id="address"
              className="h-12 px-3 bg-white border-2 border-slate-500 focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-md"
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
                className="h-12 px-3 bg-white border-2 border-slate-500 focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-md"
              ></input>
              <option
                name="state"
                id="state"
                className="h-12 px-3 bg-white border-2 border-slate-500 focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-md"
              ></option>
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
                className="h-12 px-3 bg-white border-2 border-slate-500 focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-md"
              ></input>
              <input
                name="phone"
                id="phone"
                className="h-12 px-3 bg-white border-2 border-slate-500 focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-md"
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
                className="h-12 px-3 bg-white border-2 border-slate-500 focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-md"
              ></input>
              <option
                name="product"
                id="product"
                className="h-12 px-3 bg-white border-2 border-slate-500 focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-md"
              ></option>
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="amount">Product Amount (gallons)</label>
            <input
              name="amount"
              id="amount"
              className="h-12 px-3 bg-white border-2 border-slate-500 focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-md"
            ></input>
          </div>
        </div>
        <button
          type="submit"
          className="justify-center w-[197px] text-[20px] h-[57px] text-white bg-[#384955] rounded-lg ml-[69px]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Quote;
