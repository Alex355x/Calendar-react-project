import React, { useState, useEffect } from 'react';
import './datesection.scss';
import moment from 'moment';

const RedLine = () => {

  const [minutesNow, setMinutesNow] = useState(moment(new Date()).format('m'));

  const style = {top: `${minutesNow}px`};
  
  useEffect(() => {
    setInterval(() => setMinutesNow(moment(new Date()).format('m')), 60000);
  });

  return (
    <>
    <div className='redBall' style={style}></div>
    <div className='redLine' style={style}></div>
    </>
  )
}

export default RedLine;