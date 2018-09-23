import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';


import Header from './Layout/Header';
import Login from "./Login/Login";
import TweetList from "./Tweet/TweetList";

class App extends Component {
    // Si o si hay que estar logueado para ver los tweets.
    render() {
        return (
            <div className="App">
                <Header title={"Bienvenido a Twitter Clon!"}/>
                <BrowserRouter>
                    <main className="App-intro">
                        <Route path={"/"} component={Login} exact={true}/>
                        <Route path={"/tweetlist"} component={TweetList} exact={true}/>
                        {
                            // Login /
                            // Tweet List /tweetlist
                            // Tweet Form (AM) /tweetform o tweetform/edit/:id
                            // Twett Detail con Comentarios /tweetdetail/:id
                            // Coments List (ABM)
                            // Coment Form (ABM)
                        }
                    </main>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
