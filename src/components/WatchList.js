import React,{useState} from 'react'
import  {Tooltip,Grow} from "@mui/material"
import { watchlist } from '../data/data'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import BarChartOutlined from '@mui/icons-material/BarChartOutlined'; // Import BarChartOutlined
import MoreHoriz from '@mui/icons-material/MoreHoriz'; // Import MoreHoriz







export default function WatchList() {
  return (
    <div className='watchlist-container'>
        <div className='search-container'>
            <input 
            type="text"
            name="search"
            id="search"
            placeholder='search eg:infy, bse, nifty fut weekly, gold mcx'
            className='search'
            />
                <span className='counts'>{watchlist.length}/50 </span>
            
        </div>
      <ul className='list'>
        {watchlist.map((stock,index)=>{
       return <Watchlist stock={stock} key={index}/>
        })}
      </ul>
      {/* <DoughnutChart data={data}/> */}
    </div>
  )
}



const Watchlist = ({stock})=>{
  let [watchlistAction,setWatchlistAction] =useState(false);

  const handlemouseEnter = (e)=>{
    setWatchlistAction(true);
  }
  const handlemouseLeave = (e)=>{
    setWatchlistAction(false);
  }



  return(
    <li onMouseEnter={handlemouseEnter} onMouseLeave={handlemouseLeave}>
      <div className='item'>
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className='iteminfo'>
          <span className='percent'>{stock.percent}</span>
          {stock.isDown ? (<KeyboardArrowDown className="down"/>):(<KeyboardArrowUp  className="up"/>)}
          <span className='price'> {stock.price}</span>
        </div>
      </div>
      {watchlistAction && <WatchActions uid={stock.name}/>}
    </li>
  )
};

const WatchActions = ({uid}) =>{
  return(
    <span className='actions'>
      <span>
      <Tooltip title="buy(b)" placement='top' arrow TransitionComponent={Grow}
    >
      <button className='buy'>Buy</button>
    </Tooltip>


    <Tooltip title="sell(A)" placement='top' arrow TransitionComponent={Grow}
    >
      <button className='sell'>Sell</button>
    </Tooltip>


    <Tooltip title="Analytics" placement='top' arrow TransitionComponent={Grow}
    >
      <button className='actions'> 
    <BarChartOutlined className="icon"/>
    </button>
    </Tooltip>
    <Tooltip title="More" placement='top' arrow TransitionComponent={Grow}
    >
      <button className='actions'>
    <MoreHoriz className="icon"/>
    </button>
    </Tooltip>
      </span>
      </span>
  )
}
