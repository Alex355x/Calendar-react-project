import React from "react";
import './Popupwindow.scss';


const Popup = ({ popup }) => {
  return (
    <section className="popup">
      <form className="popup-form">
        <div className="name-events">
          <button className="name-events_btn" onClick={popup}>
            <i className="fas fa-times-circle"></i>
          </button>
          <input
            type="text"
            onChange=""
            value="Breakfast width friends"
            className="name-events_input"
          />
        </div>
        <div className="date-events">
          <span className="date-events_img">
            <i className="far fa-clock"></i>
          </span>
          <input
            className="date-events_input"
            name="date"
            list="dates"
            value="1 февраля 2020"
          />
          <datalist id="dates" className="date-events_list">
            <option className="date-events_list__elem" value="1 февраля 2020" />
            <option className="date-events_list__elem" value="2 февраля 2020" />
            <option className="date-events_list__elem" value="4 февраля 2020" />
            <option className="date-events_list__elem" value="5 февраля 2020" />
            <option className="date-events_list__elem" value="Frattamaggiore" />
          </datalist>
          <input
            className="date-events_input time-input"
            name="Time"
            list="prevTime"
            value="15: 30"
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
            name="Time"
            list="nextTime"
            value="16: 30"
          />
          <datalist id="nextTime" className="date-events_list">
            <option className="date-events_list__elem" value="16 : 30" />
            <option className="date-events_list__elem" value="17 : 30" />
            <option className="date-events_list__elem" value="18 : 30" />
            <option className="date-events_list__elem" value="19 : 30" />
            <option className="date-events_list__elem" value="20 : 30" />
            <option className="date-events_list__elem" value="Frattamaggiore" />
          </datalist>
        </div>
        <div className="description">
          <span className="description_img">
            <i className="fas fa-bars"></i>
          </span>
          <div className="description_textarea">
            <textarea
              name="comment"
              placeholder="Добавьте описание"
              required
              form="text"
              className="description_textarea__input"
              placeholder="Добавьте описание"
            ></textarea>
          </div>
        </div>
        <div className="btn-container">
          <button className="btn-container_form" type="submit">
            Сохранить
          </button>
        </div>
      </form>
    </section>
  );
};
export default Popup;