import React from 'react';
import './datesection.scss';
import PropTypes from 'prop-types';

const TimeColumn = ({el, week}) => {
   
  return (
    <div   className='time-container-1' value={el+'-'+week[0].split('-')[0]}>
      <div  className='time-1' >{el === "00:00"? null:el}</div>
      <div  className='time-2'></div>
    </div>
  )
}

TimeColumn.propTypes = {
  week: PropTypes.array.isRequired,
  el: PropTypes.string,
}

export default TimeColumn;