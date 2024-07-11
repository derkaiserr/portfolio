import React, { useState, useEffect, useRef } from "react";
import chatIcon from "./assets/chat.svg";
import useClickOutside from "../hooks/useClickOutside";

export default function Header({ navs }) {
  
  const [isToggle, setIsToggle] = useState(false);
const closeMenu = () => {
  setIsToggle(false);

}

const ref = useClickOutside(closeMenu);
const handlePropagation = (e) => {
  // Prevent the click event from propagating
  e.stopPropagation();
}

  const toggleHams = () => {
    setIsToggle(true);
    setIsToggle(!isToggle);
  };

  return (
    <header  className="flex md:px-12 md:pt-4  px-4 items-center fixed left-0 top-0 w-full md:w-auto md:static md:gap-[22vw] md:w z-30 md:flex-row justify-between md:justify-around bg-gray-100 md:bg-white  ">
      <div className=" text-xl poppins  font-bold  py-4 ">
        Kaiser<span className="text-[#6c06f2]">Folio</span>
      </div>
      <button
      ref={ref}
        onClick={toggleHams}
        className="hams bg-gray-100 md:hidden  items flex flex-col"
      >
        <button className={isToggle ? "ham-top ham-top1" : "ham-top"}></button>
        <button className={isToggle ? "ham-mid hidden" : "ham-mid"}></button>
        <button
          className={isToggle ? "ham-bottom ham-bottom1" : "ham-bottom"}
        ></button>
      </button>

      <ul
        data-state={isToggle}
        onClick={handlePropagation}
        className={` data-[state=false]:translate-x-[55rem] md:grid  md:data-[state=false]:translate-x-0   md:text-end  nav top-[3.75rem] duration-300 absolute md:sticky flex-col flex gap-7 py-3 bg-white  w-full `}
      >
        {navs.map((nav, index) => (
          <li
            className="hover:text-[#6c06f2] text-gray-700 font-semibold text-lg  cursor-pointer"
            onClick={nav.function}
            key={index}
          >
            {nav.name}
          </li>
        ))}
        <li
          className={
            "  transition-all md:absolute md:right-0 z-30 duration-300 ease-in  hover  bg-gray-800 p-2 rounded-full box-content w-fit"
          }
        >
          <a href="mailto:oluadebojnr@gmail.com">
          <img src={chatIcon} alt="chatIcon" />
          </a>
        </li>
      </ul>
    </header>
  );
}
