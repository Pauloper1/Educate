import React, { useEffect, useState, useRef } from 'react'
import CarouselCom from './CarouselCom'
// import './base.css'

function Section_5() {
    const [tData, setTdata] = useState()
    const carouselRef = useRef(null)


    const fetchData = async () => {
        let response = await fetch('https://viaje.ai/testimonial_api/')
        response = await response.json()
        console.log(response.data)
        setTdata(response.data)
    }

    useEffect(() => {
        fetchData()

    }, [])
    return (
        <div className="container-fluid" style={{backgroundColor: "#fff1ff"}}>
            <div className="container">
                <div className="container mb-3">
                    <h1 className='text-center'>What our Students Say</h1>
                </div>
                <div className="row">
                    <div className="col-md-5 col-xs-12">
                        <img src="images/testimonialImage.png" className='img-fluid' alt="" />
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <CarouselCom data={tData} />

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Section_5