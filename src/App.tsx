import React, { useRef, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Parallax, ParallaxLayer, IParallaxLayer, IParallax } from '@react-spring/parallax'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './Components/ParallaxLayers/Header';
import { TitlePage } from './Components/ParallaxLayers/TitlePage';
import { AboutPage } from './Components/ParallaxLayers/AboutPage';
import { ExperiencePage } from './Components/ParallaxLayers/ExperiencePage';

// Since this is going to be a one page app I'll do everything here. Bad practice, but easy to fix later. 
function App() {
  const alignCenter = { display: 'flex', alignItems: 'center' }
  const parallaxContainer = useRef<IParallax>(null);

  return (
    <>
      <div style={{ display: "flex", justifyContent: 'center' }}>
        <Header parallax={parallaxContainer}/>
          
          <Parallax ref={parallaxContainer} pages={3.65}>
            <TitlePage/>
            <AboutPage/>
            <ExperiencePage/>

            <ParallaxLayer className="page4Layer" offset={2} speed={0.5} style={{ ...alignCenter, justifyContent: 'center', backgroundColor: "black" }}>
              <div className="page4">
                <p style={{color: "white"}}> Put a concise and pretty list of skills. Maybe show experience level with each too. </p>
              </div>
            </ParallaxLayer>

            <ParallaxLayer className="page5Layer" offset={2.95} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
              <div className="page5">
                <p style={{color: "white"}}> Contact info </p>
              </div>
            </ParallaxLayer>
          </Parallax>
      </div>
    </>
  );
}

export default App;
