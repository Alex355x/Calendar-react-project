import React from 'react';

const TimeTable = () => {
  let result = [];
  for (let i = 0; i <24; i++) {
    result.push(
    <>
      <div className='time-container-1'>
      <div className='time-1'>
      {`${i > 0 && i < 24 ? `${i}:00` : ''}`}
      </div>
      <div className='time-2'></div>
      </div>
      <div className='time-container'></div>
      <div className='time-container'></div>
      <div className='time-container'></div>
      <div className='time-container'></div>
      <div className='time-container'></div>
      <div className='time-container'></div>
      <div className='time-container'></div>
    </>)
  }
  return (
    <main className='date-container wrapper-scroll'>
        {result}
    </main>
    
  )
}

export default TimeTable;