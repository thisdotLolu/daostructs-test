import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import ReactPlayer from 'react-player'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ImgVid from './ImgVid';
import axios from 'axios';



export const HorizontalScroll = ({url})=>{
    // const[results,setResults]=useState(null)
    const[cover,setCover]=useState(false)
    const[results,setResults]=useState([])
    // const[cover,setCover]=useState(true)
    console.log(url)
    console.log('cover:', cover)
    useEffect(()=>{
        if(url){
            axios.get(url).then((response)=>{
                console.log(response)
                setResults(response.data)
                console.log(results)
            })
            .catch((err)=>{
                console.log(err)
            })
            // const fetchData=async()=>{
            //     await fetch(url)
            //     .then(res=>res.json())
            //     .then(res=>{
            //         return setResults(res)
            //     })
            // }
            // fetchData()
        }
    },[url])
    
      console.log(results)
    
  return (
    <div className='horizontal_scroll_container'>
    <Swiper
        navigation 
        pagination={true}
        scrollbar={
          true
        }
        modules={[Scrollbar,Navigation,Pagination]}
        slidesPerView={3}
        className="mySwiper"
      >
        {
        results && results.map((dt,index)=>{
        return(
        <>
        <div key={index}>
        <SwiperSlide>
        <div
        style={{zIndex:'100000'}}
        onClick={()=>{
            setCover(true)
            console.log('cover:',cover)
        }}
        className='swiper_slide'
        >{
            dt?.media_type==='image'?(<img
            onClick={()=>setCover(true)}
            src={dt.url}
            alt={dt.title}
            className='slider_images'
            />):(<ReactPlayer
            //className='video'
            width='30vw'
            height='30vh'
            url={dt.url}
            />)
        }
        
        <p>{dt.title}</p>
        <p>{dt.copyright}</p>
        {/* <p>{dt.}</p> */}
        </div>
        </SwiperSlide>
        <div>
            {cover && 
            // <div onClick={()=>setCover(false)}>
                <img
                src="https://apod.nasa.gov/apod/image/2210/andromeda-over-alps1100.jpg"
                onClick={()=>setCover(false)}
                // src='https://api.nasa.gov/planetary/apod?api_key=BkF78ObzKt8S1leoWwMZMjEUqHi4iyLWek81OjBq&start_date=2022-10-22&end_date=2022-10-29&thumbs=true'                               
                alt='text'
                className='slider_image_overlay'
                />
            // </div>
            }
        </div>
        </div>
        </>
        )
      })
    }
    
      </Swiper>
    
    </div>
  );
};

