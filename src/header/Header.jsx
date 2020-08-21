import React, { useState } from 'react';
import "./header.scss";
import DateSection from "../date-section/DateSection";
import moment from "moment";


const Header = () => {

  const dateNow = new Date();
  const currentDate = moment(dateNow).week('isoWeek');
  const [weekStart, setWeekStart] = useState(currentDate.clone().startOf('isoWeek'));
  const [days, setDays] = useState([]);
  
  for (let i = 0; i <= 6; i++) {
        days.push(moment(weekStart).add(i, 'days').format("YYYY-MM-DD-ddd"));
    }
        
  const daysMapped = () => {
    return days.map(day => {
      return (
        <div className='day'>
          <span className='day-of-week'>{day.split('-')[3].toLocaleUpperCase()}</span>
          <span className='day-number'>{day.split('-')[2]}</span>
          <div className="day-border"></div>
        </div>
      )});
  }
    
  const nextWeek = () =>{
    setWeekStart(weekStart.add(7, "days"))
    setDays([]);
    daysMapped();
  }

  const prevWeek = () =>{
    setWeekStart(weekStart.subtract(7, "days"))
    setDays([]);
    daysMapped();
  }

  return (
    <>
    <header className='header'>
      <div className='header-btn'>
        <button className='header-btn-create'>
        <svg
            className="header-btn__img"
            width="36"
            height="36"
            viewBox="0 0 36 36"
          >
            <path fill="#34A853" d="M16 16v14h4V20z"></path>
            <path fill="#4285F4" d="M30 16H20l-4 4h14z"></path>
            <path fill="#FBBC05" d="M6 16v4h10l4-4z"></path>
            <path fill="#EA4335" d="M20 16V6h-4v14z"></path>
            <path fill="none" d="M0 0h36v36H0z"></path>
          </svg>
        Create
        </button>
        <button className='header-btn-today'>Today</button>
      </div>
      <div className='header-nav'>
            <button
             className="header-nav-btn"
             onClick={prevWeek}
             >
               <i className="fas fa-angle-left"></i>
            </button>
            <button
            className="header-nav-btn"
            onClick={nextWeek}
            >
               <i className="fas fa-angle-right"></i>
            </button>
      </div>
      <div className='header-date-container'>
        <div className='header-date'>
          Aug
        </div>
        <div className='header-date'>
          2020
        </div>
      </div>
    </header>
    <DateSection daysMapped={daysMapped()}/>
    </>
  )
}

export default Header;