import React from 'react';
import './datesection.scss';
import TimeTable from './TimeTable';
//import moment from 'moment';

const DateSection = ({result, week, tasks}) => {
  //const week = date;
  //console.log(week)
  return (
    <>
      <section  className='date-container scroll'>
        <div className='day timezone'>
        GMT+03
        </div>
        {result}
      </section>
      <TimeTable week={week} tasks={tasks}/>
      
    </>
  )
}

export default DateSection;