import React, { useState } from 'react'

const Projects = (props) => {
  
    const showPage = (num) => {
        props.setPage(num)
      }

      const Music = require ('../images/music-shot.png')
      const Space = require ('../images/space-shot.png')
      const Podcast = require ('../images/podcast-shot.png')
      const Ecommerce = require('../images/ecommerce.png')

  return (
    <>
    <div id="projects">
        <h1 className='about-header'>Projects</h1>
        <div id="first" className="card" >
            <img src={Music} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Music Library</h5>
                <p className="card-text">This is a react app that uses JavaScript and JSX for storing and displaying your favorite music, including properties such as song name, artist, album, genre and year.</p>
                <li className="list-group-item"><a className='link' href='https://my-music-library321.herokuapp.com/' target='blank'>Demo</a></li>
                <li className="list-group-item "><a className='link' href='https://github.com/tking36/back-end' target='blank'>GIT HUB Back-End</a></li>
                <li className="list-group-item"><a className='link' href='https://github.com/tking36/front-end' target='blank'>GIT HUB Front-End</a></li>
            </div>
        </div>

        <div className="card" >
        <img src={Space} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Space Invaders</h5>
                <p className="card-text">This is a react app that uses Typscript and TSX. Choose your own adventure game. Travel space and defeat enemies to gather recourses for Earth.</p>
                <li className="list-group-item"><a className='link' href='https://space-invaders.herokuapp.com/' target='blank'>Demo</a></li>
                <br></br>
                <li className="list-group-item"><a className='link' href=' https://github.com/tking36/adventure_front_end' target='blank'>GIT HUB Front-End</a></li>
            </div>
        </div>

        <div className="card" >
            <img src={Podcast} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Podcast Library</h5>
                <p className="card-text">This is an app made with Express and MongoDB for storing and displaying your favorite podcasts. </p>
                <br></br>
                <li className="list-group-item"><a className='link' href=' https://github.com/tking36/podcast' target='blank'>GIT HUB Front-End</a></li>
            </div>
        </div>

        <div className="card" >
            <img src={Ecommerce} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">ShopKing</h5>
                <p className="card-text">This is an Ecommerce React app made with Django, Postgres, AWS, Redux, and JWT.</p>
                <li class="list-group-item"><a className='link' href='https://king-shop.herokuapp.com/' target='blank'>Demo</a></li>
                <br></br>
                <li className="list-group-item"><a className='link' href=' https://github.com/tking36/ecommerce' target='blank'>GIT HUB Front-End</a></li>
            </div>
        </div>

    </div>

    
    
        {/* <div class="carousel-inner">
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
        </button> */}
    </>
)
}

export default Projects
