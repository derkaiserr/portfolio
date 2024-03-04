import React from "react";
import Me from "./assets/me.png"



const Intro = React.forwardRef(({scrollToTarget}, ref) =>{
    return(
        <div ref={ref} className="flex break-words tracking-[-0.1rem] gap-9 max-md:flex-col  text-wrap max-md:mt-16  mt-[10rem]">
            <div className="py-8 max-md:py-0   text-gray-600  leading-[2.5rem] text-2xl  max-md:text-lg">
              <p className=" ">Hey, I'm Adeola 👋🏽</p>  
              <p className="font-extrabold text-black text-[5.5rem] max-md:text-[3.5rem] max-md:leading-[3.8rem] leading-[5.5rem] my-3"> <span className=" text-[#6e06f2] "> Front</span>end Developer</p>
              <p className="tracking-tight">I'm a frontend developer based in Nigeria, I'll help you build beautiful websites your users will love.</p>
              <div id="buttons1" className="flex mt-2 gap-4">
                <a href="mailto:oluadebojnr@gmail.com" className="hoverImg bg-black hover:bg-[rgb(50,50,50)] text-white"><button className="max-md:h-11" >Get In Touch</button></a>
                <button onClick={scrollToTarget} className="hoverImg bg-gray-200 hover:bg-gray-300 text-black">Browse Projects</button>
              </div>
            </div>

            
        </div>
    )
})

export default Intro