import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';

const style = {
  loadingImage: {
    opacity: 0,
		width: '100%',
		height: 'auto',
  },
  loadedImage: {
    animation: 'fadeInImg cubic-bezier(0.23, 1, 0.32, 1) 1',
    position: 'relative',
    opacity: 0,
    'animation-fill-mode': 'forwards',
    'animation-duration': '1s',
    'animation-delay': '0.5s'
  },
}

function ImageLoader({ src, alt, onLoad, onError, width, heigth, classes }) {
  const [ isLoading, setLoad ] = useState(true);

  function onLoadImage(event) {
    setLoad(false);
    onLoad(event);
  }

  return (
    <div className={isLoading ? classes.loadingImage : classes.loadedImage}> 
      <img      
        onLoad={onLoadImage}
        onError={onError}
        alt={alt}
        src={src} 
        width={width} 
        heigth={heigth}
      />
    </div>
  )
};

export default withStyles(style)(ImageLoader);


