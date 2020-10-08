import React from 'react';
import './PriceList.css';
import {passes} from "../../data/price-list";


class PriceList extends React.Component {

  render() {
    return (

      <section>
        <h2>Dostępne zajęcia</h2>
        <h4>Pojedyncze wejścia</h4>
        <p className={"SingleLesson"}> Wokal indywidualny u Marty Smuk – 100zł</p>
        <p className={"SingleLesson"}>Jednorazowe wejście na każde z pozostałych zajęć - 45zł </p>

        <h4>Karnety</h4>
        <table>
          <thead>
            <tr>
              <th>Zajęcia</th>
              <th>Ilość wejść miesięcznie</th>
              <th>Cena</th>
            </tr>
          </thead>
          <tbody>
          {passes.map(pass => {
              return (
              <tr key={pass.name}>
                <td>
                  <div className={"NamesColumn"}>
                    <span>{pass.name}</span>
                    <span className={"AlertSmall"}>{pass.alerts}</span>
                  </div>
                  </td>

                <td>
                    <div className={"QuantityColumn"}>{
                      pass.entries.map(entry => {
                        return (
                          <span key={pass.name + entry.quantity}>{entry.quantity}</span>
                        )
                      })
                    }
                    </div>
                </td>


                <td>
                  <div className={"PriceColumn"}>
                  {
                    pass.entries.map(entry => {
                      return (
                        <span key={pass.name + entry.price}>{entry.price}</span>
                      )
                    })
                  }
                  </div>
                </td>



              </tr>

              )})
          }
          </tbody>
        </table>
      </section>
    )

  }
}

export default PriceList;
