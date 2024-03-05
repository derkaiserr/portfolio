import React from "react";
import CV from "./assets/Resume.pdf"
import downloadIcon from "./assets/download.png"

const AboutMe = React.forwardRef((props, ref) =>{
    return(
        <div ref={ref}>
            <div  className="text-6xl max-md:text-5xl font-bold mb-6 break-words">About Me<span className="text-[#6c06f2]">.</span></div>

            <div className="font-medium text-gray-600">
            My journey in web development started in 2022 when I finally got the basic <span>resources</span> to learn and stay <span>focused</span>. I'm a <span>passionate</span> front-end developer who brings beautiful and functional websites to life. With a knack for turning <span>ideas</span> into reality through code, I thrive on creating delightful user <span>experiences</span>.
           <div className="text-xl text-black font-bold my-3 mb-1">💡 Why Work With Me? <span className="text-[#6c06f2]">My 3 Cs</span></div>
            <ul className="ml-10 marker:text-black" style={{listStyleType:"disc"} }>
                <li>Creative Problem Solver</li>
                <li>Continuous Learner</li>
                <li>Collaborative Spirit</li>
            </ul>

            </div>

            {/* <a href={CV} className="hover bg-black hover:bg-[rgb(50,50,50)] py-4 w-[20rem]  px-6 text-white " download="Resume.pdf"><button id="" className="mt-6 inline max-md:h-11" > CV<img className="w-10" src={downloadIcon} alt="" /></button></a> */}
            <a href={CV} download="Resume.pdf" className="bg-black flex gap-2 items-center py-2 text-[16px] px-5 font-bold mt-7 w-fit rounded-lg text-white tracking-wider" >CV<img className="w-4" src={downloadIcon} alt="" /></a>
        </div>
    )
})

export default AboutMe