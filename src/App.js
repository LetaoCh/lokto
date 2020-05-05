import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import './App.css';
import NavBar from './components/navbar'
import Footer from './components/footer'
import HomePage from './pages/HomePage'
import PhotoPage from './pages/PhotoPage'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/photo" component={PhotoPage} />
        </Switch>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
