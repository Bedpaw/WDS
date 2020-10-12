import React from 'react';
import './PriceList.css';
import {discounts, passes} from "../../data/price-list";


class PriceList extends React.Component {

  render() {
    return (

      <section className={"PriceListSection"}>
        <h2>Dostępne zajęcia</h2>
        <h4>Pojedyncze wejścia</h4>
        <p className={"SingleLesson"}> Wokal indywidualny u Marty Smuk - 100zł - kontakt telefoniczny (531 373 343)</p>
        <p className={"SingleLesson"}>Jednorazowe wejście na każde z pozostałych zajęć - 45zł </p>

        <h4>Karnety</h4>
        <table className={"PriceListTable"}>
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

            )
          })
          }
          </tbody>
        </table>

        <h4>Rabaty</h4>
        <div>
          <div className={"Column"}>
            {
              discounts.map((discount, index) => {
                return (
                  <span className={"DiscountBox"} key={index}>{discount}</span>
                )
              })
            }
          </div>
        </div>
        <p className={"AlertSmall"}>
          Rabaty łączą się.
        </p>

        <h4>Pozosotałe informacje</h4>
        <div className={"Coulmn, FlexStart"}>
          <p>
            W indywidualnych przypadkach braku możliwości wykorzystania karnetu w danym miesiącu przewiduje się wykorzystanie wejść w ciągu kolejnych 2 tygodni.
          </p>
          <p>
            Karnety i wejściówki kupić można w godzinach 16.00 - 21.30 pon- pt bezpośrednio w Warsztacie.
          </p>
          <p>
            Płatność na razie wyłącznie gotówką - inne formy płatności wkrótce!
          </p>
        </div>


      </section>
    )

  }
}

export default PriceList;
