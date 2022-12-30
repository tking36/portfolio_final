import React, { useState } from 'react'

const Projects = (props) => {
  
    const showPage = (num) => {
        props.setPage(num)
      }

  return (
    <>
    <div id="carouselExampleCaptions" class="carousel slide">
       
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="https://i.imgur.com/563bF15.png" class="d-block w-100" alt="music"/>
                <div class="carousel-caption  d-md-block">
                    <div className='projects-links'>
                        <div class="card" >
                            <div class="card-header">Music Library</div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"><a className='link' href='https://my-music-library321.herokuapp.com/' target='blank'>Hosted Webiste</a></li>
                                <li class="list-group-item "><a className='link' href='https://github.com/tking36/back-end' target='blank'>GIT HUB Back-End</a></li>
                                <li class="list-group-item"><a className='link' href='https://github.com/tking36/front-end' target='blank'>GIT HUB Front-End</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-item active">
                <img src="https://i.imgur.com/93Tav5R.png" class="d-block w-100" alt="..."/>
                <div class="carousel-caption  d-md-block">
                    
                <div class="card" >
                    <div class="card-header">Music Library</div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><a className='link' href='https://my-music-library321.herokuapp.com/' target='blank'>Hosted Webiste</a></li>
                        <li class="list-group-item "><a className='link' href='https://github.com/tking36/podcast' target='blank'>GIT HUB</a></li>
                    </ul>
                </div>

                </div>
            </div>
            <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="..."/>
                <div class="carousel-caption  d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
        </button>
    </div>

    
    
    </>
)
}

export default Projects
