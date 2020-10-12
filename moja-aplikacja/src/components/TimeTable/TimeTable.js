import React from 'react';
import './TimeTable.css';
import {timeTable} from "../../data/time-table";

class TimeTable extends React.Component {

  render() {
    //:TODO this mq has to be changed
    const mq = window.matchMedia('(min-width:930px')
    mq.addEventListener("change", (ev => {
      this.forceUpdate()
    }))

    return (

      <section className={"TimeTableSection"}>
        <div className={"TimeTable"}>
          {
            timeTable.map((day, index) => {
              return (
                <fieldset className={"DayContainer"} key={day.name + index}>
                  <legend key={day.name}>{day.name}</legend>
                  {
                    day.events.map(event => {
                      if(mq.matches) {
                        // Desktop view
                      return (
                        <div key={event.name + event.time} className={"EventContainer"}>
                          <div>
                            <span className={"EventInformation"}>{event.time}</span>
                            <span>{event.name}</span>
                          </div>
                          {event.teacher}
                        </div>
                      )} else {
                        // Mobile view
                        return (
                          <div key={event.name + event.time} className={"SmallEventContainer"}>
                            <span className={"EventInformationSmall"}>{event.time}</span>
                            <span>* * *</span>
                            <span className={"EventInformationSmall"}>{event.name}</span>
                            <span>* * *</span>
                            <span className={"EventInformationSmall"}>{event.teacher}</span>
                          </div>
                        )

                      }
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
