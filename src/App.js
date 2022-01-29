import './App.css';
import React from 'react';
import Person from './testState/state.jsx';


function App() {
  const style={color:'rgb(241, 121, 8'};
  return (
    <div className='App'>
      <h2 style={style}>Open the Profile</h2>      
      <Person></Person> 
      
   </div>     
    )
  }
export default App;