import axios from 'axios'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import { HorizontalScroll } from '../components/HorizontalScroll'
import ImgVid from '../components/ImgVid'
import Spotlight from '../components/Spotlight'
import requests from '../requests'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import ReactPlayer from 'react-player'
// import ReactLoadingSpinner from 'react-loader-spinner'
import { RotatingLines } from  'react-loader-spinner'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { motion } from 'framer-motion'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const containerVariants={
  hidden:{
    opacity:0,
  },
  visible:{
    opacity: 1,
    transition: {
      delay:0.5,
      duration:1
    },
    exit:{
      x:'-100vw',
      transition: {
        ease:'easeInOut'
      }
    }
  }
}

export default function Home() {
  
  let end_day=1667001600000
  let start_day= end_day - 518400000
  let end_date = new Date(end_day).toISOString().slice(0,10)
  let start_date = new Date(start_day).toISOString().slice(0,10)
  const[data,setData]=useState([])
  const[loading,setLoading]=useState(false)
  // const[cover,setCover]=useState(false)
  const finalData=[]

  const loadMore=()=>{
    setLoading(true)
  axios.get(`https://api.nasa.gov/planetary/apod?api_key=BkF78ObzKt8S1leoWwMZMjEUqHi4iyLWek81OjBq&start_date=${start_date}&end_date=${end_date}&thumbs=true`)
  .then(({data})=>{
    setLoading(false)
    const newData=[]
    data.forEach(d=>newData.push(d))
    console.log(data)
    console.log(newData)
    finalData.push(newData)
    // console.log(finalData)
    setData((oldData)=>[...[...oldData],[...newData]])
  })
  end_day -= 604800000
  start_day -= 604800000
  end_date = new Date(end_day).toISOString().slice(0,10)
  start_date = new Date(start_day).toISOString().slice(0,10)
  // end_day-=1
  // console.log('end:', end_day)
  // console.log('start:', start_day)
  console.log(data)
  }

  const handleScroll=(e)=>{
    // console.log('hi')
    if(window.innerHeight + e.target.documentElement.scrollTop + 1 >= e.target.documentElement.scrollHeight){
      loadMore()
    }
  }
  useEffect(()=>{
    loadMore()
    window.addEventListener('scroll',handleScroll)
  },[])
  
  return (
    <div>
      <Head>
        <title>Dao Struct</title>
        <meta name="description" content="FE problem" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='nasa_page_container'>
      
        <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
        className='nasa_page_inner'>
          <Header/>
          <hr/>
          <Spotlight/>
          {/* <div>
            {data?.map((dt,index)=>{
              return(
                <div key={index}>
                  <p>{dt.title}</p>
                  <p>{dt.copyright}</p>
                  <p>{dt.explanation}</p>
                </div>
              )
            })}
          </div> */}
      <div>
       
      <div> 
            {data && data.map((dt,index)=>{
              console.log(dt)              
              return(
                  <Swiper
                  key={index}
                          navigation 
                          pagination={true}
                          scrollbar={
                            true
                          }
                          modules={[Scrollbar,Navigation,Pagination]}
                          slidesPerView={3}
                          className="mySwiper"
                        >
                <div key={index}>
               
                    {
                      dt.map((dt,index)=>{
                       
                        return(
                        <SwiperSlide 
                        className='swiper_slide'
                        key={index}>
                          {
                            dt?.media_type==='image'?
                            (<img
                            onClick={()=>{
                              console.log(cover)
                              setCover(cover)}}
                              src={dt.url}
                              alt={dt.title}
                              className='slider_images'
                              />):(
                              <div
                              className='video'
                              >
                                <ReactPlayer
                              width='30vw'
                              height='26vh'
                              url={dt.url}
                              />
                              </div>
                              )
                          }
                          <div>
                          <p>{dt.title}</p>
                          <p>{dt.date}</p>
                          </div>
                          
                        </SwiperSlide>
                        )
                      })
                    }
            <div 
            
            >
            
            </div>
                  </div>
                  </Swiper>
                )
            })
            }
          </div>
     </div> 
        </motion.div>
      </div>
    </div>
  )
}
