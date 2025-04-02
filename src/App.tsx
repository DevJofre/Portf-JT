import './App.css'
import {Navbar } from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'
import AnimatedIcons from './components/AnimatedIcons'
import { WhatWeDo } from './components/WhatWeDo'
import { AboutUs } from './components/AboutUs'

function App() {
  return (
    <>
      <Navbar/>
      <Main/>
      <AnimatedIcons/>
      <WhatWeDo/>
      <AboutUs/>
      <Footer/>
    </>

  )
}

export default App
