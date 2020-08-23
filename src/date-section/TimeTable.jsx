import React from 'react';

const TimeTable = ({week}) => {
  
  let result = [];
  for (let i = 0; i <24; i++) {
    result.push(
    <>
      <div className='time-container-1' value={i+'-'+week[0].split('-')[0]}>
      <div className='time-1'>
      {`${i > 0 && i < 24 ? `${i}:00` : ''}`}
      </div>
      <div className='time-2'></div>
      </div>
      <div className='time-container' value={`${week[0]}-${i >= 0 && i < 24 ? `${i}:00` : ''}`}></div>
      <div className='time-container' value={`${week[1]}-${i >= 0 && i < 24 ? `${i}:00` : ''}`}></div>
      <div className='time-container' value={`${week[2]}-${i >= 0 && i < 24 ? `${i}:00` : ''}`}></div>
      <div className='time-container' value={`${week[3]}-${i >= 0 && i < 24 ? `${i}:00` : ''}`}></div>
      <div className='time-container' value={`${week[4]}-${i >= 0 && i < 24 ? `${i}:00` : ''}`}></div>
      <div className='time-container' value={`${week[5]}-${i >= 0 && i < 24 ? `${i}:00` : ''}`}></div>
      <div className='time-container' value={`${week[6]}-${i >= 0 && i < 24 ? `${i}:00` : ''}`}></div>
    </>)
  }
  return (
    <main className='date-container wrapper-scroll'>
        {result}
    </main>
    
  )
}

export default TimeTable;