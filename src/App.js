import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './App.css';
import Nav from './components/Nav'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Page from './components/Skills_page'
import AnimatedBg from "react-animated-bg";
import Projects from './components/Projects'




function App() {

  const [page, setPage] = useState(0)

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  }, []);

  

  return (
    

    <div className="app container-fluid">
      <Header/>
      {windowWidth > 500 ? <Nav setPage={setPage}/> : null}
      <div className={page === 4  ? "middle-scroll text-center" : "middle text-center"}>
        {page === 0 ? <Home setPage={setPage}/> : null}
        {page === 1 ? <About setPage={setPage}/> : null}
        {page === 2 ? <Page setPage={setPage}/> : null}
        {page === 4 ? <Projects setPage={setPage}/> : null }
        { page === 0 ?
        <>
        <a title="Git Hub" href='https://github.com/tking36' target='blank'><i className="bi bi-github link-me"></i></a> 
        
        <a className="bi bi-envelope-at-fill link-me" href="mailto:tking3612@gmail.com" subject="feedback"></a>

        <a title="Linked In" href='https://www.linkedin.com/in/taylor-king-se/' target='blank'><i className="bi bi-linkedin link-me"></i></a> 
        </>
        : null}
      </div>

      {windowWidth < 500 ? <Nav setPage={setPage}/> : null}
      
    </div>
  );
}

export default App;
