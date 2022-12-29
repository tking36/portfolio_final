import React, { useState } from 'react'

const Skills = (props) => {
  
    const showPage = (num) => {
        props.setPage(num)
      }

  return (
   <div className='skills'>

    <h1>Skills</h1>

    <div className="card">
        <div className="card-header">Languages</div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">HTML</li>
            <li className="list-group-item">CSS</li>
            <li className="list-group-item">JavaScript</li>
        </ul>
    </div>

    <div className="card">
        <div className="card-header">Libraries</div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">jQuery</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
        </ul>
    </div>

    <div className="card">
        <div className="card-header">Frameworks</div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">BootStrap</li>
            <li className="list-group-item">React</li>
            <li className="list-group-item">Django</li>
        </ul>
    </div>

   

   </div>
  )
}

export default Skills
