import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Content from './Content.js';
import Counter from './Counter.js';
import UserList from './UserList.js';
import UserForm from './UserForm.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header title={"Hola mundo!!!!!"}/>
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
