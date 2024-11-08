import React from 'react';
import '../header/Header.css';
import { IoMdTrain } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";

function Header() {
  return (
    <header className="header">
      <h1>TrainTrac</h1>
      <nav>
        <ul>
          <li><a href="#"><IoMdTrain className='logo' size={18}/>Track</a></li>
          <li><a href="#"><IoIosSearch className='logo' size={18}/>PR Status</a></li>
          <li><button>Search</button></li>
          <li><button>Notifications</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
