import React, { useState } from 'react'
import pdfFile from '../myresume.pdf'


const Nav = (props) => {

    const [show, setShow] = useState(false)
    const [home, setHome] = useState(false)
    const [about, setAbout] = useState(false)
    const [experience, setExperience] = useState(false)
    const [resume, setResume] = useState(false)

    const showButtons = () => {
        setShow(!show)
    }


    const showHome = () => {
        setHome(true)
        setAbout(false)
        setExperience(false)
        setResume(false)
    }

    const showAbout = () => {
        setHome(false)
        setAbout(true)
        setExperience(false)
        setResume(false)
    }

    const showExperience = () => {
        setHome(false)
        setAbout(false)
        setExperience(true)
        setResume(false)
    }

    const showResume = () => {
        setHome(false)
        setAbout(false)
        setExperience(false)
        setResume(true)
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
        }
      }


    


  return (
    <div className='navigation'>

        
        <div className='nav-buttons'>
            {show ? 
            <>
            <button title='Home'  className={ home ? "home-button navB btn btn-outline-success glow active" : "home-button navB btn btn-outline-success glow"} onClick={() => showPage(0)} ><i class="bi bi-house-fill"></i></button>
            <button title="About Me" className={ about ? "about-button navB btn btn-outline-success glow active" : "about-button navB btn btn-outline-success glow"} onClick={() => showPage(1)}><i class="bi bi-person-fill"></i></button>
            </>
            : <a title="Git Hub" href='https://github.com/tking36' target='blank'><i class="bi bi-github glow link-me"></i></a>} 

            
            {show ? 
            
            <button title="links" className='about-button navB btn btn-outline-success glow' onClick={showButtons}><i class="bi bi-link"></i></button>
            : <button title="Menu" className='about-button navB btn btn-outline-success glow' onClick={showButtons}><i class="bi bi-list"></i></button>
}
            
            {show ? 
            <>
            <button title="Experience" className={ experience ? "skills-button navB btn btn-outline-success glow active" : "skills-button navB btn btn-outline-success glow"} onClick={() => showPage(2)}><i class="fa-solid fa-user-graduate"></i></button>
            <a title="Resume" className={ resume ? "about-button navB btn btn-outline-success glow active" : "about-button navB btn btn-outline-success glow"} href={pdfFile} target='blank'><i class="bi bi-file-earmark-arrow-down"></i></a>
            </>
            : <a title="Linked In" href='https://github.com/tking36' target='blank'><i class="bi bi-linkedin glow link-me"></i></a>}
        </div>
    </div> 
  )
}

export default Nav
