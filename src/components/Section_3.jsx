import React from 'react'
import './Section_3.css'
function Section_3() {
    return (
        <div className='container-fluid vh-100 align-content-center' style={{backgroundColor: "#fff1ff"}}>
            <div className="container">
                <h2 className='text-center'>How does Educate work?</h2>
            </div>
            <div className="container mb-5">
                <div className="row align-items-center">
                    <div className="col-2">
                        <div className="circle rounded-circle align-content-center">
                            <h3 className='text-center text-white'>1</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="col-2 ">
                        
                    </div>
                    <div className="col-2">
                        <div className="circle rounded-circle align-content-center">
                            <h3 className='text-center text-white'>2</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="col-2">
                       
                    </div>
                    <div className="col-2">
                        <div className="circle rounded-circle align-content-center">
                            <h3 className='text-center text-white'>3</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
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