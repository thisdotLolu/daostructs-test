import Image from 'next/image';
import React from 'react'

const Latest = ({title, description, thumbnail,author}) => {
  return (
    <div className='latest_container'>
        <div className='latest_left'>
            <h1>{title}</h1>
            <h2>{description}</h2>
            <p>{author}</p>
        </div>
        <div className='latest_right'>
            <img 
            src={thumbnail}
            alt={title}
            />
        </div>
    </div>
  )
}

export default Latest;