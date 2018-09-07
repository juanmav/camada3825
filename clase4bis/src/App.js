import React from 'react';
import './App.css';
import Header from './Header.js';
import Content from './Content.js';

class App extends React.Component {

    render() {

        console.log('HOLA!!!!');

        return (
            <div className="App">
                <Header title={"Hola mundo!!!!"}/>
                <Header title={"Welcome to react!!!!!"}/>
                <Content/>
            </div>
        );
    }

}

export default App;
