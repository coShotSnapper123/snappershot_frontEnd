import React,{useEffect, useState}from 'react'
import { Link , NavLink,useLocation} from "react-router-dom";
import "./index.css"
import SliderSearch from '../../../components/SliderSearch';
import LoginPopup from '../../../components/LoginPopup/LoginPopup';

export default function Header(props) {
    const [loginCheck,setLoginCheck] = useState(false)
    const [showMenu,setShowMenu] =useState(false);

    const location = useLocation();
    const {pathname }  = location;
    const splitLocation = pathname.split("/") ;
   
    if(pathname === '/' || pathname==="/about"){
        console.log(pathname,"path " ,splitLocation)
    }
    function signUpPopUp(){
        setLoginCheck(true)
    }
    function loginPopUp(){
        setLoginCheck(false)
    }

  return (
    <>
        <nav className={`navbar navbar-expand-lg  ${(splitLocation[1] === "" || splitLocation[1] === "about" )?  props.scrollFixed  :" fixed-top mb_header"} `}  >
            <div className="container-fluid">
                 <NavLink className="navbar-brand" to="/">
                 {(splitLocation[1] === "" || splitLocation[1] === "about" ) ? 
                     <img src={props.logoChange ? "./assets/black_logo.png" : "./assets/white_logo.png" } />
                     : <img src= "./assets/black_logo.png" />}
                </NavLink>
                 {(splitLocation[1] === "" || splitLocation[1] === "about" )?  <>
                    {props.logoChange ? <div className='header_search_sec'><SliderSearch /></div> : ""}
                 </> :<div className='header_search_sec'><SliderSearch /></div>} 
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    {/* <span className="navbar-toggler-icon"></span> */}
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className={`nav-link ${splitLocation[1] === "" ? "active" :"" }`} to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${splitLocation[1] === "blogs" ? "active" :"" }`} to="/blogs">Blogs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${splitLocation[1] === "about" ? "active" :"" }`}to="/about">About Us</Link>
                        </li>
                        <li className='divider'></li>
                        <li className="nav-item">
                            <Link className={`nav-link ${splitLocation[1] === "edit" ? "active" :"" }`} to="#">
                                <img src={(splitLocation[1] === "" || splitLocation[1] === "about" ) ? props.logoChange ? "./assets/icons/edit_gray.png" : "./assets/icons/edit_white.png" : "./assets/icons/edit_gray.png"} /> 
                                <span>Edit</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${splitLocation[1] === "upload" ? "active" :"" }`} to="#">
                                <img src={(splitLocation[1] === "" || splitLocation[1] === "about" ) ? props.logoChange ? "./assets/icons/upload_gray.png" : "./assets/icons/upload_white.png" : "./assets/icons/upload_gray.png"} />  
                                <span>Upload</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" data-bs-toggle="modal" data-bs-target="#staticBackdrop" type="button" to="#" onClick={loginPopUp}>Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="btn btn-yellow" data-bs-toggle="modal" data-bs-target="#staticBackdrop" type="button" to="#" onClick={signUpPopUp}>Sign Up</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <LoginPopup 
            id="staticBackdrop"
            login={loginCheck}
        />
    </>
  )
}
