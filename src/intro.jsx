import React from "react";
import Me from "./assets/me.png"



export default function Intro({scrollToTarget}){
    return(
        <div className="flex tracking-[-0.1rem] items-center  justify-between gap-[9rem] mt-[10rem]">
            <div className="py-8 text-gray-600 w-[85%] leading-[2.5rem] text-2xl">
              <p>Hey, I'm Adeola👋🏽</p>  
              <p className="font-extrabold text-black text-[5.5rem] leading-[5.5rem] my-3"> <span className=" text-[#6e06f2] "> Front</span>end Developer</p>
              <p className="tracking-tight">I'm a frontend developer based in Nigeria, I'll help you build beautiful websites your users will love.</p>
              <div id="buttons1" className="flex mt-2 gap-4">
                <a href="mailto:oluadebojnr@gmail.com" className="hoverImg bg-black hover:bg-[rgb(50,50,50)] text-white"><button >Get In Touch</button></a>
                <button onClick={scrollToTarget} className="hoverImg bg-gray-200 hover:bg-gray-300 text-black">Browse Projects</button>
              </div>
            </div>

            <div className="p-[2.6rem] border-[#6c06f25e] border rounded-full">
        <img className="rounded-[400px] h-[22rem]" src={Me}  width="550rem"  alt="me" />
            </div>
        </div>
    )
}