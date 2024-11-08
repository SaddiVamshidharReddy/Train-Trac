import React from 'react';
import '../body/Body.css';
import Ads from './ads/Ads.jsx';
import Achievement from './achievement/Achievement.jsx';
import img1 from '../../assets/img-1.jpg';
import img2 from '../../assets/img-2.jpg';
import img3 from '../../assets/img-3.jpg';
import img4 from '../../assets/img-4.jpg';
import { FaBell } from "react-icons/fa";
import { IoMdCard } from "react-icons/io";
import { GiAchievement } from "react-icons/gi";

function Body() {
    return (
        <div className='body'>
            <div className="container">
                <h1>Real-time train tracking available now</h1>
                <div className="outer">
                    <div className="content-first">
                        <span>Enter Train Number</span>
                        <h5>Train Location</h5>
                    </div>
                    <div className="content">
                        <span>Get exact</span>
                        <h5>PR Status Search</h5>
                    </div>
                    <div className="content">
                        <span>Check PR Status</span>
                        <h5>Recieve Notifications</h5>
                    </div>
                    <div className="content">
                        <span>Stay updated</span>
                        <h5>Selected Trains</h5>
                    </div>
                    <div className="content-logo">
                        <FaBell className='bell' size={30} />
                    </div>
                </div>
            </div>
            <div className="container2">
                <h3 className='head3'>Sleek Routes Tracker</h3>
                <div className="grid">
                    <Ads className='hello' bgImage={img1} text1="Route Tracking" text2="Get Route Updates" />
                    <Ads className='hello' bgImage={img2} text1="Live Updates" text2="Stay Informed" />
                    <Ads className='hello' bgImage={img3} text1="Train Alerts" text2="Recieve Alerts" />
                    <Ads className='hello' bgImage={img4} text1="Train Status Updates" text2="Check Train Status" />
                </div>
                <div className="grid2">
                    <Achievement className='rank' icon={<GiAchievement size={60} style={{color:'white'}}/>} text1="Real-time Train Status" text2="Get latest train updates, if you find any discrepancies, contact us!"/>
                    <Achievement className='rank' icon={<IoMdCard size={60} style={{color:'white'}}/>} text1="Track Train Refunds" text2="Stay informed with TrainTrac"/>
                    <Achievement className='rank' icon={<FaBell size={60} style={{color:'white'}}/>} text1="Train Delay Information" text2="Read about train delays due to unforeseen circumstances."/>
                </div>
            </div>
        </div>
    );
}

export default Body;