import React from 'react'
import ViewMoreBtn from "../ViewMoreBtn/index";
import "./Contributor.css"

export default function Contributor() {
  return (
    <>
        <div className='container-fluid bg_light_pink contributor_sec'>
            <div className='row'>
                <div className='col-md-12  text-center'>
                    <div className='contri_content'>Become a Contributor and Earn</div>
                    <ViewMoreBtn 
                        btnContent = "Start Contributing"
                        btnLink="#"
                        btnClass="mw_250"
                    />
                </div>
            </div>
        </div>
    </>
  )
}
