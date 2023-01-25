import React, { useState } from 'react'

const Skills = (props) => {
  
    const showPage = (num) => {
        props.setPage(num)
      }

  return (
   <div className='skills'>

<h1 className='about-header'>Skills</h1>
    <div className='skills-body'>

        <div className="card card-D">
            <div className="card-header">Languages</div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">HTML</li>
                <li className="list-group-item">CSS</li>
                <li className="list-group-item">JavaScript</li>
                <li className="list-group-item">Typescript</li>
                <li className="list-group-item">Python</li>
            </ul>
        </div>

        <div className="card card-D">
            <div className="card-header">Libraries</div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">jQuery</li>
                <li className="list-group-item">EJS</li>
            </ul>
        </div>

        <div className="card card-D">
            <div className="card-header">Frameworks</div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">BootStrap</li>
                <li className="list-group-item">React</li>
                <li className="list-group-item">Django</li>
                <li className="list-group-item">Express</li>
            </ul>
        </div>

    </div>

   

   </div>
  )
}

export default Skills
