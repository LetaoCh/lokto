import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
// import About from './components/about'
import NavBar from './components/navbar'
import Footer from './components/footer'

import HomePage from './pages/HomePage'
import PhotoPage from './pages/PhotoPage'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Switch>
        <Route exact path="" component={HomePage} />
      </Switch>
      <Footer></Footer>
      <PhotoPage></PhotoPage>
    </div>
  );
}

export default App;
