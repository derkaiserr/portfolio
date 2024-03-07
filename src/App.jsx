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
  
    const scrollToProject = () => {
      if (projRef.current) {
        projRef.current.scrollIntoView({ behavior: 'smooth' });
      }
   
    };
    const scrollToAbout = () => {
    
      if (aboutRef.current) {
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
      
      }
    };
    const scrollToHome = () => {
    
      if (homeRef.current) {
        homeRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    
  

    const navs =[{name:'Home', function: scrollToHome},
    {name:'Projects', function: scrollToProject},
    {name:'About', function: scrollToAbout}]


  return (
    <div className=' inter'>
<Header  navs={navs} />
<div className='mx-5 md:mx-12 '>

<Intro ref={homeRef}  scrollToTarget={scrollToProject} />
<HomeProjects ref={projRef}/>
<Skills />
<About ref={aboutRef} />
<Footer navs={navs} />
</div>
    </div>
  )
}

export default App
