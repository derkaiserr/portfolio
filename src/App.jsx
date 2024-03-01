import { useState } from 'react'
import Header from './header'
import Intro from './intro'
import HomeProjects from './homeprojects'
import './App.css'

function App() {

  return (
    <div className='mx-16 my-[1.4rem] inter'>
<Header />
<Intro />
<HomeProjects />
    </div>
  )
}

export default App
