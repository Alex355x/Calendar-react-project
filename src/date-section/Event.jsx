import React, { useState } from 'react';
import './Event.scss';
import PropTypes from 'prop-types';

const Event = ({timeStart, timeFinish, title, onDelete, id}) => {
  let minutes = timeStart.slice(3);
  
  const style1 = {top: '2px'};
  const style2 = {top: '10px', marginLeft: '10px', background: 'rgb(76, 156, 263)'};
  const style3 = {top: '20px', marginLeft: '20px', background: 'rgb(76, 176, 283)'};
  const style4 = {top: '30px', marginLeft: '30px', background: 'rgb(76, 196, 298)'};

  const [showDeleteButton, setShowDelete] = useState(false);

  const func = (event) => {
    event.preventDefault();
    if (event.button === 2) {
        setShowDelete(!showDeleteButton)
    }
    return;
  }

  return (
    <>
    <div key={Math.random()}
      onContextMenu={func} 
      className='event' 
        style={minutes <= '15' 
        ? style1 : minutes < '30' 
        ? style2 : minutes < '45' 
        ? style3 : style4}
    >
      <div className='title'>{title}</div>
      {`${timeStart} - ${timeFinish}`}
    </div>
    {showDeleteButton ? 
      <button
       className='button-event-delete'
       onClick={() => onDelete(id)}>
       <i class="fas fa-trash-alt"></i>
        <div className='delete-btn-content'>
          Delete
        </div> 
      </button> : null
      }
   </>
  )
}

Event.propTypes = {
  timeStart: PropTypes.string,
  timeFinish: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
}

export default Event;


