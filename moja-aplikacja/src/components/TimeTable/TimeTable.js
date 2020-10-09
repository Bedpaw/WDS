import React from 'react';
import './TimeTable.css';
import {timeTable} from "../../data/time-table";

class TimeTable extends React.Component {

  render() {
    return (
      <section className={"TimeTableSection"}>
        <div className={"TimeTable"}>
          {
            timeTable.map(day => {
              return (
                <fieldset className={"DayContainer"}>
                  <legend key={day.name}>{day.name}</legend>
                  {
                    day.events.map(event => {
                      return (
                        <div key={event.name + event.time} className={"EventContainer"}>
                          <div>
                            <span className={"EventInformation"}>{event.time}</span>
                            <span>{event.name}</span>
                          </div>
                            {event.teacher}
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
