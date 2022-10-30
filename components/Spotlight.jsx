import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ImgVid from './ImgVid'
// import Latest from './Latest'

const Spotlight = () => {
  const[data,setData]=useState([])
  const[overlay, setOverlay]=useState(false)
  
  const fetchData=async()=>{
    await fetch('https://api.nasa.gov/planetary/apod?api_key=gaff4Pwpu0Qg6woyFty1YhVRxhj4In1ImvOCyFD7&start_date=2022-10-01&end_date=2022-10-29&thumbs=true')
    .then(res=>res.json())
    .then(res=>{
      setData(res)
      console.log(res)
    })
  }
  
  useEffect(()=>{
    fetchData()
  },[])

  
  
  return (
    <div className='nasa_spotlight_section'>
    <div className='latest_container'>
        <div className='latest_left'>
            <p className='title'>{data[data.length-1]?.title}</p>
            <p className='explanation'>{data[data.length-1]?.explanation.length>900?data[data.length-1].explanation.substring(0,900)+'. . . . . . .':data[data.length-1]?.explanation}</p>
            <p className='copyright'>{data[data.length-1]?.copyright}</p>
        </div>
        <div className='latest_right'>
            <img 
            onClick={()=>setOverlay(true)}
            className='latest_image'
            src={data[data.length-1]?.url}
            alt={data[data.length-1]?.title}
            />
        </div>
        {overlay && <ImgVid
          overlay={overlay}
          setOverlay={setOverlay}
          image={data[data.length-1]?.url}
          />}
    </div>
    </div>
  )
}

export default Spotlight
