import React, { useState, useEffect } from 'react';
import './datesection.scss';
import moment from 'moment';

const Redline = () => {

  const [minutesNow, setMinutesNow] = useState(moment(new Date()).format('m'));

  const style1 = {top: `${minutesNow}px`};
  
  useEffect(() => {
    setInterval(() => setMinutesNow(moment(new Date()).format('m')), 60000);
  });

  return (
    <>
    <div className='redBall' style={style1}></div>
    <div className='redLine' style={style1}></div>
    </>
    
  )
}

export default Redline;