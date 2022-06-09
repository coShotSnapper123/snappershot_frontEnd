import { React, useState } from 'react';
import ViewMoreBtn from "../ViewMoreBtn/index";
import "./Collection.css";

export default function Collection() {
    const [catData, setCatData] = useState([
        {
            catName: "Explore",
            totalCatItem: "80 Resources",
            catItemList: [
                {
                    catImage: "./assets/poplar_image/img1.png",
                    like: 2,
                },
                {
                    catImage: "./assets/poplar_image/img1.png",
                    like: 2,
                },
                {
                    catImage: "./assets/poplar_image/img1.png",
                    like: 2,
                },
                {
                    catImage: "./assets/poplar_image/img1.png",
                    like: 2,
                },
                {
                    catImage: "./assets/poplar_image/img1.png",
                    like: 2,
                },
                {
                    catImage: "./assets/poplar_image/img1.png",
                    like: 2,
                },
            ]
        },
        {
            catName: "Explore",
            totalCatItem: "80 Resources",
            catItemList: [
                {
                    catImage: "./assets/poplar_image/img1.png",
                    like: 2,
                },
                {
                    catImage: "./assets/poplar_image/img1.png",
                    like: 2,
                },
                {
                    catImage: "./assets/poplar_image/img1.png",
                    like: 2,
                },
                {
                    catImage: "./assets/poplar_image/img1.png",
                    like: 2,
                },
                {
                    catImage: "./assets/poplar_image/img1.png",
                    like: 2,
                },
                {
                    catImage: "./assets/poplar_image/img1.png",
                    like: 2,
                },
            ]
        },
        {
            catName: "Explore",
            totalCatItem: "80 Resources",
            catItemList: [
                {
                    catImage: "./assets/poplar_image/img1.png",
                    like: 2,
                },
                {
                    catImage: "./assets/poplar_image/img1.png",
                    like: 2,
                },
                {
                    catImage: "./assets/poplar_image/img1.png",
                    like: 2,
                },
                {
                    catImage: "./assets/poplar_image/img1.png",
                    like: 2,
                },
                {
                    catImage: "./assets/poplar_image/img1.png",
                    like: 2,
                },
                {
                    catImage: "./assets/poplar_image/img1.png",
                    like: 2,
                },
            ]
        },
        {
            catName: "Explore",
            totalCatItem: "80 Resources",
            catItemList: [
                {
                    catImage: "./assets/poplar_image/img1.png",
                    like: 2,
                },
                {
                    catImage: "./assets/poplar_image/img1.png",
                    like: 2,
                },
                {
                    catImage: "./assets/poplar_image/img1.png",
                    like: 2,
                },
                {
                    catImage: "./assets/poplar_image/img1.png",
                    like: 2,
                },
                {
                    catImage: "./assets/poplar_image/img1.png",
                    like: 2,
                },
                {
                    catImage: "./assets/poplar_image/img1.png",
                    like: 2,
                },
            ]
        },
        {
            catName: "Explore",
            totalCatItem: "80 Resources",
            catItemList: [
                {
                    catImage: "./assets/poplar_image/img1.png",
                    like: 2,
                },
                {
                    catImage: "./assets/poplar_image/img1.png",
                    like: 2,
                },
                {
                    catImage: "./assets/poplar_image/img1.png",
                    like: 2,
                },
                {
                    catImage: "./assets/poplar_image/img1.png",
                    like: 2,
                },
                {
                    catImage: "./assets/poplar_image/img1.png",
                    like: 2,
                },
                {
                    catImage: "./assets/poplar_image/img1.png",
                    like: 2,
                },
            ]
        },
    ])


    function collectItem(imgItem, imgI) {

        return (
            <>
                {imgI.map((item, index) => {
                    return (
                        <>



                            {(index < 4) ?
                                <>
                                    {(imgItem === 1) ?
                                        <>
                                            {(index < 2) ?
                                                <li className={`collect_item `} key={index}>
                                                    <div className='collect_head'>
                                                        <div className='display_h5'><img src={item?.catImage} /> </div>

                                                    </div>
                                                </li>
                                                : ""}
                                        </>
                                        :
                                        <li className={`collect_item `} key={index}>
                                            <div className='collect_head'>
                                                <div className='display_h5'><img src={item?.catImage} /> </div>

                                            </div>
                                        </li>
                                    }
                                </>
                                : ""}

                        </>
                    )
                })}
            </>
        )

    }
    return (
        <>
            <div className='container-fluid tranding_sec'>
                <div className='row'>
                    <div className='tranding_head col-md-12'>
                        <div className='display_h3'>Collection</div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <ul className='collect_img_grid'>

                            {catData?.map((collect_item, index) => {

                                return (
                                    <>
                                        {(index < 4) ?
                                            <li className='collect_item' key={index}>
                                                <div className='collect_head'>
                                                    <div className='display_h5'>{collect_item.catName} </div>
                                                    <div className='coll_tot_item'>{collect_item?.totalCatItem}</div>
                                                    <div className='imag_collect'>
                                                        <ul className={`${(index === 0) ? "first_img_block" : (index === 1) ? "two_eql_block" : (index === 2) ? "third_img_block" : (index === 3) ? "fourth_eql_block" : ""}`}>
                                                            {collectItem(index, collect_item?.catItemList)}
                                                        </ul>
                                                    </div>
                                                </div>

                                            </li>
                                            : ""}
                                    </>
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
            </div>
        </>
    )
}