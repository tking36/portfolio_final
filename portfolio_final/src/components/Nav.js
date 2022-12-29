import React, { useState } from 'react'
import pdfFile from '../myresume.pdf'

const Nav = (props) => {

    const showPage = (num) => {
        props.setPage(num)
        console.log(num);
      }

  return (
    <div className='navigation'>
        <div className='nav-buttons'>
            <button className='home-button navB btn btn-primary' onClick={() => showPage(0)}><i class="bi bi-house-fill"></i></button>
            <button className='about-button navB btn btn-primary' onClick={() => showPage(1)}><i class="bi bi-person-fill"></i></button>
            <button className='skills-button navB btn btn-primary' onClick={() => showPage(2)}><i class="bi bi-code"></i></button>
            <a  className='btn btn-primary navB' href={pdfFile} target='blank'><i class="bi bi-file-earmark-arrow-down"></i></a>
        </div>
    </div> 
  )
}

export default Nav
