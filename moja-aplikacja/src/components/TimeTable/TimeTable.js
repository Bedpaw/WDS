import React from 'react';
import './TimeTable.css';
import {timeTable} from "../../data/time-table";

class TimeTable extends React.Component {

  render() {
    return (
      <section>
        <div className={"TimeTable"}>
          {
            timeTable.map(day => {
              return (
                <fieldset class={"DayContainer"}>
                  <legend key={day.name}>{day.name}</legend>
                  {
                    day.events.map(event => {
                      return (
                        <div key={event.name + event.time} className={"EventContainer"}>
                          <span className={"EventInformation"}>{event.time}</span>
                          <span>{event.name}</span>
                          <span className={"TeacherName"}>{event.teacher}</span>
                        </div>
                      )
                    })
                  }
                </fieldset>
                  )
            })
          }
        </div>
      </section>
    )
  }
}

export default TimeTable;
