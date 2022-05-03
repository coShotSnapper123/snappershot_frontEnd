import React from 'react'
import {Link} from "react-router-dom"
import "./BlogsBlock.css"

export default function BlogsBlock(props) {
  return (
    <>
        <div className='blog_blocks'>
            <div className='blog_img_sec'>
                <img className='img-fluid' src={props.bImg} />
            </div>
            <div className='blog_con_sec'>
                <div className='blog_post_date'>{props.bDate}</div>
                <div className='blog_head display_h5'>{props.bHead}</div>
                <div className='blog_cont'>{props.bCont}</div>
                <div className='blog_link'>
                    <Link to={props.bLink}>{props.bLinkText} <img className='img-fluid' src="./assets/icons/right.png" /></Link>
                </div>
            </div>
        </div>
    </>
  )
}
