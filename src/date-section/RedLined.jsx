import React, { useState, useEffect } from 'react';
import './datesection.scss';
import moment from 'moment';
import PropTypes from 'prop-types';

const RedLined = ({funcRender}) => {
  
  const [minutesNow, setMinutesNow] = useState(moment(new Date()).format('m'));
  const style = {top: `${minutesNow * 1.2}px`};
  
  useEffect(() => {
    setInterval(() => setMinutesNow(moment(new Date()).format('m')), 60000);
    setInterval(()=> funcRender(), 3600000);
    clearInterval();
  });
   
  return (
    <>
    <div className='redBall' style={style}></div>
    <div className='redLine' style={style}></div>
    </>
  )
}

RedLined.propTypes = {
  funcRender: PropTypes.func.isRequired,
}

export default RedLined;