import React, { useState } from 'react';
import './CarouselCom.css'
import StarRating from 'react-simple-star-rating';
import ReactStars from "react-rating-stars-component";



function CarouselCom({ data }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
                {data && data.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={index}
                        className={index === activeIndex ? "active" : ""}
                        aria-current={index === activeIndex ? "true" : "false"}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>
            <div className="carousel-inner">
                {data && data.map((item, index) => (

                    <div key={index} className={`carousel-item ${index === activeIndex ? "active" : ""}`}>
                        <p>{item.comment}</p>
                        {console.log(item.rating)}
                        <div className="container">
                            {item.rating && item.rating && (
                                
                                <>
                                    <ReactStars
                                        count={parseInt(item.rating)}
                                        // onChange={ratingChanged}
                                        size={24}
                                        activeColor="#ffd700"
                                        edit={false}
                                        ishalf={true}
                                    />
                                </>

                            )}
                            {/* {console.log(typeof(parseInt(item.rating)))} */}
                        </div>
                        <h6>{item?.comment_by}</h6>
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" onClick={handlePrev}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" onClick={handleNext}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default CarouselCom;
