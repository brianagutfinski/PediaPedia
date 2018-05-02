import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/Home";
import Baby from "./components/Baby";
import Child from "./components/Child";
import Toddlers from "./components/Toddlers";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
      <div className="App">
<<<<<<< HEAD
        <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">

<h3 class="content-subhead">
          <i class="fa fa-heart"></i>
          Purpose

      </h3>
<p>
  Here at My Perfect Pet, we understand that pets make the world a brighter place. We also understand that having a pet that matches your personality and lifestyle is very important. There are millions of animals looking for their forever home, and our
  goal is to match them with the perfect person!
</p>
</div>
=======
        <Route exact="exact" path="/" component={Home}/>
        <Route exact="exact" path="/Baby" component={Baby}/>
>>>>>>> cacff55237965b520fc6dd9ea2e15b20b5ae121e
      </div>
    </Router>
  );
  }
}

export default App;
