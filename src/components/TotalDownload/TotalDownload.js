import React,{useState} from 'react'
import "./TotalDownload.css"

export default function TotalDownload() {
    const [data,setData] = useState([
        {totle_no : "34.5K",totle_txt:"Members joined us"},
        {totle_no : "34.5K",totle_txt:"Post Views"},
        {totle_no : "34.5K",totle_txt:"Downloads"}
    ])
  return (
    <>
        <div className='overview_sec'>
            <div className='going_sec'>
                <div className='over_head'>How far we have gone through?</div>
                <div className='totle_no_list'>
                   {data.map((totle_data,index)=>{
                       return(
                        <div className='totle_no_item' key={index}>
                            <div className='totle_no'>{totle_data.totle_no}</div>
                            <div className='totle_txt'>{totle_data.totle_txt}</div>
                        </div>
                       )
                   })}
                   
                    {/* <div className='col-md-4'>
                        <div className='totle_no'></div>
                        <div className='totle_txt'></div>
                    </div>
                    <div className='col-md-4'>
                        <div className='totle_no'></div>
                        <div className='totle_txt'></div>
                    </div> */}
                </div>
            </div>
        </div>
    </>
  )
}
