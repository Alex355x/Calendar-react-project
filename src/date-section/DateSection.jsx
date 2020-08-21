import React from 'react';
import './datesection.scss';
import TimeTable from './TimeTable';
import moment from 'moment';

const DateSection = ({daysMapped}) => {

    // const currentDate = moment(new Date()).week('isoWeek');
    // console.log(currentDate);

    // let weekStart = currentDate.clone().startOf('isoWeek');
    // let days = [];
    // for (let i = 0; i <= 6; i++) {
    //     days.push(moment(weekStart).add(i, 'days').format("YYYY-MM-DD-ddd"));
    // }
        
    // const daysMapped = days.map(day => {
    //   return (
    //     <div className='day'>
    //       <span className='day-of-week'>{day.split('-')[3].toLocaleUpperCase()}</span>
    //       <span className='day-number'>{day.split('-')[2]}</span>
    //       <div className="day-border"></div>
    //     </div>
    // )});

  return (
    <>
      <section  className='date-container scroll'>
        <div className='day timezone'>
        GMT+03
        </div>
        {daysMapped}
      </section>
      <TimeTable />
    </>
  )
}

export default DateSection;