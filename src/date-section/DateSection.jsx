import React from 'react';
import './datesection.scss';
import TimeTable from './TimeTable';
import moment from 'moment';

const DateSection = ({daysMapped}) => {

  

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