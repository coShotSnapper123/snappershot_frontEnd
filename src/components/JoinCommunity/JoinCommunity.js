import React from 'react'
import ViewMoreBtn from '../ViewMoreBtn'
import "./JoinCommunity.css";

export default function JoinCommunity(props) {
  return (
    <>
        <div className={`community_sec bg_light_pink ${props ?.mtb}`}>
            <div className='community_cont_sec  text-center'>
                <div className='community_head'>
                    <div className='display_h3 text-center'>Join our community</div>
                </div>
                <div className='community_cont'>
                    <p>Lorem ipsum is a dummy content. Lorem ipsum is a dummy content. Lorem ipsum is a dummy content. Lorem ipsum is a dummy content. Lorem ipsum is a dummy content. Lorem ipsum is a dummy content. Lorem ipsum is a dummy content. Lorem ipsum is a dummy content. Lorem ipsum is a dummy content.</p>
                </div>
                <div className='community_btn'>
                    <ViewMoreBtn 
                        btnContent = "Join"
                        btnLink="#"
                        btnClass="mw_250"
                    />
                </div>
            </div>
        </div>
    </>
  )
}
