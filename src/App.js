import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
const App = () => {
  return (
    <div className="App">
    < h1 title = "this works!" > hi, this is react</h1>
    <Navbar title="navbar"  head="main"/>
    <TextForm heading="Enter the text to analyze below" />
  </div>
  )
};

export default App;
