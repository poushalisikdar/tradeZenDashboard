import React from 'react'
import Menu from "./Manu"

export default function Topbar() {
  return (
    <div>
      <div className='topbar-container'>
        <div className='indices-container'>
            <div className='nifty'>
                <p className='index'>NIFTY 50</p>
                <p className='index-points'>{100.2}</p>
                <p className='index'></p>
            </div>
            <div className='sensex'>
                <p className='index'>SENSEX</p>
                <p className='index-points'>{100.2}</p>
                <p className='index'></p>
            </div>
          
        </div>
        <div><Menu/></div>
      </div>
    
    </div>
  )
}
