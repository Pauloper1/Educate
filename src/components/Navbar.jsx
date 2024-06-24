import React from 'react'

function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <div className="container d-flex justify-content-center">
                        <a class="navbar-brand" href="#">Educate</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Programs</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Courses</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Admissions</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Testimonial</a>
                                </li>
                            </ul>
                            {/* <div className="">
                        <button className='btn'>Login</button>
                    </div> */}
                        </div>
                    </div>

                </div>
            </nav>

        </>
    )
}

export default Navbar