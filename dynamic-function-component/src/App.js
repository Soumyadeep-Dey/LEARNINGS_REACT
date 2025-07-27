import React from 'react'
import Address from './Address'
import './App.css'

const App = () => {
  return (
    <>
    <div className='a'>
      <Address loc="Howrah(offline)"/>
    </div>
    <div className='b'>
      <Address loc="Kolkata(online)"/>
    </div>
    <div className='c'>
      <Address loc="Andul(offline)"/>
    </div>
    <div className='d'>
      <Address loc="Danesh Sheike lane(offline)"/>
    </div>
    </>
  )
}

export default App