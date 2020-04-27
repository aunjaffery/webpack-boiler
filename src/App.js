import React, { useState, useEffect } from "react";
import Header from "components/header/Header";
import Slider from "components/slider/Slider";
import Footer from "components/footer/Footer";
import Services from "components/services/Services";
import About from "components/about/About";
import Clients from "components/clients/Clients";
import Testimonial from "components/testimonial/Testimonial";
import FunFact from "components/funfact/FunFact";
import Portfolio from "components/portfolio/Portfolio";
import Team from "components/team/Team";

const App = () => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
		const Checkscroll = () => setScrollTop(document.documentElement.scrollTop)
        window.addEventListener('scroll', Checkscroll)
        Checkscroll();
        return () => window.removeEventListener('scroll', Checkscroll)
    }, [])

    return (
      <div className="App">
        <Header scrollTop={scrollTop}/>
        <Slider />
        <Services />
        <About />
        <Portfolio />
        <Testimonial />
        <Clients />
        <FunFact />
        <Team />
        <Footer scrollTop={scrollTop} />
      </div>
    );
}
export default App;