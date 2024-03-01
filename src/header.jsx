import React from "react";


export default function Header (){
    return(
        <div className="header flex font-bold justify-between">
            <div>Kaiser<span className="text-[#6c06f2]">Folio</span></div>
            <div className="nav flex gap-[2rem]">
                <p>Home</p>
                <p>Projects</p>
                <p>About</p>
            </div>
            <div>icon</div>
        </div>
    )
}