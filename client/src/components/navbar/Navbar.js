import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Dropdown from "./Dropdown";
import Logo from "../../assets/logo.svg";
import useMediaQuery from "../../hooks/useMediaQuery";
import { UserContext } from "../../context/UserContext";
import axios from "axios";

const Navbar = ({ isTopOfPage }) => {
  const { user, setUser } = useContext(UserContext);
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const navigate = useNavigate();
  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");
  const navbarShadow = isTopOfPage ? "" : "drop-shadow";

  async function handleLogOut() {
    await axios.post("auth/logout").then((res) => {
      if (res.data) {
        setUser(null);
        navigate("/");
      }
    });
  }

  return (
    <nav
      className={`px-12 z-50 flex h-[75px] bg-white fixed top-0 w-full justify-between items-center font-semibold shadow-md ${navbarShadow}`}
    >
      <NavLink to="/">
        <img src={Logo} alt="Tetra Logo" width={135} />
      </NavLink>

      {/* Desktop NavMenu */}

      {isAboveMediumScreens ? (
        <ul className={"h-full flex justify-between items-center gap-6"}>
          <li>
            <HashLink to={"/#Hero"}>Home</HashLink>
          </li>
          <li>
            <a href="#about-section">About</a>
          </li>
          <li>
            <HashLink to="/#contactus">Contact Us</HashLink>
          </li>

          {user ? (
            <Dropdown
              label={"My Account"}
              isAboveMediumScreens={isAboveMediumScreens}
            >
              <li>
                <NavLink to="account">Profile</NavLink>
              </li>
              <li>
                <NavLink to="/account/quotes">Quotes</NavLink>
              </li>
              <li>
                <button onClick={handleLogOut}>Log out</button>
              </li>
            </Dropdown>
          ) : (
            <li>
              <NavLink to="login">Login</NavLink>
            </li>
          )}

          <li>
            <NavLink
              to="quote"
              className="bg-primary-300 text-white py-2 px-3 rounded-md"
            >
              Get a Quote
            </NavLink>
          </li>
        </ul>
      ) : (
        <button
          className={`rounded-full bg-secondary-500 p-2`}
          onClick={() => setIsMenuToggled(!isMenuToggled)}
        >
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
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </button>
      )}

      {/* Mobile NavMenu */}

      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-5 w-[300px] bg-primary-500 h-full p-6">
          <div className="flex justify-end">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <ul className={"text-white flex flex-col gap-4 text-xl h-full"}>
            <li className="flex gap-2 items-center">
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
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="flex gap-2 items-center">
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
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
              <a href="#about">About</a>
            </li>
            <li className="flex gap-2 items-center">
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
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                />
              </svg>
              <NavLink to="contactus">Contact Us</NavLink>
            </li>

            {user ? (
              <>
                <li>
                  <NavLink to="account" className={"flex gap-2 items-center"}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                    Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink to="quotes" className={"flex gap-2 items-center"}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                    Quotes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="login" className={"flex gap-2 items-center"}>
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
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                      />
                    </svg>
                    Log out
                  </NavLink>
                </li>
              </>
            ) : (
              <li>
                <NavLink to="login">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 -scale-100"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                    />
                  </svg>
                  Login
                </NavLink>
              </li>
            )}

            <li>
              <NavLink
                to="getquote"
                className="bg-secondary-100 text-primary-300 py-2 px-3 rounded-md inline-block mt-2"
              >
                Get a Quote
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
