import React from 'react';

class UserForm extends React.Component {

    // DESAFIO!!!!

    constructor(props){
        super(props);
        this.state = {
            name: '', // Minimo 3 letras
            username: '', // minimo 5 letras maximo 12
            email: '', // tiene que tener @ Desafio usar REGEX.
            password: '', // minimo 5 caracteres
            confirmPassword: '' // debe ser igual al password.
        }
    }

    create = () => {
        console.log("crear!");
        console.log(JSON.stringify(this.state, null, 4));

        alert('Usuario creado');
        window.location.href = '/'
    };

    handlerNameChange = (event) => {
        this.setState({name: event.target.value});
    };

    handlerChangeInput = (event, field) => {
        let newState = {};
        console.log('value: ', event.target.value, ' field: ', field);
        newState[field] = event.target.value;
        this.setState(newState);
    };


    isValid = () => {
        let valid = false;

        if (this.state.name.length >= 3) {
            valid = true;
        }

        return valid;
    };

    render(){
        return(
            <div>
                <label>Nombre: </label>
                <input onChange={this.handlerNameChange}/>
                <label style={{color: 'red'}}>{ this.state.name.length < 3 ? 'El minimo es 3' : ''}</label>
                <br/>
                <label>Username: </label>
                <input onChange={(event) => { this.handlerChangeInput(event, 'username')} }/>
                <label style={this.state.username.length < 5 || this.state.username.length > 12 ? { color: 'red'} : { color: 'green'}}>{ this.state.username.length } / 12 </label>
                <label style={{color: 'red'}}> { this.state.username.length < 5 ? 'Muy corto' : ''} </label>
                <label style={{color: 'red'}}> { this.state.username.length > 12 ? 'Muy Largo' : ''} </label>
                <br/>
                <label>email: </label>
                <input onChange={(event)=> { this.handlerChangeInput(event, 'email')}} />
                <br/>
                <label>Password: </label>
                <input onChange={(event)=> { this.handlerChangeInput(event, 'password')}}/>
                <br/>
                <label>Confirme Password: </label>
                <input onChange={(event)=> {this.handlerChangeInput(event, 'confirmPassword')}}/>
                <br/>
                <button disabled={!this.isValid()} onClick={this.create}>Crear!</button>
            </div>
        );
    }
}

export default UserForm;