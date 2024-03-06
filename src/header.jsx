import { useState } from "react";
import chatIcon from "./assets/chat.svg";

const HamburgerIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

const CrossIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default function Header({ navs }) {
  // let saveLocation = window.location.pathname;

  // React.useEffect(() => {
  //     const handleLocationChange = () => {
  //       // Update saveLocation whenever the pathname changes
  //       saveLocation = window.location.pathname;
  //     };

  //     // Attach an event listener for location change
  //     window.addEventListener('popstate', handleLocationChange);

  //     // Cleanup the event listener on component unmount
  //     return () => {
  //       window.removeEventListener('popstate', handleLocationChange);
  //     };
  //   }, []); // Empty dependency array ensures this effect runs only once

  //    const [savedNav, setSavedNav] = useState(saveLocation)
  //    console.log(savedNav)

  const [isToggle, setIsToggle] = useState(false);

  return (
    <div>
      <div className="relative">
        <header className="flex fixed top-0 left-0 z-20 right-0 items-center justify-between bg-gray-100 p-3">
          <p className="text-2xl poppins font-bold md:text-2xl">
            Kaiser<span className="text-[#6c06f2]">Folio</span>
          </p>

          <button
            onClick={() => {
              setIsToggle((prev) => !prev);
            }}
            className="md:hidden transition"
          >
            {/**ternary operator */}
            {isToggle ? <HamburgerIcon /> : <CrossIcon />}
          </button>

          <ul
            data-state={isToggle}
            className="absolute transition-all data-[state=true]:opacity-0 pt-8 pl-3 pb-8 flex flex-col gap-8 left-0 w-full top-14 bg-white p-3"
          >
            {navs?.map((nav, index) => (
              <li
                className="hover:text-[#6c06f2] font-bold text-gray-700 cursor-pointer"
                onClick={nav.function}
                key={index}
              >
                {nav.name}
              </li>
            ))}

            <a
              className="bg-black w-fit p-2 rounded-full"
              href="mailto:oluadebojnr@gmail.com"
            >
              <img src={chatIcon} alt="" />{" "}
            </a>
          </ul>
        </header>
      </div>
    </div>
  );
}
