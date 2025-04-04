import './App.css'
import {Navbar } from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'
import AnimatedIcons from './components/AnimatedIcons'
import { WhatWeDo } from './components/WhatWeDo'
import { AboutUs } from './components/AboutUs'
import { Portfolio } from './components/Portf'
import { FAQ } from './components/FAQ'
import { ContactForm } from './components/ContactUs'

function App() {
  return (
    <>
      <Navbar/>
      <Main/>
      <AnimatedIcons/>
      <WhatWeDo/>
      <AboutUs/>
      <Portfolio/>
      <FAQ/>
      <ContactForm/>
      <Footer/>
    </>

  )
}

export default App
