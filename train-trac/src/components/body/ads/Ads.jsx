import React from 'react'
import './Ads.css';

function Ads({bgImage, text1, text2}) {
  return (
    <div className='ad' style={{backgroundImage: `url(${bgImage})`}}>
        <h5>{text1}</h5>
        <span>{text2}</span>
    </div>
  )
}

export default Ads