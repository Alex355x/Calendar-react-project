import React from 'react';
import './Event.scss';


const Event = ({title, timeStart, timeFinish}) => {
  let minutes = timeStart.slice(3);
  const style1 = {top: '2px'};
  const style2 = {top: '10px', left: '10px', background: 'rgb(76, 176, 263)'};
  const style3 = {top: '20px', left: '20px', background: 'rgb(76, 176, 283)'};
  const style4 = {top: '30px', left: '30px', background: 'rgb(76, 176, 298)'};
     
  return (
    <div className='event' 
    style={minutes <= '15' ? style1 : minutes < '30' ? style2 : minutes < '45' ? style3 : style4}
    >
      <div className='title'>{title}</div>
      {`${timeStart} - ${timeFinish}`}
    </div>
  )
}

export default Event;


