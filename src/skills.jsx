import React from "react";
import JS from "./assets/js.png"
import ReactJS from "./assets/react.svg"
import Firebase from "./assets/Firebase.png"
import Css from "./assets/css.png"
import tailwind from "./assets/tailwind.png"
import Html from "./assets/html.png"

export default function Skills (){
    return(
    <div className="text-gray-600 mb-[3rem]">
            <div className="text-6xl text-black mt-[3rem] mb-6 font-bold ">Skills<span className="text-[#6c06f2]">.</span></div>
      <div className="flex flex-wrap gap-20 justify-around items-baseline leading-[3rem] text-center">
        <div>
            <img src={JS} width="80rem" alt="" />
            <p className=" font-medium">JavaScript</p>
        </div>
        <div>
            <img src={ReactJS} width="90rem" alt="" />
            <p className="font-medium">ReactJs</p>
        </div>
        <div>
            <img src={Firebase} width="90rem" alt="" />
        <p className="font-medium">Firebase</p>   
        </div>

        <div>
            <img src={Css} width="80rem" alt="" />
            <p className="font-medium">CSS</p>
        </div>
        
        <div>
            <img src={tailwind} width="120rem" alt="" />
            <p className="font-medium">Tailwind</p>
        </div>

        <div>
            <img src={Html} width="80rem" alt="" />
            <p className="font-medium">HTML</p>
        </div>


            </div>
        </div>
    )
}