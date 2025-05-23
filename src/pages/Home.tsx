import { Navbar } from '../components/Nav';
import AnimatedIcons from '../components/AnimatedIcons';
import { WhatWeDo } from '../components/WhatWeDo';
import { AboutUs } from '../components/AboutUs';
import { Portfolio } from '../components/Portf';
import { FAQ } from '../components/FAQ';
import Footer from '../components/Footer';
import Main from '../components/Main';
import { useEffect } from 'react';

export const Home: React.FC = () => {
      useEffect(() => {
    const targetId = sessionStorage.getItem("scrollToSection");
    if (targetId) {
      const section = document.getElementById(targetId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
      sessionStorage.removeItem("scrollToSection");
    }
  }, []);
    return(
        <>
            <Navbar/>
            <div id="inicio"><Main/></div>
            <AnimatedIcons/>
            <div id="habilidades"><WhatWeDo/></div>
            <div id="sobre"><AboutUs/></div>
            <div id="portfolio"><Portfolio/></div>
            <div id="faq"><FAQ/></div>
            <Footer/>
        </> 
    )
}