import React, { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [currentSum, setCurrentSum] = useState(0);

  const [clear, setClear] = useState(false);

  useEffect(()=>
  {
    document.querySelector('#result').value=""
  },[])

  useEffect(()=>
  {
    if(clear)
      document.querySelector('#result').value=""
  })

  const Add=(e)=>
  {
    e.preventDefault();
    if(clear) setClear(false);
    let currentNum = document.querySelector('#num').value

    if(currentNum=='')
      return;

    let sum = currentSum+parseInt(currentNum);

    setCurrentSum(sum);

    document.querySelector('#num').value=""
  }

  const Clear=(e)=>
  {
    e.preventDefault();
    console.log('sum:', currentSum);

    document.querySelector('form').reset();

    setClear(true);

    setCurrentSum(0);
  }
  return (
    <div className='App'>
      <form>
        <input type='text' id='num'></input>
        <br></br>

        <button class='button1' onClick={Add}>Add</button>
        <br></br>

        <button class='button2' onClick={Clear}>Clear</button>
        <br></br>

        <input type='text' id='result' value={currentSum} readOnly></input>
      </form>
    </div>
  )
}

export default App