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
  

     <Skills /> : null
    
    
    </>
  )
}

export default Page
