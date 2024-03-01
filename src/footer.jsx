import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';


export default function Footer ({navs}){
    return(
        <div className="mt-[4rem]">
            <div className="flex justify-between">

            <div className="nav font-bold flex gap-[2rem]">
            {navs.map((nav, index)=> 
                    <p key={index}>{nav}</p>
                )}
            </div>
            <div className="text-l flex gap-[0.5rem]">
                <a target="_blank" className="text-xl" href="https://github.com/derkaiserr"><FontAwesomeIcon icon={faGithub} /></a>
            <a target="_blank" className="text-xl" href="https://linkedin.com/in/adeola-adebowale"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a target="_blank" className="text-xl" href="https://x.com/manyfacedG"><FontAwesomeIcon icon={faTwitter} /></a>
            </div>
            </div>
        </div>
    )
}