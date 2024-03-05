import React from "react";
import Todo from "./assets/todoapp.jpg"
import Iptracker from "./assets/iptracker.png"
import Atoms from "./assets/atoms.png"
import Payment from "./assets/payment.png"



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';


const HomeProjects =React.forwardRef((props, ref) => {
    return(
        <div ref={ref} className="mt-[4rem]">
            <div className="text-6xl max-md:text-5xl max-md:mb-10 mb-16 tracking-tight font-bold">Projects<span className="text-[#6c06f2]">.</span></div>
            <div className="grid-cols-2 max-md:flex-col max-md:flex grid max-md:gap-20 gap-12">
                <a className=" hoverImg " href="https://todoapp-derkaiser.netlify.app" target="_blank">
            <img src={Todo} className="mx-auto rounded-xl h-[29rem] hoverImg" width="270rem" alt="" />
            <div>
                <p className="font-bold text-2xl">Todo List <span className="ml-2 text-[#6c06f2]"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></span></p>
                <p className="text-[17px] font-medium text-gray-600">A task management mobile-only web app which helps you keep track of your daily tasks.</p>
            </div>
                </a>

                <a href="https://iptracker-derkaiserr.netlify.app" target="_blank" className=" hoverImg ">
                    <img className=" hoverImg rounded-xl" src={Iptracker} width="" alt="" />
                    <div>
                        <p className="font-bold text-2xl">IP Tracker <span className="ml-2 text-[#6c06f2]"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></span> </p>
                        <p className="text-[17px] font-medium text-gray-600">An IP/Domain Tracker which provides information on IP Address, Server location, Timezone of Server, and Internet Service Provider of the User.</p>
                    </div>
                </a>

                <a className=" hoverImg " href="https://atoms-derkaiserr.netlify.app" target="_blank">
                    <img src={Atoms} className=" rounded-xl hoverImg" alt="" />
                    <div>
                        <p className="font-bold text-2xl">Atoms <span className="ml-2 text-[#6c06f2]"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></span> </p>
                        <p className="text-[17px] font-medium text-gray-600">An e-commerce landing page for footwear sales.</p>
                    </div>
                </a>

                <a className=" hoverImg " href="https://derkaiserr.github.io/frontEndMentorChallenge1" target="_blank">
                    <img src={Payment} className=" rounded-xl hoverImg" alt="" />
                    <div>
                    <p className="font-bold text-2xl">Payment Platform <span className="ml-2 text-[#6c06f2]"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></span> </p>
                    <p className="text-[17px] font-medium text-gray-600">A beautifully designed payment platform for transactions after purchase.</p>
                    </div>
                </a>
            </div>
        </div>
    )
})
export default HomeProjects