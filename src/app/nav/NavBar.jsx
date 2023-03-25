import React, { useState } from "react";
import { Link } from "react-router-dom";
import LinkComp from "./LinkComp";
function NavBar() {
  const [linksList, setLinksList] = useState(false);
  const [clickedLink, setClickedLink] = useState("");
  return (
    <div>
      <div className="container mt-9 flex justify-between">
        <div
          onClick={() => setClickedLink("")}
          className="flex items-center justify-center"
        >
          <Link to={"/url-shortening-api/"}>
            <img src="./logo.svg" alt="Shortly" />
          </Link>
        </div>
        {/* so... i should've made one list and styled it differently but right now my tailwind css is weak and i can't do that. maybe in the future... sorry don't judge me ;-; */}
        {/* small screens list */}
        <div className="lg:hidden">
          <div
            className={`flex-1 fixed top-20 left-1/2 -translate-x-1/2 bg-dark-violet p-7 px-4 w-10/12 rounded-lg z-10 ${
              linksList ? "block opacity-full" : "hidden"
            }`}
          >
            <ul className="flex flex-col lg:flex-row items-center justify-between text-white">
              {["Features", "Pricing", "Resources"].map((link, index) => (
                <LinkComp
                  key={index}
                  props={{
                    clickedLink,
                    setLinksList,
                    setClickedLink,
                    link: link,
                    style: "m-4",
                  }}
                />
              ))}
              <span className="w-full h-[1px] opacity-25 bg-gray m-4"></span>
              <LinkComp
                props={{
                  clickedLink,
                  setLinksList,
                  setClickedLink,
                  link: "Login",
                  style: "m-4",
                }}
              />
              <li className="m-4 w-full">
                <button className="btn-primary w-full">
                  <p>Sign Up</p>
                </button>
              </li>
            </ul>
          </div>
          {/* onclick anywhere on the screen the list closes */}
          <div
            className={`w-screen h-screen top-0 left-0 ${
              linksList ? "fixed" : "hidden"
            }`}
            onClick={() => setLinksList(false)}
          ></div>
        </div>
        {/* large screens list */}
        <div className="hidden lg:flex flex-1 ml-4">
          <ul className="flex w-full  items-center text-grayish-violet">
            {["Features", "Pricing", "Resources"].map((link, index) => (
              <LinkComp
                key={index + 1 * 5}
                props={{
                  clickedLink,
                  setClickedLink,
                  link: link,
                }}
              />
            ))}
            <div className="flex-1"></div>
            <LinkComp
              props={{
                clickedLink,
                setClickedLink,
                link: "Login",
              }}
            />
            <li onClick={() => linksList(false)}>
              <a href="#">
                <button className="btn-primary px-8">
                  <p>Sign Up</p>
                </button>
              </a>
            </li>
          </ul>
        </div>
        <div
          className="w-7 flex flex-col bars-icon lg:hidden"
          onClick={() => setLinksList(!linksList)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
