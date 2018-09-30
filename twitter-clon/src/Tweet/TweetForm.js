import React from 'react';

import tweetservices from '../services/tweetservice';

class TweetForm extends React.Component {

    // Desafio formulario
    // input textarea
    // mensaje entre 10 a 50 caracteres
    // El boton crear solo estara habilitado con el mensaje sea valido.

    constructor(){
        super();
        this.state = {
            message : ''
        }
    }

    handlerChange = (event) => {
        let newState = { message  : event.target.value.substr(0, 50) };
        console.log(newState);
        this.setState(newState);
    };

    isValid = () => {
        // Mensaje mayor a 10 chars y menor a 50chaas
        if (this.state.message.length < 10 || this.state.message.length > 50) return false;
        return true;
    };

    create = () => {
        console.log('CREAR!');

        let tweet = {
            message: this.state.message
        };

        tweetservices
            .createTweet(tweet)
            .then( t => {
                alert('Creado con exito!');
                window.location.href = './tweetlist';
            });

    };

    render(){
        return(
            <div>
                Formulario!!!!<br/>
                <br/>
                <textarea onChange={this.handlerChange} value={this.state.message}/>
                <br/>
                {  50 - this.state.message.length }
                <br/>
                <button
                    disabled={!this.isValid()}
                    onClick={this.create}
                >
                    Crear!!!
                </button>
            </div>
        )
    }
}

export default TweetForm;