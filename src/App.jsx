import { useState , useRef} from 'react'
import Header from './header'
import Intro from './intro'
import HomeProjects from './homeprojects'
import Skills from './skills'
import About from './aboutme'
import Footer from './footer'
import './App.css'

function App() {

    const projRef = useRef(null);
    const aboutRef = useRef(null);
    const homeRef = useRef(null);
  
    const scrollToTarget = () => {
      if (projRef.current) {
        projRef.current.scrollIntoView({ behavior: 'smooth' });
      }
   
      console.log('scrollToTarget')
    };
    const scrollToTargett = () => {
    
      if (aboutRef.current) {
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
      
      }
      console.log('scrollToTarget')
    };
    const scrollToTargettt = () => {
    
      if (homeRef.current) {
        homeRef.current.scrollIntoView({ behavior: 'smooth' });
      }
      console.log('scrollToTarget')
    };

    
  

    const navs =[{name:'Home', function: scrollToTargettt},
    {name:'Projects', function: scrollToTarget},
    {name:'About', function: scrollToTargett}]


  return (
    <div className='mx-16 max-md:mx-5 mt-[1.4rem] mb-3 inter'>
<Header  navs={navs} />
<Intro ref={homeRef}  scrollToTarget={scrollToTarget} />
<HomeProjects ref={projRef}/>
<Skills />
<About ref={aboutRef} />
<Footer navs={navs} />
    </div>
  )
}

export default App
