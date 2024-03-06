import React from "react";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';


export default function Footer ({navs}){
    return(
        <div className="mt-[4rem] text-gray-700">
            <div className="flex justify-between items-center max-md:justify-end">

            <div className="nav max-md:hidden font-bold flex gap-[2rem]">
            {navs.map((nav, index)=> 
                    <p className="hover:text-[#6c06f2] cursor-pointer" onClick={nav.function} key={index}>{nav.name}</p>
                    )}
            </div>
                    
            <div className="text-l flex gap-[0.5rem]">
                <a target="_blank" className="hover:text-[#6c06f2] hover text-xl" href="https://github.com/derkaiserr"><FontAwesomeIcon icon={faGithub} /></a>
            <a target="_blank" className="hover:text-[#6c06f2] hover text-xl" href="https://linkedin.com/in/adeola-adebowale"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a target="_blank" className="hover:text-[#6c06f2] hover text-xl" href="https://x.com/manyfacedG"><FontAwesomeIcon icon={faTwitter} /></a>
            </div>
            </div>
        </div>
    )
}