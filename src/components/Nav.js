import React, { useState } from 'react'
import pdfFile from '../myresume.pdf'


const Nav = (props) => {

    const [show, setShow] = useState(false)
    const [hide ,setHide] = useState(true)

    const showButtons = () => {
        setShow(!show)
    }

    const hideButtons = () => {
        setShow(true)
    }

    const showPage = (num) => {
        props.setPage(num)
        console.log(num);
      }


    


  return (
    <div className='navigation'>

        
        <div className='nav-buttons'>
            {show ? 
            <>
            <button title='Home' className='home-button navB btn btn-outline-success glow' onClick={() => showPage(0)}><i class="bi bi-house-fill"></i></button>
            <button title="About Me" className='about-button navB btn btn-outline-success glow' onClick={() => showPage(1)}><i class="bi bi-person-fill"></i></button>
            </>
            : <a title="Git Hub" href='https://github.com/tking36' target='blank'><i class="bi bi-github glow link-me"></i></a>} 

            
            {show ? 
            
            <button title="links" className='about-button navB btn btn-outline-success glow' onClick={showButtons}><i class="bi bi-link"></i></button>
            : <button title="Menu" className='about-button navB btn btn-outline-success glow' onClick={showButtons}><i class="bi bi-list"></i></button>
}
            
            {show ? 
            <>
            <button title="Experience" className='skills-button navB btn btn-outline-success glow' onClick={() => showPage(2)}><i class="fa-solid fa-user-graduate"></i></button>
            <a title="Resume" className='btn btn-outline-success navB glow' href={pdfFile} target='blank'><i class="bi bi-file-earmark-arrow-down"></i></a>
            </>
            : <a title="Linked In" href='https://github.com/tking36' target='blank'><i class="bi bi-linkedin glow link-me"></i></a>}
        </div>
    </div> 
  )
}

export default Nav
