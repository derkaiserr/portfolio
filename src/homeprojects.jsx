import React from "react";
import Todo from "./assets/todoapp.jpg";
import Iptracker from "./assets/iptracker.png";
import Atoms from "./assets/atoms.png";
import Payment from "./assets/payment.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const HomeProjects = React.forwardRef((props, ref) => {
  const data = [
    {
      img: Todo,
      title: "Todo List(mobile)",
      desc: "A task management mobile-only web app which helps you keep track of your daily tasks.",
      link: "https://todoapp-derkaiser.netlify.app",
      //   height: "18rem",
      width: "270rem",
      github: 'https://github.com/derkaiserr/todoApp'
    },
    {
      img: Iptracker,
      title: "IP Tracker",
      desc: "An IP/Domain Tracker which provides information on IP Address, Server location, Timezone of Server, and Internet Service Provider of the User.",
      link: "https://iptracker-derkaiserr.netlify.app",
      width: "",
      github: "https://github.com/derkaiserr/IPTracker"
    },
    {
      width: "",
      img: Atoms,
      title: "Atoms",
      desc: "An e-commerce landing page for footwear sales.",
      link: "https://atoms-derkaiserr.netlify.app",
      github: "https://github.com/derkaiserr/atoms"
    },
    {
      img: Payment,
      width: "",
      title: "Payment Platform",
      desc: "A beautifully designed payment platform for transactions after purchase.",
      link: "https://derkaiserr.github.io/frontEndMentorChallenge1",
      github: "https://github.com/derkaiserr/frontEndMentorChallenge1"
    },
  ];

  return (
    <div ref={ref} className="pt-[4rem] md:pt-0 md:mt-4">

      <div className="text-6xl max-md:text-5xl max-md:mb-10 mb-16 tracking-tight font-bold">
        Projects<span className="text-[#6c06f2]">.</span>
      
      </div>

      <div className="grid-cols-2 max-md:flex-col items-end max-md:flex grid max-md:gap-20 gap-12">
        {data.map((item, index) => {
          return (
            <a
              className=" hoverImg "
              href={item.link}
              target="_blank"
              key={index}
            >
              <img
                src={item.img}
                className={`mx-auto  rounded-xl   hoverImg`}
                width={item.width}
                alt=""
              />
                <a className="float-right text-[#6c06f2] hover:scale-125 transition-all ease-in-out " target="_blank"  href={item.github}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-github"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
        </a>
              <div>
                <p className="font-bold text-2xl">
                  {item.title}{" "}
                  <span className="ml-2 text-xl text-[#6c06f2]">
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </span>
                </p>
                <p className="text-[17px] font-medium text-gray-600">
                  {item.desc}
                </p>
              </div>
            </a>
          );
        })}

        {/* <a
          href="https://iptracker-derkaiserr.netlify.app"
          target="_blank"
          className=" hoverImg "
        >
          <img
            className=" hoverImg rounded-xl"
            src={Iptracker}
            width=""
            alt=""
          />
          <div>
            <p className="font-bold text-2xl">
              IP Tracker{" "}
              <span className="ml-2 text-[#6c06f2]">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </span>{" "}
            </p>
            <p className="text-[17px] font-medium text-gray-600">
              An IP/Domain Tracker which provides information on IP Address,
              Server location, Timezone of Server, and Internet Service Provider
              of the User.
            </p>
          </div>
        </a>

        <a
          className=" hoverImg "
          href="https://atoms-derkaiserr.netlify.app"
          target="_blank"
        >
          <img src={Atoms} className=" rounded-xl hoverImg" alt="" />
          <div>
            <p className="font-bold text-2xl">
              Atoms{" "}
              <span className="ml-2 text-[#6c06f2]">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </span>{" "}
            </p>
            <p className="text-[17px] font-medium text-gray-600">
              An e-commerce landing page for footwear sales.
            </p>
          </div>
        </a>

        <a
          className=" hoverImg "
          href="https://derkaiserr.github.io/frontEndMentorChallenge1"
          target="_blank"
        >
          <img src={Payment} className=" rounded-xl hoverImg" alt="" />
          <div>
            <p className="font-bold text-2xl">
              Payment Platform{" "}
              <span className="ml-2 text-[#6c06f2]">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </span>{" "}
            </p>
            <p className="text-[17px] font-medium text-gray-600">
              A beautifully designed payment platform for transactions after
              purchase.
            </p>
          </div>
        </a> */}
      </div>
    </div>
  );
});
export default HomeProjects;
