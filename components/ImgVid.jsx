import React from 'react'
import {FaTimes} from 'react-icons/fa'

const ImgVid = ({image,overlay,setOverlay}) => {
  return (
    <div className='img_vid'>
    <div className='modal_container'>
    {/* onClick={()=>setCover(false)} */}
        <FaTimes
        className='close_modal'
        onClick={()=>setOverlay(false)}
        />
        <img
        alt='image'
        src={image}/>
    </div>
    </div>
    
  )
}

export default ImgVid;