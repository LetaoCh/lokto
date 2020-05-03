import React from 'react';
import './App.css';
import Intro from './components/intro'
import NavBar from './components/navbar'

function App() {
  return (
    <div className="App">
        <NavBar></NavBar>
				<Intro></Intro>
    </div>
  );
}

export default App;
