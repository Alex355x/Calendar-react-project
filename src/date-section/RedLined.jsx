import React, { useState, useEffect } from 'react';
import './datesection.scss';
import moment from 'moment';


const RedLined = () => {
  
  const [minutesNow, setMinutesNow] = useState(moment(new Date()).format('m'));
  const style = {top: `${minutesNow * 1.2}px`};
  
  useEffect(() => {
    const interval = setInterval(() => setMinutesNow((minutesNow)=> minutesNow + 1), 60000);
    
    clearInterval(interval);
  });

  console.log('render')
   
  return (
    <>
    <div className='redBall' style={style}></div>
    <div className='redLine' style={style}></div>
    </>
  )
}


export default RedLined;