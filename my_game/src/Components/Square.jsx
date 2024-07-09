/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import '../App.css'
function Square({val , chooseSquare}) {
  return (
    <div className='square' onClick={chooseSquare}>{val}</div>
  )
}

export default Square