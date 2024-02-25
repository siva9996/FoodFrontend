import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Carousal = ({ handlesearch, onchildInput }) => {
    const [search, setsearch] = useState('')
    onchildInput(search)
    return (
        <div>
            <div className='carousel-caption caption1' style={{ zIndex: "10" }} >
                <form className='d-flex' >
                    <input type="search" className='form-control me-2' placeholder='search' aria-label='search' onChange={(e) => setsearch(e.target.value)} />
                    <button className='btn btn-outline-success text-white bg-success' type='submit' onClick={handlesearch}>Search</button>
                </form>
            </div>
            <Carousel id='carousel'>
                <Carousel.Item>
                    <img src="images/cooking1.jpg" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
                </Carousel.Item>
                <Carousel.Item>
                    <img src="images/cooking2.jpg" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
                </Carousel.Item>
                <Carousel.Item>
                    <img src="images/cooking3.jpg" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
                </Carousel.Item>
            </Carousel>
            {/* <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner" id='carousel' >
                    <div className='carousel-caption' style={{ zIndex: "10" }}>
                        <form className='d-flex'>
                            <input type="search" className='form-control me-2' placeholder='search' aria-label='search' onChange={(e) => setsearch(e.target.value)} />
                            <button className='btn btn-outline-success text-white bg-success' type='submit' onClick={handlesearch}>Search</button>
                        </form>
                    </div>
                    <div className="carousel-item active">
                        <img src="images/cooking1.jpg" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="images/cooking2.jpg" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="images/cooking3.jpg" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div> */}
        </div>
    )
}

export default Carousal