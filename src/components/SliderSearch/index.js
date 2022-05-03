import React,{useState} from 'react'
import "./SliderSearch.css";

export default function SliderSearch() {
  const [findSugges,setFindSugges] = useState(["Nature","Adventure","Nature","Adventure","Nature","Adventure"])
  const findInSug = () =>{

  }
  return (
    <>
        <div className="input-group mb-1">
            <span className="input-group-text" id="basic-addon1"><img src="./assets/icons/search.png"/></span>
            <input type="text" className="form-control" placeholder="Search for images" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        <div className='suggest_cateagory'>
          <p><strong>Suggestions:</strong> 
            {findSugges.map((sug,key)=>{
              return(
                <span key={key} onClick={()=>{(findInSug(sug))}}>{sug}</span>
              )
            })}
          </p>
        </div>
    </>
  )
}
