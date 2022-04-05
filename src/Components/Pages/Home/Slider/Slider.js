import React from 'react';
import { Link } from 'react-router-dom';
import './Slider.css';
const Slider = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active slider-color-1">

                        <div className=" slider">
                            <div className="slider-text-box">
                                <p className=""> <span className="das-color"></span>SUMMER 2022</p>
                                <h2 className="title-1">Meet Galaxy S20, S20+ </h2>
                                <h2 className="title-2 text-start"> This is the phone that will change photography</h2>
                                <Link to="/product"><button className="slider-btn">Explore Now<i className="fas fa-shopping-basket"></i></button></Link>
                            </div>
                            <div>
                                <img className="slider-img-1" src="https://i.ibb.co/5jL8w50/Screenshot-28-removebg-preview.png" alt="img1" />
                            </div>

                        </div>

                    </div>
                    <div className="carousel-item  slider-color-2">

                        <div className="slider">
                            <div className="slider-text-box">
                                <p className=""> <span className="das-color"></span>OFFFER 2021</p>
                                <h2 className="title-1">Sale Up To </h2>
                                <h2 className="title-2 text-start">50% <span className="">OFF</span></h2>
                                <Link to="/product"><button className="slider-btn">SHOP NOW <i className="fas fa-shopping-basket"></i></button></Link>
                            </div>
                            <div>
                                <img className="slider-img-1" src="https://i.ibb.co/YQjCN69/Watch-540x-removebg-preview.png" alt="img1" />
                            </div>

                        </div>

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
            </div>
        </div>
    );
};

export default Slider;