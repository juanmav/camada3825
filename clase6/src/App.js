import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Layout/Header.js';
import Content from './Layout/Content.js';
import Counter from './Helpers/Counter.js';
import UserList from './User/UserList.js';
import UserForm from './User/UserForm.js';
import LifeCycle from './LifeCycle';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header title={"Hola mundo!!!!!"}/>
                <hr/>
                <LifeCycle/>
                <hr/>
                <UserForm/>
                <Content/>
                <Counter pepe={0}/>
                <Counter pepe={10}/>
                <UserList/>
            </div>
        );
    }
}

export default App;
