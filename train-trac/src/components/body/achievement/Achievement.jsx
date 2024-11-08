import React from 'react'
import './Achievement.css'

function Achievement({icon, text1, text2}) {
  return (
    <div className='flex'>
        <span className='icons'>{icon}</span>
        <h3 className='he'>{text1}</h3>
        <p className='para'>{text2}</p>
    </div>
  )
}

export default Achievement