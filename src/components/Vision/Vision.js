import React from 'react'
import "./Vision.css"

export default function Vision() {
  return (
    <>
        <div className='vision_sec color_white'>
            <div className='row'>
                <div className='col-md-6 vision_txt_sec'>
                    <div className='vision_head'> 
                        <div className='display_h3 color_white'>Our Team</div>
                    </div>
                    <div className='vision_con'>
                    <p>Lorem ipsum is a dummy content. Lorem ipsum is a dummy content. Lorem ipsum is a dummy content. Lorem ipsum is a dummy content. Lorem ipsum is a dummy content. Lorem ipsum is a dummy content. Lorem ipsum is a dummy content. Lorem ipsum is a dummy content. Lorem ipsum is a dummy content.</p>
                    <p>Lorem ipsum is a dummy content. Lorem ipsum is a dummy content. Lorem ipsum is a dummy content. Lorem ipsum is a dummy content. Lorem ipsum is a dummy content. Lorem ipsum is a dummy content. Lorem ipsum is a dummy content. Lorem ipsum is a dummy content. Lorem ipsum is a dummy content.</p>
                    </div> 
                </div>
                <div className='col-md-6'>
                    <div className='vision_img_sec'>
                        <img className='img-fluid' src="./assets/about/vision.png"/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
