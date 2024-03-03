import React,{useState, useEffect} from "react";


export default function Header ({navs}){


    let saveLocation = window.location.pathname;

    React.useEffect(() => {
        const handleLocationChange = () => {
          // Update saveLocation whenever the pathname changes
          saveLocation = window.location.pathname;
        };
    
        // Attach an event listener for location change
        window.addEventListener('popstate', handleLocationChange);
    
        // Cleanup the event listener on component unmount
        return () => {
          window.removeEventListener('popstate', handleLocationChange);
        };
      }, []); // Empty dependency array ensures this effect runs only once
    
       const [savedNav, setSavedNav] = useState(saveLocation)
       console.log(savedNav)


    
    return(
        <div className="header flex font-bold justify-between">
            <div>Kaiser<span className="text-[#6c06f2]">Folio</span></div>
            <div className="nav flex gap-[2rem]">

                {navs.map((nav, index)=> 
                    <p className="hover:text-[#6c06f2] cursor-pointer" onClick={nav.function} key={index}>{nav.name}</p>
                )}
              
            </div>
            <div>icon</div>
        </div>
    )
}