import React, { Component } from "react";
import './Popupwindow.scss';


class Popup extends Component {
  constructor() {
    super();
    this.state = {
        title: '',
        description: '',
        timeStart: '',
        timeFinish: '',
        date: ''
    };
    this.handleChange = this.handleChange.bind(this);
}
  
handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
}
 
  
render() {
  const { show, onClose, createTask } = this.props;
  if (!show) { return null };

  return (
    <section className="popup" >
      <form 
      onSubmit={(e) => createTask(this.state, e)}
      className="popup-form" >
        <div className="name-events">
          <button 
          onClick={onClose}
          className="name-events_btn" >
            <i className="fas fa-times"></i>
          </button>
          
          <input
            autoComplete="off"
            value={this.state.value}
            onChange={this.handleChange}
            type='text' name='title'
            required minLength="3" maxLength="18"
            placeholder='Add name of event'
            className="name-events_input"
          />
        </div>
        
        <div className="date-events">
          <span className="date-events_img">
            <i className="far fa-clock"></i>
          </span>
          <input
            className="date-events_input"
            onChange={this.handleChange}
            required
            value={this.state.value}
            type="date" id="date" name='date'
          />
          
          <input
            className="date-events_input time-input"
            onChange={this.handleChange}
            required
            value={this.state.value}
            type="time" id="timeStart" name='timeStart'
          />
          <datalist id="prevTime" className="date-events_list">
            <option className="date-events_list__elem" value="11 : 30" />
            <option className="date-events_list__elem" value="12 : 30" />
            <option className="date-events_list__elem" value="13 : 30" />
            <option className="date-events_list__elem" value="14 : 30" />
            <option className="date-events_list__elem" value="15 : 30" />
          </datalist>
          -
          <input
            className="date-events_input time-input"
            onChange={this.handleChange}
            required
            value={this.state.value}
            type="time" id="timeFinish" name='timeFinish'
          />
        </div>
        <div className="description">
          <span className="description_img">
            <i className="fas fa-bars"></i>
          </span>
          <span className="description_textarea">
            <textarea
              name='description'
              maxLength="140" rows="5"
              placeholder="description"
              onChange={this.handleChange}
              description={this.state.description}
            ></textarea>
          </span>
        </div>
        <div className="btn-container">
          <button className="btn-container_form" type="submit">
            Save
          </button>
        </div>
      </form>
    </section>
  );
};
}

export default Popup;