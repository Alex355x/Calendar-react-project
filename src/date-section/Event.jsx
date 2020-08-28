import React from 'react';
import './Event.scss';



const Event = ({timeStart, timeFinish, title, onDelete}) => {
  let minutes = timeStart.slice(3);
  
  const style1 = {top: '2px'};
  const style2 = {top: '10px', marginLeft: '10px', background: 'rgb(76, 176, 263)'};
  const style3 = {top: '20px', marginLeft: '20px', background: 'rgb(76, 186, 283)'};
  const style4 = {top: '30px', marginLeft: '30px', background: 'rgb(76, 196, 298)'};

  // const [show, setShowEvent] = useState('none');
  // const handleClick = () => {
    
  // }


  return (
    
    <div
      // onclick = {handleClick} 
      className='event' 
        style={minutes <= '15' 
        ? style1 : minutes < '30' 
        ? style2 : minutes < '45' 
        ? style3 : style4}
    >
      <div className='title'>{title}</div>
      {`${timeStart} - ${timeFinish}`}
      <button
       className='button-event-delete'
       onClick={() => onDelete('id')}>
        {/* <span className='delete-btn'>+</span>  */}
      </button>

    </div>
   
     
  )
}
export default Event;


