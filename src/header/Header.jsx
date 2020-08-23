import React, { useState } from 'react';
import "./header.scss";
import DateSection from "../date-section/DateSection";
import moment from "moment";
import PopupWindow from '../popup-window/PopupWindow';


const Header = () => {

  const dateNow = new Date();
  const currentDate = moment(dateNow).startOf('isoWeek').week('isoWeek');
  console.log(currentDate);
  // const currentDateUse = currentDate.clone().startOf('isoWeek');
  
  const [weekStart, setWeekStart] = useState(currentDate);
  const [days, setWeekDays] = useState([]);
    
  const nameMonthfirstDayofWeek = moment(weekStart).format('MMM');
  const nameMonthLastDayofWeek = moment(weekStart).endOf('isoWeek').format('MMM')
   
  for (let i = 0; i <= 6; i++) {
    if (!days.includes(moment(weekStart).add(i, 'days').format("YYYY-MM-DD-ddd"))) {
      days.push(moment(weekStart).add(i, 'days').format("YYYY-MM-DD-ddd"));
    } 
  }
  
  let result = days.map(day => 
    <div className='day'>
      <span className='day-of-week'>{day.split('-')[3].toUpperCase()}</span>
      <span className='day-number'>{day.split('-')[2]}</span>
      <div className="day-border"></div>
    </div>
  );
  
  const nextWeek = () =>{
    setWeekStart(weekStart.add(7, "days"))
    setWeekDays([]);
  }

  const prevWeek = () =>{
    setWeekStart(weekStart.subtract(7, "days"))
    setWeekDays([]);
  }

  const showCurrentWeek = () => {
    setWeekStart(currentDate);
    setWeekDays([]);
  };

  const [show, setShowPopUP] = useState(false);
  
  const showPopUp = () => {
    setShowPopUP(true);
  }

  return (
    <>
    <header className='header'>
      <div className='header-btn'>
        <button
        className='header-btn-create'
        onClick={showPopUp}
        >
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
        <button 
        className='header-btn-today'
        onClick={showCurrentWeek}
        >
        Today
        </button>
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
          {nameMonthfirstDayofWeek === nameMonthLastDayofWeek
          ? nameMonthfirstDayofWeek
          : `${nameMonthfirstDayofWeek} - ${nameMonthLastDayofWeek}`}
        </div>
        <div className='header-date'>
          {moment(weekStart).format('YYYY')}
        </div>
      </div>
    </header>
    <DateSection result={result} date={days}/>
    <PopupWindow show={show}/>
    </>
  )
}

export default Header;