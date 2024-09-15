import React, { useEffect, useState } from "react";
// import { holdings } from "../data/data";
import axios from "axios";

export default function Holdings() {
  let [allHolding, setAllHolding] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/addHoldings").then((res) => {
      setAllHolding(res.data);
    });
  }, []);

  return (
    <>
      <h3 className="title"> Holdings ({allHolding.length})</h3>
      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.cost</th>
            <th>LTP</th>
            <th>Cur.val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
          {allHolding.map((stock, index) => {
            const currvalue = stock.price * stock.qty;
            const isProfit = currvalue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayclass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index} className="ited">
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{currvalue.toFixed(2)}</td>
                <td className={profClass}>
                  {" "}
                  {(currvalue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={profClass}>{stock.net}</td>
                <td className={profClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>

        <div className="row">
          <div className="col">
            <h5>
              29,875.<span>55</span>{" "}
            </h5>
            <p> Total Investment</p>
          </div>
          <div className="col">
            <h5>
              31,428.<span>95</span>{" "}
            </h5>
            <p>Current Value</p>
          </div>
          <div className="col">
            <h5>1,553.40(+5.20%)</h5>
            <p>P&L</p>
          </div>
        </div>
      </div>
    </>
  );
}
