import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Baby from "./components/Baby/Baby";
// import Child from "./components/Child";
// import Toddlers from "./components/Toddlers";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Route exact="exact" path="/" component={Home}/>
        <Route exact="exact" path="/Baby" component={Baby}/>
      </div>
    </Router>
  );
  }
}

export default App;