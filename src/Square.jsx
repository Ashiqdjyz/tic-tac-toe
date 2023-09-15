import React from 'react'
import './app1.css'

function Square({value,onClick}) {

  return (
    <div  >
     <button className='square-container'onClick={onClick}>{value}</button>
    </div>
  )
}

export default Square
