import {useState} from 'react';
import ViewMoreBtn from "../ViewMoreBtn/index"
import "./index.css"
import ImageModal from "../ImageModal/ImageModal";

export default function TrendingSearches() {
    const [trandingImgList,setTrandingImgList] = useState([{
            trandingImg:"./assets/tranding_searches/t1.png",
            trandingCon:"#1: Christmas",
            trandingCatName:"",
            like:0,
            thumbUserIcon:"./assets/icons/user.png"
        },
        {
            trandingImg:"./assets/tranding_searches/t2.png",
            trandingCon:"#2: Christmas",
            trandingCatName:"",
            like:0,
            thumbUserIcon:"./assets/icons/user.png"
        },
        {
            trandingImg:"./assets/tranding_searches/t3.png",
            trandingCon:"#3: Christmas",
            trandingCatName:"",
            like:0,
            thumbUserIcon:"./assets/icons/user.png"
        },
        {
            trandingImg:"./assets/tranding_searches/t4.png",
            trandingCon:"#4: Christmas",
            trandingCatName:"",
            like:0,
            thumbUserIcon:"./assets/icons/user.png"
        },
        {
            trandingImg:"./assets/tranding_searches/t5.png",
            trandingCon:"#5: Christmas",
            trandingCatName:"",
            like:0,
            thumbUserIcon:"./assets/icons/user.png"
        },
        {
            trandingImg:"./assets/tranding_searches/t6.png",
            trandingCon:"#6: Christmas",
            trandingCatName:"",
            like:0,
            thumbUserIcon:"./assets/icons/user.png"
        },
        {
            trandingImg:"./assets/tranding_searches/t7.png",
            trandingCon:"#7: Christmas",
            trandingCatName:"",
            like:0,
            thumbUserIcon:"./assets/icons/user.png"
        },
        {
            trandingImg:"./assets/tranding_searches/t8.png",
            trandingCon:"#8: Christmas",
            trandingCatName:"",
            like:0,
            thumbUserIcon:"./assets/icons/user.png"
        }


    ])
    const [fliterCount, setFliterCount] = useState(0)
    const [popValue, setPopValue] = useState(false)
    const [show, setShow] = useState(false);
    const [imgPath, setImgPath] = useState();
    const showPopImages = () => {
        setPopValue(false)
    }
    const showNewImages = () => {
        setPopValue(true)
    }
    const handleImage = (event) => {
        setShow(true);
        setImgPath(event.target.src);
    }
  return (
    <>
        <div className='container-fluid bg_light_pink tranding_sec'>
            <div className='row'>
                <div className='tranding_head col-md-12'>
                    <div className='display_h3'>Trending Searches</div>
                    <ViewMoreBtn 
                        btnContent = "View more"
                        btnLink="#"
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12'>
                    <ul className='tranding_img_grid'>
                        {trandingImgList?.map((trand_content,index)=>{
                            // {index < 8
                            //     ? 
                            return(
                                <li className='tranding_img_grid_item' key={index}>
                                    <div className='tranding_img'>
                                        <img src={trand_content.trandingImg} className='img-fluid'  onClick={handleImage}/>
                                            <div className='top_img_con'>
                                                <button className='img_hover_btn'><div className='no_like'>{trand_content.like }</div><img src={trand_content.like ? "./assets/icons/like.png" : "./assets/icons/liked.png"} className='img-fluid'/></button>
                                                <button className='img_hover_btn'><img src="./assets/icons/add.png" className='img-fluid'/></button>
                                            </div>
                                            <div className='bottom_img_con'>
                                                <div className='upload_user_cont'>
                                                    <div className='upload_user'>
                                                        <img src={trand_content.thumbUserIcon ? trand_content.thumbUserIcon  :"./assets/poplar_image/user.png"} className='img-fluid'/>
                                                    </div>
                                                    <div className='upload_disc'>
                                                        {/* {trand_content.trandingCon} */}
                                                    </div>
                                                </div>
                                                <button className='img_hover_btn'><img src="./assets/icons/download.png" className='img-fluid'/></button>
                                            </div>
                                    </div>
                                    <div className='tranding_img_cont'>{trand_content.trandingCon}</div>
                                </li> 
                            )
                            // :"" }
                            
                        })}
                                                 
                    </ul>
                </div>
            </div>

        </div>
        <ImageModal
                showImageModal={show}
                hideImageModal={() => setShow(false)}
                imageModalPath={imgPath}
            />
    </>
  )
}
