import React from 'react'
import './base.css'
function Section_2() {
    return (
        <div className='container my-5'>
            <div class="row">
                <div class="col-md-6 order-md-1 order-2">
                    <h2 class="custom-font custom-text">New Courses</h2>
                </div>
                <div class="col-md-6 order-md-2 order-2 text-md-end text-start my-2">
                    <button class="btn btn-primary">EXPLORE COURSES</button>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 col-xs-12">
                    <img src="\images\focused-students.jpg" alt="" className="img-fluid rounded" />
                    <h4 className='mt-2'>Native Mac Apps in Swift</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, ut!</p>
                    <div className="rounded-pill border d-inline-block">
                        {/* <img src="" className='img-fluid' alt="" /> */}
                        <p style={{marginBottom: 0}}>By Annabelle Portar</p>
                    </div>
                    <div className="container">
                        <span></span>
                        <p>3 Lesson</p>
                    </div>
                </div>
                <div className="col-md-6 col-xs-12 custom-text">
                    <img src="\images\close-up-students-classroom.jpg" alt="" className="img-fluid rounded" />
                    <h4 className='custom-text mt-2'>Native Mac Apps in Swift</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, ut!</p>
                    <div className="container">
                        <img src="" className='img-fluid' alt="" />
                        <p>By Annabelle Portar</p>
                    </div>
                    <div className="container">
                        <span></span>
                        <p>3 Lesson</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section_2