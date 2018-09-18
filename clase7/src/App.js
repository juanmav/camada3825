import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import UserList from './Users/UserList.js';
import UserForm from './Users/UserForm.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <div>
                      <Route path={"/"} component={UserList} exact={true}/>
                      <Route path={"/userform"} component={UserForm} exact={true}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
