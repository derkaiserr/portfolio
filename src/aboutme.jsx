import React from "react";



export default function AboutMe (){
    return(
        <div>
            <div className="text-6xl font-bold mb-6 break-words">About Me<span className="text-[#6c06f2]">.</span></div>

            <div>
            My journey in web development started in 2022 when i finally got the basic <span>resources</span> to learn and stay <span>focused</span>. I'm a <span>passionate</span> front-end developer who brings beautiful and functional websites to life. With a knack for turning <span>ideas</span> into reality through code, I thrive on creating delightful user <span>experiences</span>.
           <div className="text-xl font-bold my-3 mb-1">💡 Why Work With Me? <span className="text-[#6c06f2]">My 3 Cs</span></div>
            <ul className="ml-10" style={{listStyleType:"disc"} }>
                <li>Creative Problem Solver</li>
                <li>Continuous Learner</li>
                <li>Collaborative Spirit</li>
            </ul>

            </div>
        </div>
    )
}