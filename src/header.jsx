import React,{useState, useEffect} from "react";


export default function Header ({navs}){


    // let saveLocation = window.location.pathname;

    // React.useEffect(() => {
    //     const handleLocationChange = () => {
    //       // Update saveLocation whenever the pathname changes
    //       saveLocation = window.location.pathname;
    //     };
    
    //     // Attach an event listener for location change
    //     window.addEventListener('popstate', handleLocationChange);
    
    //     // Cleanup the event listener on component unmount
    //     return () => {
    //       window.removeEventListener('popstate', handleLocationChange);
    //     };
    //   }, []); // Empty dependency array ensures this effect runs only once
    
    //    const [savedNav, setSavedNav] = useState(saveLocation)
    //    console.log(savedNav)

       const [isToggle, setIsToggle]= useState(false)
       const toggleHams =() =>{
           setIsToggle(true)
           setIsToggle(!isToggle)
        }
        
        console.log(isToggle)
    return(
        <div>

                <div onClick={toggleHams}  className="hams  md:hidden max-md:fixed right-0 bg-gray-100 w-[60%] items-end flex flex-col max-md:top-0 max-md:pt-6 max-md:pb-10 max-md:px-6 z-40  ">
        <div className={isToggle ? 'ham-top ham-top1' :'ham-top'}></div>
           <div className={isToggle ? 'ham-mid hidden' :'ham-mid'}></div>
        <div className={isToggle ? 'ham-bottom ham-bottom1' :'ham-bottom'}></div>
                </div>
        <div className="header flex max-md:flex-col    font-bold justify-between">
            <div className="max-md:fixed max-md:top-0 z-40 max-md:text-2xl text-xl poppins max-md:py-4 max-md:bg-gray-100 max-md:left-0 max-md:pl-4 max-md:w-[60%] ">Kaiser<span className="text-[#6c06f2]">Folio</span></div>

            <div className={` nav max-md:duration-300 max-md:transition-all max-md:-mt-[10rem] ${isToggle ? "max-md:mt-[4rem]" : ""} max-md:ease-in    max-md:flex-col flex gap-[2rem]`}>

                {navs.map((nav, index)=> 
                    <p className="hover:text-[#6c06f2] cursor-pointer" onClick={nav.function} key={index}>{nav.name}</p>
                    )}
              
            </div>
            <div className="max-md:mt-7">icon</div>
                    </div>
        </div>
    )
}