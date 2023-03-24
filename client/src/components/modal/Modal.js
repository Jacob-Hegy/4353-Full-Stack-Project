import React from "react";

const Modal = ({ children }) => {
  return (
    <div className="absolute top-0 left-0 bottom-0 right-0 bg-gray-700/75 flex justify-center items-center">
      {children}
    </div>
  );
};

export default Modal;
