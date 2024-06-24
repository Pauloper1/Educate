import React from 'react'
import './Section_3.css'
function Section_3() {
    return (
        <div className='container-fluid vh-100 align-content-center' style={{ backgroundColor: "#fff1ff" }}>
            <div className="container">
                <h2 className='text-center custom-font custom-text'>How does Educate work?</h2>
            </div>
            <div className="container mb-5">
                <div className="row align-items-center justify-content-between">
                    <div className="col-2 d-flex flex-column align-items-center">
                        <div className="circle rounded-circle d-flex justify-content-center align-items-center">
                            <h3 className="text-center text-white m-0">1</h3>
                        </div>
                        <p className="text-center mt-2">Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="col-2 d-flex flex-column align-items-center">
                        <div className="d-flex justify-content-center align-items-center">
                            <svg width="200" height="200">
                                <path d="M10 80 Q 95 10 180 80" stroke="black" stroke-dasharray="5,5" fill="transparent" />
                            </svg>
                        </div>
                    </div>
                    <div className="col-2 d-flex flex-column align-items-center">
                        <div className="circle rounded-circle d-flex justify-content-center align-items-center">
                            <h3 className="text-center text-white m-0">2</h3>
                        </div>
                        <p className="text-center mt-2">Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="col-2 d-flex flex-column align-items-center">
                        <div className="d-flex justify-content-center align-items-center">
                            <svg width="200" height="200">
                                <path d="M10 80 Q 95 10 180 80" stroke="black" stroke-dasharray="5,5" fill="transparent" />
                            </svg>
                        </div>
                    </div>
                    <div className="col-2 d-flex flex-column align-items-center">
                        <div className="circle rounded-circle d-flex justify-content-center align-items-center">
                            <h3 className="text-center text-white m-0">3</h3>
                        </div>
                        <p className="text-center mt-2">Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>

            <div className="container align-items-center text-center">
                <h5 className='text-center'>Join over 1,000 satisfied learners today</h5>
                <button className='btn btn-primary'>Explore courses</button>
            </div>
        </div>
    )
}

export default Section_3