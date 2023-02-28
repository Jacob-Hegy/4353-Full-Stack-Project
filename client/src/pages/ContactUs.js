import React from "react";
import Button from "../components/input/Button.js";
import useMediaQuery from "../hooks/useMediaQuery.js";

const ContactUs = () => {
  const isBelowLargeScreens = useMediaQuery("(max-width: 992px)");
  return (
    <div className="flex flex-row h-[calc(100vh-75px)]">
      <form
        className={`${
          !isBelowLargeScreens ? "w-[40%]" : "w-full"
        } h-full bg-white p-10 place-self-end justify-center self-center flex flex-col z-[30]`}
      >
        <h1 className="text-start font-bold text-5xl mb-10">Contact Us</h1>

        <div>
          <div className="grid grid-cols-2 gap-5">
            <label htmlFor="first" className="font-bold uppercase py-1">
              First Name
            </label>
            <label htmlFor="last" className="font-bold uppercase py-1">
              Last Name
            </label>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <input
              id="first"
              name="first"
              className="h-12 bg-white border-2 border-slate-500 focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-md"
            ></input>
            <input
              id="last"
              name="last"
              className="h-12 bg-white border-2 border-slate-500 focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-md"
            ></input>
          </div>
        </div>

        <div className="flex flex-col my-3">
          <label htmlFor="email" className="font-bold py-1 uppercase">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="h-12 px-3 bg-white border-2 border-slate-500 focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-md"
          ></input>
        </div>
        <div className="flex flex-col my-3">
          <label htmlFor="subject" className="font-bold py-1 uppercase">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            className="h-12 px-3 bg-white border-2 border-slate-500 focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-md"
          ></input>
        </div>
        <div className="flex flex-col my-3">
          <label htmlFor="message" className="font-bold uppercase py-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="h-[200px] px-3 bg-white border-2 border-slate-500 focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-md resize-none"
          ></textarea>
        </div>
        <div className="w-[275px]">
          <Button type="submit" content="Send"></Button>
        </div>
      </form>

      {/* Circle design */}
      {!isBelowLargeScreens && (
        <div className="w-[60%] h-full bg-[#21252B] relative overflow-hidden">
          <div className="border-box absolute w-[415px] h-[415px] border border-[#89CDFE] -top-[2%] left-[50%] -translate-x-[50%] rounded-full "></div>
          <div className="border-box absolute w-[415px] h-[415px] border border-dashed border-[#89CDFE] top-[25%] left-[50%] -translate-x-[50%] rounded-full"></div>
          <div className="border-box absolute w-[415px] h-[415px] border border-[#89CDFE] top-[55%] left-[50%] -translate-x-[50%] rounded-full"></div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
