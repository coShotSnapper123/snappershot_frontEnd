import { useState } from 'react';
import ViewMoreBtn from "../ViewMoreBtn/index";
import { Link } from 'react-router-dom';
import "./Popular.css";

export default function Popular() {
    const [trandingImgList, setTrandingImgList] = useState([{
        trandingImg: "./assets/poplar_image/img1.png",
        trandingCon: "dssd",
        trandingCatName: "",
        poplerImge: true,
        like: 2,
        thumbUserIcon: "./assets/icons/user.png"
    },
    {
        trandingImg: "./assets/poplar_image/img2.png",
        trandingCon: "dssd",
        trandingCatName: "",
        poplerImge: true,
        like: 2,
        thumbUserIcon: "./assets/icons/user.png"
    },
    {
        trandingImg: "./assets/poplar_image/img3.png",
        trandingCon: "dssd",
        trandingCatName: "",
        poplerImge: true,
        like: 2,
        thumbUserIcon: "./assets/icons/user.png"
    },
    {
        trandingImg: "./assets/poplar_image/img5.png",
        trandingCon: "dssd",
        trandingCatName: "",
        poplerImge: true,
        like: 2,
        thumbUserIcon: "./assets/icons/user.png"
    },
    {
        trandingImg: "./assets/poplar_image/img4.png",
        trandingCon: "dssd",
        trandingCatName: "",
        poplerImge: true,
        like: 0,
        thumbUserIcon: "./assets/icons/user.png"
    },
    {
        trandingImg: "./assets/poplar_image/img6.png",
        trandingCon: "dssd",
        trandingCatName: "",
        poplerImge: true,
        like: 2,
        thumbUserIcon: "./assets/icons/user.png"
    },
    {
        trandingImg: "./assets/poplar_image/img7.png",
        trandingCon: "dssd",
        trandingCatName: "",
        poplerImge: true,
        like: 0,
        thumbUserIcon: "./assets/icons/user.png"
    },
    {
        trandingImg: "./assets/poplar_image/img8.png",
        trandingCon: "dssd",
        trandingCatName: "",
        poplerImge: true,
        like: 2,
        thumbUserIcon: "./assets/icons/user.png"
    },
    {
        trandingImg: "./assets/poplar_image/img9.png",
        trandingCon: "dssd",
        trandingCatName: "",
        poplerImge: true,
        like: 0,
        thumbUserIcon: "./assets/icons/user.png"
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
    const [fliterCount, setFliterCount] = useState(0)
    const [popValue, setPopValue] = useState(false)
    const showPopImages = () => {
        setPopValue(false)
    }
    const showNewImages = () => {
        setPopValue(true)
    }
    const handleImage = () => {

    }
    return (
        <>
            <div className='container-fluid cat_manu_sec'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='cat_menu_fliter'>
                            <ul className='cat_menu_sec'>
                                <li className='cat_menu_item'><a className='cat_menu_link active' href="#">Explore</a></li>
                                <li className='cat_menu_item'><a className='cat_menu_link' href="#">Featured</a></li>
                                <li className='cat_menu_item'><a className='cat_menu_link' href="#">Wallpapers</a></li>
                                <li className='cat_menu_item'><a className='cat_menu_link' href="#">3D Renders</a></li>
                                <li className='cat_menu_item'><a className='cat_menu_link' href="#">Textures</a></li>
                                <li className='cat_menu_item'><a className='cat_menu_link' href="#">All</a></li>
                            </ul>
                            <div className='cat_fliter_sec'>
                                <button><img className='img-fluid' src="./assets/icons/fliter.png" />Filters ({fliterCount})</button>
                                <div className=''></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='container-fluid popular_sec'>
                <div className='row'>
                    <div className='tranding_head col-md-12'>
                        <div className='display_h3'>{popValue ? " New " : "Popular"}</div>
                        <div className='popular_btn_list'>
                            <button className={`btn_link ${popValue ? " " : " active"} `} onClick={() => showPopImages()}>Popular</button>
                            <button className={`btn_link ${popValue ? "active" : " "} `} onClick={() => showNewImages()}>New</button>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <ul className='popular_img_grid'>
                            {trandingImgList?.map((trand_content, index) => {
                                return (
                                    <li className='popular_img_grid_item' key={index}>
                                        <div className='popular_img'>
                                            <img src={trand_content.trandingImg} className='img-fluid' onClick={() => handleImage()} />

                                            <div className='top_img_con'>
                                                <button className='img_hover_btn'><div className='no_like'>{trand_content.like}</div><img src={trand_content.like ? "./assets/icons/like.png" : "./assets/icons/liked.png"} className='img-fluid' /></button>
                                                <button className='img_hover_btn'><img src="./assets/icons/add.png" className='img-fluid' /></button>
                                            </div>
                                            <div className='bottom_img_con'>
                                                <div className='upload_user_cont'>
                                                    <div className='upload_user'>
                                                        <img src={trand_content.thumbUserIcon ? trand_content.thumbUserIcon : "./assets/poplar_image/user.png"} className='img-fluid' />
                                                    </div>
                                                    <div className='upload_disc'>
                                                        {trand_content.trandingCon}
                                                    </div>
                                                </div>
                                                <button className='img_hover_btn'><img src="./assets/icons/download.png" className='img-fluid' /></button>
                                            </div>

                                        </div>
                                    </li>
                                )
                            })}

                        </ul>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-12 text-center pt-50'>
                        <ViewMoreBtn
                            btnContent="View more"
                            btnLink="#"
                        />
                    </div>
                </div>
                {/* <div className='row'>
                    <div className='col-md-12 text-center pt-20'>
                        <img src={`./assets/ads/930x180.jpeg`} className='img-fluid'/>
                    </div>
                </div> */}
            </div>
        </>
    )
}