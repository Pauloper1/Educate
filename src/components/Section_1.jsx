import React, { useState } from 'react'
import './base.css'
import 'react-modal-video/scss/modal-video.scss';
import ModalVideo from 'react-modal-video';


function Section_1() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <div className="container mt-3">
                <div className="row align-items-center text-center">
                    <div className="col-6 offset-3">
                        <h1 className='text-center mt-3 custom-font'>Get The Best Online Learning Service</h1>
                        <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, exercitationem reiciendis. Quibusdam sequi ipsa corrupti nemo, dicta accusamus nesciunt tenetur.</p>
                        <button className='btn btn-primary my-3'>Start a course</button>
                        <div className="continer" style={{cursor: 'pointer'}}>
                            <img onClick={() => setOpen(true)} src="\images\image1.png" className='img-fluid rounded' alt="" />
                        </div>
                    </div>
                    <ModalVideo
                        channel="youtube"
                        youtube={{ mute: 0, autoplay: 0 }}
                        isOpen={isOpen}
                        videoId="4h8B080Mv4U"
                        onClose={() => setOpen(false)}
                    />
                </div>
            </div>
        </>
    )
}

export default Section_1