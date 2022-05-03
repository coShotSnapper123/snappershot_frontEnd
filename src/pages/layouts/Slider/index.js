import React, { useState ,Fragment,useRef } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import SliderSearch from '../../../components/SliderSearch';
import "./index.css";

const Slider =()=>{
    const titleRef = useRef()

function scrollBottom() {
    titleRef.current.scrollIntoView({ behavior: 'smooth' })
}
    // const scrollBottom = ()=>{

    // }
  return (
    <>
        <div className='slider_sec' >
            <Carousel controls={false} interval={2000} indicators={false} fade >
                <Carousel.Item className='slides'>
                        <img
                            className="d-block w-100"
                            src={`./assets/slider/slide1.png`}
                            alt=""
                        />
                        <Carousel.Caption>
                            <div className='sliderHeading'>
                                <p>Enjoy The <span>Best</span> Images Collection </p>
                            </div>
                            <div className='sliderContent'>
                                <p>Lorem ipsum is a dummy text. Lorem ipsum is a dummy text. Lorem ipsum is a dummy text. </p>
                            </div>
                        </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='slides'>
                        <img
                            className="d-block w-100"
                            src={`./assets/slider/slide2.png`}
                            alt=""
                        />
                        <Carousel.Caption>
                            <div className='sliderHeading'>
                                <p>Enjoy The <span>Best</span> Images Collection </p>
                            </div>
                            <div className='sliderContent'>
                                <p>Lorem ipsum is a dummy text. Lorem ipsum is a dummy text. Lorem ipsum is a dummy text. </p>
                            </div>
                        </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className='slide_search_sec'>
                <div className='slide_search'>
                    <SliderSearch />
                </div>
            </div>
            <div className="bottom_scroll" ref={titleRef} onClick={scrollBottom}><img src={`./assets/icons/down.png`} /></div>
        </div>
    </>
  )
}
export default Slider;