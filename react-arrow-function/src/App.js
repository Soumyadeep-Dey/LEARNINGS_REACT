import React from 'react'

const App = () => {
  const g = 'PBA INSTITUTE 9239412412';
  return (
    <Heading value = {g} />
  )
}

const Heading = (props) => {
  return (
    <h1><marquee>{props.value}</marquee></h1>
  )
}

export default App