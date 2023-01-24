import React, { useState, useEffect } from 'react'
import pdfFile from '../myresume.pdf'


const Nav = (props) => {

    const [show, setShow] = useState(false)
    const [home, setHome] = useState(false)
    const [about, setAbout] = useState(false)
    const [experience, setExperience] = useState(false)
    const [resume, setResume] = useState(false)
    const [projects, setProjects] = useState(false)

    const showButtons = () => {
        setShow(!show)
    }


    const showHome = () => {
        setHome(true)
        setAbout(false)
        setExperience(false)
        setResume(false)
        setProjects(false)
    }

    const showAbout = () => {
        setHome(false)
        setAbout(true)
        setExperience(false)
        setResume(false)
        setProjects(false)
    }

    const showExperience = () => {
        setHome(false)
        setAbout(false)
        setExperience(true)
        setResume(false)
        setProjects(false)
    }

    const showResume = () => {
        setHome(false)
        setAbout(false)
        setExperience(false)
        setResume(true)
        setProjects(false)
    }

    const showProjects = () => {
        setHome(false)
        setAbout(false)
        setExperience(false)
        setResume(false)
        setProjects(true)
    }


    const showPage = (num) => {
        props.setPage(num)
        console.log(num);
        if (num == 0) {
            showHome()
        } else if (num == 1) {
            showAbout()
        } else if (num == 2) {
            showExperience()
        } else if (num == 3) {
            showResume()
        } else if (num == 4) {
            showProjects()
        }
      }

      const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    


  return (
    <div className= {windowWidth > 500 ? 'nav-desktop' : 'navigation'} > 

        
        <div className='nav-buttons'>
            
            <button title='Home'  className={ home ? "home-button navB btn btn-outline-success glow active" : "home-button navB btn btn-outline-success glow"} onClick={() => showPage(0)} > {windowWidth > 500? <h1 className='navD'>Home</h1> : <i class="bi bi-house-fill"></i> }</button>

            <button title="About Me" className={ about ? "about-button navB btn btn-outline-success glow active" : "about-button navB btn btn-outline-success glow"} onClick={() => showPage(1)}> {windowWidth > 500? <h1 className='navD'>About</h1> : <i class="bi bi-person-fill"></i> } </button>
            
            <button title="Experience" className={ experience ? "skills-button navB btn btn-outline-success glow active" : "skills-button navB btn btn-outline-success glow"} onClick={() => showPage(2)}> {windowWidth > 500? <h1 className='navD'>Skills</h1> : <i class="fa-solid fa-user-graduate"></i> } </button>

            <button title="Menu" className= {projects ?  'about-button navB btn btn-outline-success glow active' : 'about-button navB btn btn-outline-success glow' } onClick={() => showPage(4)}>{windowWidth > 500? <h1 className='navD'>Projects</h1> : <i class="bi bi-hammer"></i> } </button>
            
            <a title="Resume" className={ resume ? "about-button navB btn btn-outline-success glow active" : "about-button navB btn btn-outline-success glow"} href={pdfFile} target='blank'> {windowWidth > 500? <h1 className='navD'>Resume</h1> : <i class="bi bi-file-earmark-arrow-down"></i> } </a>
            
        </div>
    </div> 
  )
}

export default Nav

{/* <a title="Gßit Hub" href='https://github.com/tking36' target='blank'><i class="bi bi-github glow link-me"></i></a> */}
{/* <a title="Linked In" href='https://github.com/tking36' target='blank'><i class="bi bi-linkedin glow link-me"></i></a> */}
{/* <button title="links" className='about-button navB btn btn-outline-success glow' onClick={showButtons}><i class="bi bi-link"></i></button> */}