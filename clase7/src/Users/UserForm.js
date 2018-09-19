import React from 'react';

class UserForm extends React.Component {

    // DESAFIO!!!!

    constructor(props){
        super(props);

        console.log(props.userId);

        this.state = {
            name: '', // Minimo 3 letras
            username: '', // minimo 5 letras maximo 12
            email: '', // tiene que tener @ Desafio usar REGEX.
            password: '', // minimo 5 caracteres
            confirmPassword: '' // debe ser igual al password.
        };


    }

    componentDidMount(){
        if(this.props.userId){
            fetch('https://jsonplaceholder.typicode.com/users/' + this.props.userId)
                .then(response => response.json())
                .then(user => {
                    console.log('data user a editar!');
                    console.log(user);
                    let newState = {
                        name: user.name,
                        username: user.username,
                        email: user.email
                    };
                    console.log(newState);
                    this.setState(newState);
                })
        }
    }

    create = () => {
        console.log("crear!");
        console.log(JSON.stringify(this.state, null, 4));

        /*
            fetch(url, {
                headers: {},
                body: JSON.stringtify(this.state),
                method: POST
            })
            .then(response => {....})
         */

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

        if (this.state.name.length < 3) return false;
        if (this.state.username.length < 5 || this.state.username.length > 12) return false;
        if (!this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) return false;
        if (this.state.password.length < 5 ) return false;
        if (this.state.confirmPassword !== this.state.password) return false;

        return true;
    };

    // DESAFIO hacer boton ver password!

    render(){

        let classRed = { color: 'red'};
        let example = true; // veo una condicion.

        return(
            <div>
                <label>Nombre: </label>
                <input
                    onChange={this.handlerNameChange}
                    value={this.state.name}
                />
                <label style={classRed}>{ this.state.name.length < 3 ? 'El minimo es 3' : ''}</label>
                <br/>
                <label>Username: </label>
                <input
                    onChange={(event) => { this.handlerChangeInput(event, 'username')} }
                    value={this.state.username}
                />
                <label style={this.state.username.length < 5 || this.state.username.length > 12 ? classRed : { color: 'green'}}>{ this.state.username.length } / 12 </label>
                <label style={classRed}> { this.state.username.length < 5 ? 'Muy corto' : ''} </label>
                <label style={classRed}> { this.state.username.length > 12 ? 'Muy Largo' : ''} </label>
                <br/>
                <label>email: </label>
                <input
                    onChange={(event)=> { this.handlerChangeInput(event, 'email')}}
                    value={this.state.email}
                />
                { this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? '' : 'Formato invalido!'}
                <br/>
                <label>Password: </label>
                <input
                    onChange={(event)=> { this.handlerChangeInput(event, 'password')}}
                    value={this.state.password}
                />
                { this.state.password.length < 5 ? 'password Corta' : ''}
                <br/>
                <label>Confirme Password: </label>
                <input
                    onChange={(event)=> {this.handlerChangeInput(event, 'confirmPassword')}}
                    value={this.state.confirmPassword}
                />
                { this.state.confirmPassword !== this.state.password ? 'Deben ser iguales!' : ''}
                <br/>
                { /* Desafio hacer button un componente Button. */}
                <button disabled={!this.isValid()} onClick={this.create}>{this.props.userId? "Modificar!" : "Crear!"}</button>
            </div>
        );
    }
}

export default UserForm;