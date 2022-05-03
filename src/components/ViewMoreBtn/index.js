import React from 'react'
import {Link } from 'react-router-dom'
import "./index.css"

export default function ViewMoreBtn(props) {
  return (
    <>
     <Link to={props?.btnLink} className={`view_more ${props?.btnClass}`}>{props?.btnContent}</Link>
    </>
  )
}
