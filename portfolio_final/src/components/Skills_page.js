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
    {show === 0 ? <Skills /> : null}
    {show === 1 ? <Projects /> : null}
    <div className='page-buttons'>
        <button className='page-button btn btn-success glow navB' onClick={() => changeShow(0)}><i class="bi bi-code"></i></button>
        <button className='page-button btn btn-success glow navB' onClick={() => changeShow(1)}><i class="bi bi-hammer"></i></button>
    </div>
    </>
  )
}

export default Page
