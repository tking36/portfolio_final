import React, { useState } from 'react'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

const Page = (props) => {

    const [show, setShow] = useState(0)
  
    const changeShow = (num) => {
        setShow(num)
      }

  return (
    <>
    <div className='page-buttons'>
        <button title="Skills" className='page-button btn btn-success glow navB' onClick={() => changeShow(0)}><i class="bi bi-code"></i></button>
        <h1 className='skills-title'>Skills</h1>
        <button title="Projects" className='page-button btn btn-success glow navB' onClick={() => changeShow(1)}><i class="bi bi-hammer"></i></button>
    </div>

    {show === 0 ? <Skills /> : null}
    {show === 1 ? <Projects /> : null}
    
    </>
  )
}

export default Page
