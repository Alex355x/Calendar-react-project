import React from 'react';
import Event from './Event';
import RedLined from './RedLined';
import moment from 'moment';
import PropTypes from 'prop-types';
import TimeColumn from './TimeColumn';



const TimeTable = ({week, tasks, onDelete}) => {
  
  const timeNow = moment(new Date()).format('YYYY-MM-DD-ddd-HH');
      
  let hours = [];
  for (let i = 0; i <24; i++) {
    hours.push(i < 10?`0${i}:00`:`${i}:00`);
  }
      
  const renderTasks = () => { 
    return hours.map((el) => {
    const daysOfWeek = week.map(dayOfWeek => {
          const filtredTasks = tasks.filter(task => task.date === (dayOfWeek.slice(0, -4)) && task.timeStart.slice(0, -3) === el.slice(0, -3));
          
          let dayContainerNow = (`${dayOfWeek}-${el}`).slice(0, -3);
          return (
          <div key={dayOfWeek.toString()} className='time-container' value={`${dayOfWeek}-${el}`}>
              {filtredTasks && filtredTasks.map(task => <Event key={task.id} title={task.title} timeStart={task.timeStart} timeFinish={task.timeFinish} onDelete={onDelete} id={task.id}/>)}
              
              {dayContainerNow === timeNow && <RedLined />}
          </div>)
      })
    return (   
        <React.Fragment key={el}>
          {<TimeColumn el={el} week={week}/>}
          {daysOfWeek}
        </React.Fragment>
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

TimeTable.propTypes = {
  week: PropTypes.array.isRequired,
  tasks: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default TimeTable;