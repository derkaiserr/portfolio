import { useState , useRef} from 'react'
import Header from './header'
import Intro from './intro'
import HomeProjects from './homeprojects'
import Skills from './skills'
import About from './aboutme'
import Footer from './footer'
import './App.css'

function App() {

    const childRef = useRef(null);
  
    const scrollToTarget = () => {
      if (childRef.current) {
        childRef.current.scrollIntoView({ behavior: 'smooth' });
      }
      console.log('scrollToTarget')
    };
    
  

    const navs =['Home', 'Projects','About' ]


  return (
    <div className='mx-16 mt-[1.4rem] mb-3 inter'>
<Header navs={navs} />
<Intro scrollToTarget={scrollToTarget} />
<HomeProjects ref={childRef}/>
<Skills />
<About />
<Footer navs={navs} />
    </div>
  )
}

export default App
