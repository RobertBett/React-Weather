import React, { Component } from 'react';
import Search from './components/Search/Search';
import Home from './components/Home/Home';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
        <div className="App">
          <Switch>
              <Route path='/' exact component={Search}/>
              <Route path='/home' component={Home}/>
              <Route path='/search'component={Search}/>
          </Switch>
        </div>
    </BrowserRouter>
    );
  }
}

export default App;
