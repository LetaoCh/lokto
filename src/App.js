import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom'
import './App.css';
import NavBar from './components/navbar'
import Footer from './components/footer'
import HomePage from './pages/HomePage'
import PhotoPage from './pages/PhotoPage'
import AboutPage from './pages/AboutPage'

function App() {
  return (
    <HashRouter>
      <div className="App">
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/photo" component={PhotoPage} />
        </Switch>
        <Footer></Footer>
      </div>
    </HashRouter>
  );
}

export default App;
