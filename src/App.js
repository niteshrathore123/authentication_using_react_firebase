import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';
import {Route} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import NavComp from './Components/NavComp';
import Signup from './Components/Signup';


function App() {
  return (
    <div className="App">
      <NavComp/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={Signup}/>
      
      
    </div>
  );
}

export default App;
