import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar isTopOfPage={isTopOfPage} />
      <main className="h-[calc(100%-75px)]">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
