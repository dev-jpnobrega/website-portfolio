import React, { useState } from 'react';

import ImageLoader from '../ImageLoader';

function Card({ title, description, link, imgSrc, width, heigth }) {
  const [ isLoading, setLoad ] = useState(true)

  function onLoadImage(event) {
    setLoad(false);
  }

  return (
    <div className={isLoading ? 'loader' : ''}>   
      <span></span>   
      <span></span>
      <a target='_blank' href={link} style={isLoading ? { visibility: 'hidden' } : {}}>        
        <ImageLoader 
          width={500}
          heigth={500}
          onLoad={onLoadImage}
          onError={(event) => console.error('Err load image', imgSrc)}
          src={imgSrc}
          alt="" 
        />
        <h3>{title}</h3>
      </a>
    </div>
  )
}

export default Card;