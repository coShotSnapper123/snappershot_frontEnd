import React from 'react'
import {Link} from "react-router-dom"
import "./index.css";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
  return (
    <>
        <div className="bottom_scroll footer_scroll" 
         onClick={scrollToTop}
         ><img src={`./assets/icons/down.png`} /></div>
        <footer>
            <div className='container-fluid'>
                <div className='row'>
                        <div className='col-xl-5 col-lg-5 col-md-5 foot_abt'>
                            <div className='foot_head_h2 mb_24'>Snappershot</div>
                            <div className='foot_abt_cont'>
                            Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Gravida turpis arcu nunc morbi
interdum et proin.
                            </div>
                            <div className='copy_right_sec'>
                            All copyrights reserved Snappershot 2022 Inc.
                            </div>
                        </div>
                        <div className='col-xl-4 col-lg-3 col-md-3 '>
                            <div className='foot_head_h3 mb_24'>Company</div>
                            <ul className="list-unstyled text-small">
                                <li><Link className="a-secondary" to="/about">About Us</Link></li>
                                <li><Link className="a-secondary" to="/careers">Careers</Link></li>
                                <li><Link className="a-secondary" to="/terms-and-conditions">Terms & Condition</Link></li>
                                <li><Link className="a-secondary" to="/privacy-policy">Privacy Policy</Link></li>
                                <li><Link className="a-secondary" to="/faq">FAQs</Link></li>
                                <li><Link className="a-secondary" to="/license">License</Link></li>
                            </ul>
                        </div>
                        <div className='col-xl-3 col-lg-4 col-md-4 '>
                            <div className='foot_head_h3 mb_16'>Get all Current Updates</div>
                            <div className='mb_30'>Be the first to get latest updates of our application.</div>
                            <div className="input-group mb-1">
                                <input type="text" className="form-control" placeholder="Enter your email address" />
                                <button className='foot_sub_btn'>Submit</button>
                            </div>
                            <div className='cont_sec_foot'>
                                <div className='foot_head_h3 '>Connect with us</div>
                                <ul>
                                    <li><Link  className="fb_link" to="#"><img src='./assets/icons/f_btn.png'/></Link></li>
                                    <li><Link className="insta_link" to="#"><img src='./assets/icons/Instagram.png'/></Link></li>
                                    <li><Link className="twit_link" to="#"><img src='./assets/icons/twit.png'/></Link></li>
                                    <li><Link className="in_link" to="#"><img src='./assets/icons/in.png'/></Link></li>
                                </ul>
                            </div>
                        </div>
                </div>
            </div>
       </footer>
    </>
  )
}
