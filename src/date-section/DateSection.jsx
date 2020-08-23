import React from 'react';
import './datesection.scss';
import TimeTable from './TimeTable';
import moment from 'moment';

const DateSection = ({result, date}) => {
  const week = date;
  return (
    <>
      <section  className='date-container scroll'>
        <div className='day timezone'>
        GMT+03
        </div>
        {result}
      </section>
      <TimeTable week={week}/>
    </>
  )
}

export default DateSection;