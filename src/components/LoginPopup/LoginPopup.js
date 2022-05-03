import React from 'react'
import { Link } from "react-router-dom"
import "./LoginPopup.css"

export default function LoginPopup(props) {
  return (
    <>
        <div className="modal fade" id={props.id} data-bs-keyboard="true" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className='modal_body'>
                        <nav>
                            <div className="nav nav-tabs login_tabs" id="nav-tab" role="tablist">
                                <button className={`nav-link ${props.login ? "" : "active"}`}  
                                    id="nav-home-tab" data-bs-toggle="tab" 
                                    data-bs-target="#nav-home" type="button" 
                                    role="tab" aria-controls="nav-home" aria-selected={props.login ? "false" : "true"}>Login</button>
                                <button className={`nav-link ${props.login ? "active" : ""}`} 
                                    id="nav-profile-tab" data-bs-toggle="tab" 
                                    data-bs-target="#nav-profile" type="button" 
                                    role="tab" aria-controls="nav-profile" 
                                    aria-selected={props.login ? "true " : "false"}>Sign Up</button>
                            </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">
                            <div className={`tab-pane fade ${props.login ? "" : "show active"}`} id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                <div className='login_sec'>
                                    <div className='social_login'>
                                        <button className='social_login_btn g_btn'><img src="./assets/icons/g_btn.png"/> Login with Google</button>
                                        <button className='social_login_btn f_btn'><img src="./assets/icons/f_btn.png"/> Login with Facebook</button>
                                    </div>
                                    <div className='or_sec'>Or</div>
                                    <div className='login_form_sec'>
                                        <form className="row g-3 form_sec">
                                            <div className="col-md-12">
                                                <input type="email" className="form-control" name="loginEmail" placeholder='Email'/>
                                            </div>
                                            <div className="col-md-12">
                                                <input type="password" className="form-control"  name="loginPass" placeholder='Password' />
                                                <div className='eye_icon'><img src="./assets/icons/i_icon.png"/></div>
                                            </div>
                                            
                                            <div className="col-12 forget_link">
                                                <Link className="" to="/"> Forgot your password? </Link>
                                            </div>
                                            <div className="col-12">
                                                <button className="btn form_submit" type="submit">Login</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className={`tab-pane fade ${props.login ? "show active" : ""}`} id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
