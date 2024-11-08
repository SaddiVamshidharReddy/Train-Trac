import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className="left">
            <h3 className="title">TrainTrac</h3>
            <p className='tagline'>Your favourite train booking experience.</p>
        </div>
        <div className="right">
            <ul className='footerList'>
                <li>Track Train</li>
                <li>PR Status</li>
                <li>Notifications</li>
                <li>How to Guide</li>
                <li>Contact Us</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer