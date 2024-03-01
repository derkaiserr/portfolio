import React from "react";


export default function Header ({navs}){


    return(
        <div className="header flex font-bold justify-between">
            <div>Kaiser<span className="text-[#6c06f2]">Folio</span></div>
            <div className="nav flex gap-[2rem]">

                {navs.map((nav, index)=> 
                    <p key={index}>{nav}</p>
                )}
              
            </div>
            <div>icon</div>
        </div>
    )
}