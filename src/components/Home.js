import React, { useState, useEffect } from 'react'

import TextTransition, { presets } from "react-text-transition";




const Home = (props) => {

    const TEXTS = [
        "TypeScript",
        "HTML",
        "CSS",
        "JavaScript",
        "React"
      ];

      const [index, setIndex] = useState(0);


      useEffect(() => {
        const intervalId = setInterval(() =>
          setIndex(index => index + 1),
          3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
      }, []);
    
    
    return(
<div className='container'>
    <h1 className='name'>Taylor King</h1>
    <img className='portrait' src='https://i.imgur.com/Sypy7sg.jpg'></img> 
    
    <h1 className='title'>Software <span className='engineer'>Engineer</span></h1>
    <h1 className='logo'> 
      <TextTransition className='scrolling' springConfig={presets.wobbly}>
        {TEXTS[index % TEXTS.length]}
      </TextTransition>
    </h1>
    <div className='brand-statement-container'>
        <p className='brand-statement'>Whether on a construction site or in the office, I always strive to create new things efficiently and creatively. Mastering the tools of my trade, I seek out the best techniques and apply them to achieve a product worth making.</p>
    </div>
    
</div>
    )
}

export default Home