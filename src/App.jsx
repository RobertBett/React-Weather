import React, { Component } from 'react';
import Search from './components/Search/Search';
import Home from './components/Home/Home';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import './App.css';

class App extends Component {
    constructor(){
        super();

        this.state={
            values:{}
        };
        this.OnSubmit = this.OnSubmit.bind(this);
    }
            OnSubmit =(values)=>{
                console.log(values);
                this.setState({ values});
            };
            render() {
                return (
                    <BrowserRouter>
                        <div className="App">
                            <Switch>
                                <Route path='/home' component={ ()=> <Home testValues={ this.state.values } /> }/>
                                <Route path='/search' render={ () => <Search onSubmit={ this.OnSubmit }/> } />
                                {/* <Route path='/' exact component={ Search }/> */}
                            </Switch>
                        </div>
                    </BrowserRouter>
                );
            }
}

export default App;
