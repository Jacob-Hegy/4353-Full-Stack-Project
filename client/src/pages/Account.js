import React, { useState, useContext } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

const TabBtn = ({
  href,
  text,
  icon,
  active,
  isAboveLargeScreens,
  setSelectedPage,
}) => {
  function handleClick() {
    console.log(text);
    setSelectedPage(text.toLowerCase());
  }
  return (
    <Link
      to={href}
      className={`text-lg text-white block ${
        active && "bg-secondary-100/25"
      } p-4 w-full ${
        !isAboveLargeScreens && "justify-center"
      } text-left text-2xl rounded-xl flex gap-2 items-center`}
      onClick={handleClick}
    >
      {icon} {isAboveLargeScreens && <p>{text}</p>}
    </Link>
  );
};

const Account = () => {
  const { user, ready } = useContext(UserContext);
  const [selectedPage, setSelectedPage] = useState("profile");
  const isAboveLargeScreens = useMediaQuery("(min-width: 1210px)");

  if(!ready){
    return <p>Loading...</p>;
  }

  // if user isnt logged in... send them to login page from Home
  if (ready && !user) {
    console.log("user not logged in in account page");
    console.log(ready);
    return <Navigate to={"/login"} />;
  }

  return (
    <div className="h-[calc(100vh-75px)] flex">
      <div className="max-w-[250px] h-[calc(100vh-75px)] bg-primary-300 p-4 flex flex-col gap-4">
        <TabBtn
          href={"./profile"}
          text={"Profile"}
          active={selectedPage === "profile" ? true : false}
          isAboveLargeScreens={isAboveLargeScreens}
          setSelectedPage={setSelectedPage}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          }
        />
        <TabBtn
          href={"./history"}
          text={"Order History"}
          isAboveLargeScreens={isAboveLargeScreens}
          active={selectedPage === "order history" ? true : false}
          setSelectedPage={setSelectedPage}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
              />
            </svg>
          }
        />

        {isAboveLargeScreens && (
          <p className="text-white mt-auto">
            Copyright © 2023- Tetra®. All rights reserved.
          </p>
        )}
      </div>
      <div className="w-full max-w-[1100px] px-11 pt-8 h-[calc(100vh-75px)]">
        <Outlet />
        {/* {selectedPage === "profile" ? <Profile /> : <OrderHistory />} */}
      </div>
    </div>
  );
};

export default Account;
