import React from 'react'
import './App.css'
import './Header.css'

function App() {
  return (
    <div className="App">
      <Header text="You should care about things" />
    </div>
  );
}

function Header(props) {
  return (
    <h1>{props.text}</h1>
  )
}

export default App;
