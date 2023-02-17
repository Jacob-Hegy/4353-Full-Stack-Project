import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Dropdown = ({ label, classes, children }) => {
  const [show, setShow] = useState(false);

  const onMouseEnter = () => {
    window.innerWidth < 768 ? setShow(false) : setShow(true);
  };

  const onMouseLeave = () => {
    setShow(false);
  };

  return (
    <li
      className={`relative h-full flex items-center justify-center`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <NavLink to={"profile"}>
        {label}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="inline-block w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </NavLink>

      <ul
        className={`${
          show ? "block" : "hidden"
        } ${classes} absolute top-[75px] w-full bg-white text-primary-300 p-4 rounded-md font-medium flex flex-col gap-2 border-t-2 shadow-md`}
      >
        {children}
      </ul>
    </li>
  );
};

export default Dropdown;
