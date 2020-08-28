import React from 'react';
import Event from './Event';



const TimeTable = ({week, tasks, onDelete}) => {
  let hours = [];
  for (let i = 0; i <24; i++) {
    hours.push( i < 10?`0${i}:00`:`${i}:00`);
  }
  // console.log('111 '+tasks)
  
  const renderTasks = (week, hours) => { 
    return hours.map((el) => {
    const daysOfWeek = week.map(dayOfWeek => {
          const filtredTasks = tasks.filter(task => task.date === (dayOfWeek.slice(0, -4)) && task.timeStart.slice(0, -3) === el.slice(0, -3));
          return (<div className='time-container' value={dayOfWeek}>
              {filtredTasks && filtredTasks.map(task => <Event title={task.title} timeStart={task.timeStart} timeFinish={task.timeFinish} onDelete={onDelete}/>)}
          </div>)
      })
    return (   
        <>
        <div className='time-container-1' value={el+'-'+week[0].split('-')[0]}>
            <div className='time-1' >{el === "00:00"? null:el}</div>
            <div className='time-2'></div>
        </div>
          {daysOfWeek}
        </>
    )
    }
)}
 
  const result = renderTasks(week, hours);
  return (
    <main className='date-container wrapper-scroll' >
        {result}
    </main>
  )
}

export default TimeTable;