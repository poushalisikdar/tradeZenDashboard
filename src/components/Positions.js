import React,{useEffect,useState} from 'react'
// import { positions } from "../data/data";
import axios from 'axios';

export default function Positions() {

let [addpositions,setAddposition] = useState([]);
useEffect(()=>{
axios.get("http://localhost:3002/addPositions").then((res)=>{
 setAddposition(res.data);
})
},[])
  return (
    <div className='order-table'>
        <table>
            <tr>
                <th>Product</th>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Avg.</th>
                <th>LTP</th>
                <th>P&L</th>
                <th>Chg</th>
            </tr>
            {addpositions.map(( stock,index) => {
            const currvalue = stock.price * stock.qty;
            const isProfit = currvalue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayclass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
             
                <td className={profClass}>
                  {" "}
                  {(currvalue - stock.avg * stock.qty).toFixed(2)}
                </td>
               
                <td className={profClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      
    </div>
  )
}
