import React from "react";
import JS from "./assets/js.png"
import ReactJS from "./assets/react.svg"
import Firebase from "./assets/Firebase.png"
import Css from "./assets/css.png"
import tailwind from "./assets/tailwind.png"
import Html from "./assets/html.png"
import Vue from "./assets/vue.png"
import Nuxt from "./assets/nuxt.png"
import Next from "./assets/nextjs.png"
import sqlite from "./assets/sqlite.jfif"

export default function Skills (){

    const skills = [
        {name: "Html", img: Html, width: "80rem"},
        {name: "CSS", img: Css, width: "80rem"},
        {name: "JavaScript", img: JS, width: "80rem"},
        {name: "Firebase", img: Firebase, width: "90rem"},
        {name: "ReactJS", img: ReactJS, width: "90rem"},
        {name: "NextJS", img: Next, width: "90rem"},
        {name: "Tailwind", img: tailwind, width: "120rem"},
        {name: "Vue", img: Vue, width: "90rem"},
        {name: "Nuxt", img: Nuxt, width: "90rem"},
        {name: "SQLite", img: sqlite, width: "90rem"},
        
    ]
    return(
    <div className="text-gray-600 mb-[3rem]">
            <div className="text-6xl max-md:text-5xl text-black mt-[3rem] mb-6 font-bold max-md:mb-9 ">Skills<span className="text-[#6c06f2]">.</span></div>
      <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-20 justify-center  items-baseline leading-[3rem] text-center">
      
        {skills.map((skill, index)=>(

            <div className="flex flex-col items-center" key={index}>
            <img src={skill.img} width={skill.width} alt={skill.name} />
            <p className=" font-medium">{skill.name}</p>
        </div>
        ))}
       


            </div>
        </div>
    )
}