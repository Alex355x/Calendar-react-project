import React from 'react';
import './datesection.scss';
import TimeTable from './TimeTable';
import PropTypes from 'prop-types';
import moment from 'moment';

const DateSection = ({result, week, tasks, onDelete }) => {
  
  return (
    <>
      <section  className='date-container scroll'>
        <div className='day timezone'>
        {moment().format("Z")}
        </div>
        {result}
      </section>
      <TimeTable  week={week} tasks={tasks} onDelete={onDelete}/>
    </>
  )
}

DateSection.propTypes = {
  result: PropTypes.array.isRequired,
  week: PropTypes.array.isRequired,
  tasks: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default DateSection;

