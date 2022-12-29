import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './App.css';
import Nav from './components/Nav'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Page from './components/Skills_page'




function App() {

  const [page, setPage] = useState(0)

  

  return (
    <div className="app container-fluid">
      <Header/>
      <div className="middle text-center">
        {page === 0 ? <Home setPage={setPage}/> : null}
        {page === 1 ? <About setPage={setPage}/> : null}
        {page === 2 ? <Page setPage={setPage}/> : null}
      </div>
      <Nav setPage={setPage}/>
      
    </div>
  );
}

export default App;
