import React from 'react'
import {Link} from "react-router-dom";

export default function Orders() {
  return (
    <div className='orders'>
        <div className='no-orders'>
            <p> you  haven't placed ant order today</p>
            <Link to ={"/"} className='btn'>
            Get started</Link>
        </div>
      
    </div>
  )
};
