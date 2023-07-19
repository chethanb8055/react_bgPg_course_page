import React from 'react'
import "./Spinner.css"
const Spinner = () => {
  return (
    <div className='flex flex-col items-center space-y-z'>
        <div className='spinner'></div>
        <h1 className='text-bgDark text-lg font-semibold'>Loading.......</h1> 
    </div>
  )
}

export default Spinner