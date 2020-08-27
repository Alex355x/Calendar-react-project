import React from 'react';
import Event from './Event';

// const tasks = [
//   {
//     id: '1',
//     title: 'hello',
//     description: '111',
//     timeStart: '9-00',
//     timeFinish: '12-00',
//     date: '2020-08-24',
//     id2: '2020-08-24-Mon-1:00'
//   },
//    {
//     id: '2',
//     title: 'hello2',
//     description: '112',
//     timeStart: '10-00',
//     timeFinish: '13-00',
//     date: '2020-08-25',
//     id2: '2020-08-25-Tue-0:00'
//   }
// ]

// date: "2020-08-26"
// description: ""
// timeFinish: "03:00"
// timeStart: "02:00"
// title: "пока"


const TimeTable = ({week, tasks}) => {
  
    
  let days = [];
  for (let i = 0; i <24; i++) {

    let hour = `${i > 0 && i < 24 ? `${i}:00` : ''}`;
    let hour2 = `${i >= 0 && i < 10 ? `0${i}` : `${i}`}`;
    let title0=tasks.find(el => el.date === (week[0].slice(0, -4)) && el.timeStart.slice(0, -3) === hour2);   
    console.log(title0);

    days.push(
    <>
      <div className='time-container-1' value={i+'-'+week[0].split('-')[0]}>
      <div className='time-1' >
      {hour}
      </div>
      <div className='time-2'></div>
      </div>
      <div className='time-container' >
        {title0 
        ?  <Event title={title0.title} timeStart={title0.timeStart} timeFinish={title0.timeFinish}/> 
        : null}
      </div>
      <div className='time-container'>
     
      </div>
      <div className='time-container'>
      
      </div>
      <div className='time-container'>
      
      </div>
      <div className='time-container'>
      
      </div>
      <div className='time-container'>
      
      </div>
      <div className='time-container' >
      
      </div>
    </>)
  }
     
  
  return (
    <main className='date-container wrapper-scroll' >
        {days}
    </main>
    
  )
}

export default TimeTable;