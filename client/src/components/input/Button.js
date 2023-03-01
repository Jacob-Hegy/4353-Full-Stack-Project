import React from "react";

const Button = ({ type, content, dark = true }) => {
  const darkStyles =
    "bg-primary-300 text-white hover:bg-secondary-100 hover:text-primary-300";

  const lightStyles =
    "bg-secondary-100 text-primary-300 hover:bg-primary-300 hover:text-white";

  return (
    <button
      type={type}
      className={`${
        dark ? darkStyles : lightStyles
      } duration-300 p-4 inline-block w-full mt-12 rounded-md text-xl font-semibold`}
    >
      {content}
    </button>
  );
};

export default Button;
