import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/Header'
import { HorizontalScroll } from '../components/HorizontalScroll'
import ImgVid from '../components/ImgVid'
import Spotlight from '../components/Spotlight'



export default function Home() {
  
  return (
    <div>
      <Head>
        <title>Dao Struct</title>
        <meta name="description" content="FE problem" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='nasa_page_container'>
        <div className='nasa_page_inner'>
          <Header/>
          <hr/>
          <Spotlight/>
          <HorizontalScroll/>
        </div>
      </div>
    </div>
  )
}

// export {getStaticProps}
