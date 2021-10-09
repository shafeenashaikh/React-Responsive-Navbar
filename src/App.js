import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home';
import KeyFeatures from './Components/Pages/KeyFeatures';
import Pricing from './Components/Pages/Pricing';
import Testimonials from './Components/Pages/Testimonials';
import Demo from './Components/Pages/Demo';

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/features" component={KeyFeatures}/>
          <Route path="/pricing" component={Pricing}/>
          <Route path="/tesimonials" component={Testimonials}/>
          <Route path="/demo" component={Demo}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
