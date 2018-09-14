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
                { this.state.name.length < 3 ? 'El minimo es 3' : ''}
                <br/>
                <label>Username: </label>
                <input/>
                <br/>
                <label>email: </label>
                <input/>
                <br/>
                <label>Password: </label>
                <input/>
                <br/>
                <label>Confirme Password: </label>
                <input/>
                <br/>
                <button disabled={!this.isValid()} onClick={this.create}>Crear!</button>
            </div>
        );
    }
}

export default UserForm;