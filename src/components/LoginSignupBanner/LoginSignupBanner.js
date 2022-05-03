import React from 'react';
import ViewMoreBtn from "../ViewMoreBtn/index";
import "./LoginSignupBanner.css";

export default function LoginSignupBanner() {
  return (
    <>
        <div className='container-fluid bg_light_pink login_signup_banner_sec'>
            <div className='row'>
                <div className='col-md-12  text-center color_white'>
                    <div className='login_signup_banner_content'>Login/Signup now to access all features</div>
                    <div className='login_signup_btn_sec'>
                        <ViewMoreBtn 
                            btnContent = "Login"
                            btnLink="#"
                            btnClass="mw_250 btn_none btn_color_white"
                        />
                        <ViewMoreBtn 
                            btnContent = "Sign Up"
                            btnLink="#"
                            btnClass="mw_250"
                        />
                    </div>
                    
                </div>
            </div>
        </div>
    </>
  )
}
