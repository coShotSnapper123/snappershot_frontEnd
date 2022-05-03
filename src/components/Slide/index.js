import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const Slide = ({isCaption, imgSrc, imgAlt, captionHeading, captionContant}) =>{
    return (
        <>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={`./assets/slider/${imgSrc}`}
                    alt={imgAlt}
                />
                {isCaption ? 
                    <Carousel.Caption>
                        <h3>{captionHeading}</h3>
                        <p>{captionContant}</p>
                    </Carousel.Caption>
                    :  ""
                }
                
            </Carousel.Item>
        </>
      )
}
export default Slide;