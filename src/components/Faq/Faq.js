import React,{useState} from 'react';
import "./Faq.css";

export default function Faq() {
    // const[faqList,setFaqList] =useState([
    //     {
    //         question:"Requirements & Registration",
    //         ans:"Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello."
    //     },
    //     {
    //         question:"Requirements & Registration",
    //         ans:"Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello."
    //     },
    //     {
    //         question:"Requirements & Registration",
    //         ans:"Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello."
    //     },
    //     {
    //         question:"Requirements & Registration",
    //         ans:"Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello."
    //     },
    //     {
    //         question:"Requirements & Registration",
    //         ans:"Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello."
    //     },
    //     {
    //         question:"Requirements & Registration",
    //         ans:"Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello."
    //     },
    //     {
    //         question:"Requirements & Registration",
    //         ans:"Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello."
    //     },
    //     {
    //         question:"Requirements & Registration",
    //         ans:"Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello."
    //     }
    // ]);
    
  return (
    <>
        <div className='faq_sec'>
            <div className='display_h5 fw_600'>FAQ’s</div>

            <div className="accordion" id="accordionExample">
                {/* {faqList.map((faq,index)=>{
                    return(
                        <div className="accordion-item" key={index}>
                            <h2 className="accordion-header" id={`heading${index}`}>
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="true" aria-controls={`collapse${index}`}>
                                    {faq.question}
                                </button>
                            </h2>
                            <div id={`collapse${index}`} className="accordion-collapse collapse show" aria-labelledby={`heading${index}`} data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    {faq.ans}
                                </div>
                            </div>
                        </div>
                    )
                })} */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id={`headingOne`}>
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseOne`} aria-expanded="true" aria-controls={`collapseOne`}>
                            Requirements & Registration
                        </button>
                    </h2>
                    <div id={`collapseOne`} className="accordion-collapse collapse show" aria-labelledby={`headingOne`} data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Requirements & Registration
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Requirements & Registration
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo2">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo2">
                            Requirements & Registration
                        </button>
                    </h2>
                    <div id="collapseTwo2" className="accordion-collapse collapse" aria-labelledby="headingTwo2" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree3">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree3" aria-expanded="false" aria-controls="collapseThree3">
                            Requirements & Registration
                        </button>
                    </h2>
                    <div id="collapseThree3" className="accordion-collapse collapse" aria-labelledby="headingThree3" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo4">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo4" aria-expanded="false" aria-controls="collapseTwo4">
                            Requirements & Registration
                        </button>
                    </h2>
                    <div id="collapseTwo4" className="accordion-collapse collapse" aria-labelledby="headingTwo4" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree5">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree5" aria-expanded="false" aria-controls="collapseThree5">
                            Requirements & Registration
                        </button>
                    </h2>
                    <div id="collapseThree5" className="accordion-collapse collapse" aria-labelledby="headingThree5" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo6">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo6" aria-expanded="false" aria-controls="collapseTwo6">
                            Requirements & Registration
                        </button>
                    </h2>
                    <div id="collapseTwo6" className="accordion-collapse collapse" aria-labelledby="headingTwo6" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree7">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree7" aria-expanded="false" aria-controls="collapseThree7">
                            Requirements & Registration
                        </button>
                    </h2>
                    <div id="collapseThree7" className="accordion-collapse collapse" aria-labelledby="headingThree7" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello. Dummy text lorem ipsum hello.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </>
  )
}
