import React from 'react';
import { Route, Switch, BrowserRouter, HashRouter } from 'react-router-dom'
import './App.css';
import NavBar from './components/navbar'
import Footer from './components/footer'
import HomePage from './pages/HomePage'
import PhotoPage from './pages/PhotoPage'

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/photography" component={PhotoPage} />
        </Switch>
        <Footer></Footer>
      </div>
    </HashRouter>
  );
}

export default App;
