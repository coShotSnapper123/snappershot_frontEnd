import React, { useState ,Fragment,useRef } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom';
import "./BlogSlider.css";

export default function BlogSlider() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    const [trandingImgList,setTrandingImgList] = useState([{
            trandingImg:"./assets/poplar_image/img1.png",
            trandingCon:"dssd",
            trandingCatName:"",
            poplerImge:true,
            like:2,
            thumbUserIcon:"./assets/icons/user.png"
        },
        {
            trandingImg:"./assets/poplar_image/img2.png",
            trandingCon:"dssd",
            trandingCatName:"",
            poplerImge:true,
            like:2,
            thumbUserIcon:"./assets/icons/user.png"
        },
        {
            trandingImg:"./assets/poplar_image/img3.png",
            trandingCon:"dssd",
            trandingCatName:"",
            poplerImge:true,
            like:2,
            thumbUserIcon:"./assets/icons/user.png"
        },
        {
            trandingImg:"./assets/poplar_image/img5.png",
            trandingCon:"dssd",
            trandingCatName:"",
            poplerImge:true,
            like:2,
            thumbUserIcon:"./assets/icons/user.png"
        },
        {
            trandingImg:"./assets/poplar_image/img4.png",
            trandingCon:"dssd",
            trandingCatName:"",
            poplerImge:true,
            like:0,
            thumbUserIcon:"./assets/icons/user.png"
        },
        {
            trandingImg:"./assets/poplar_image/img6.png",
            trandingCon:"dssd",
            trandingCatName:"",
            poplerImge:true,
            like:2,
            thumbUserIcon:"./assets/icons/user.png"
        },
        {
            trandingImg:"./assets/poplar_image/img7.png",
            trandingCon:"dssd",
            trandingCatName:"",
            poplerImge:true,
            like:0,
            thumbUserIcon:"./assets/icons/user.png"
        },
        {
            trandingImg:"./assets/poplar_image/img8.png",
            trandingCon:"dssd",
            trandingCatName:"",
            poplerImge:true,
            like:2,
            thumbUserIcon:"./assets/icons/user.png"
        },
        {
            trandingImg:"./assets/poplar_image/img9.png",
            trandingCon:"dssd",
            trandingCatName:"",
            poplerImge:true,
            like:0,
            thumbUserIcon:"./assets/icons/user.png"
        },
        // {
        //     trandingImg:"./assets/poplar_image/img10.png",
        //     trandingCon:"dssd",
        //     trandingCatName:"",
        //     poplerImge:true,
        //     like:2,
        //     thumbUserIcon:"./assets/poplar_image/user.png"
        // }
    ])
    const [fliterCount,setFliterCount] = useState(0)
    const [popValue,setPopValue]= useState(false)
    const showPopImages = () =>{
        setPopValue(false)
    }
    const showNewImages = () =>{
        setPopValue(true)
    }
    return (
        <>
            <div className='container-fluid cat_manu_sec mt_0'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='cat_menu_fliter'>
                            <ul className='cat_menu_sec'>
                                <li className='cat_menu_item'><Link className='cat_menu_link active' to="#">Category 1</Link></li>
                                <li className='cat_menu_item'><Link className='cat_menu_link' to="#">Category 2</Link></li>
                                <li className='cat_menu_item'><Link className='cat_menu_link' to="#">Category 3</Link></li>
                                <li className='cat_menu_item'><Link className='cat_menu_link' to="#">Category 4</Link></li>
                                <li className='cat_menu_item'><Link className='cat_menu_link' to="#">Category 5</Link></li>
                                <li className='cat_menu_item'><Link className='cat_menu_link' to="#">All</Link></li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className='container-fluid popular_sec blog_slide_sec'>
                <div className='row'>
                    <div className='tranding_head blog_head col-md-12'>
                        <div className='display_h4'>Top 3 Blogs</div>
                    </div>
                </div>
                <Carousel activeIndex={index} onSelect={handleSelect} controls={false} interval={2000} >
                    <Carousel.Item >
                        <div className='row'>
                            <div className='col-md-7'>
                                <img src="./assets/blogs/blogSlide2.png" className='img-fluid'/>
                            </div>
                            <div className='col-md-5'>
                                <div className='tag_name_list'>
                                    <span>Adventure</span>
                                </div>
                                <div className='pub_date'>
                                    28th January 2022
                                </div>
                                <div className='blog_slide_head'>
                                    France Is Alive to enhance patient communication
                                </div>
                                <div className='blog_slide_cont'>
                                    Lorem ipsum is a dummy text. Lorem ipsum is a dummy text. Lorem ipsum is a dummy text. Lorem ipsum is a dummy text. Lorem ipsum is a dummy text. Lorem ipsum is a dummy text. Lorem ipsum is a dummy text.
                                </div>
                                <div className='blog_slide_read_more'>READ MORE  <img src="./assets/icons/pur_right.png"/> </div>
                                <div className='blog_pubs'>
                                    <div className='pub_sec'>
                                        <div className='pub_icon_sec'>
                                            <img src="./assets/blogs/blogSlide1.png" className='img-fluid'/>
                                        </div>
                                        <div className='pub_name_sec'>
                                            <div className='pub_name'>John Doe</div>
                                            <div className='no_follers'>8,219 followers</div>
                                        </div>
                                    </div>
                                    <div className='pub_follow'> 
                                        <button className='follow_btn'>Follow</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item >
                            
                        <div className='row'>
                            <div className='col-md-7'>
                                <img src="./assets/blogs/blogSlide2.png" className='img-fluid'/>
                            </div>
                            <div className='col-md-5'>
                                <div className='tag_name_list'>
                                    <span>Adventure</span>
                                </div>
                                <div className='pub_date'>
                                    28th January 2022
                                </div>
                                <div className='blog_slide_head'>
                                    France Is Alive to enhance patient communication
                                </div>
                                <div className='blog_slide_cont'>
                                    Lorem ipsum is a dummy text. Lorem ipsum is a dummy text. Lorem ipsum is a dummy text. Lorem ipsum is a dummy text. Lorem ipsum is a dummy text. Lorem ipsum is a dummy text. Lorem ipsum is a dummy text.
                                </div>
                                <div className='blog_slide_read_more'><Link to="" >READ MORE  <img src="./assets/icons/pur_right.png"/></Link> </div>
                                <div className='blog_pubs'>
                                    <div className='pub_sec'>
                                        <div className='pub_icon_sec'>
                                            <img src="./assets/blogs/blogSlide2.png" className='img-fluid'/>
                                        </div>
                                        <div className='pub_name_sec'>
                                            <div className='pub_name'>John Doe</div>
                                            <div className='no_follers'>8,219 followers</div>
                                        </div>
                                    </div>
                                    <div className='pub_follow'> 
                                        <button className='follow_btn'>Follow</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                            
                    </Carousel.Item>
                </Carousel>
                
            </div>
        </>
    )
}