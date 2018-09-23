import React from 'react';
import './login.css';
import Button from '@material-ui/core/Button';

class Login extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            loading: false
        }
    }

    handlerInput = (event) => {
        let fieldName = event.target.id;
        let newState = {};
        newState[fieldName] = event.target.value; // newState.username o newState.password
        this.setState(newState);
    };

    isValidButton = () => {
        return this.state.username && this.state.password && !this.state.loading;
    };

    login = () => {
        console.log('Enviar data al backend!');
        console.log(this.state);

        // Emulando llamada al servidor!;
        this.setState({ loading: true });
        setTimeout(() => {
            // El servidor me da ok! tengo que ir al tweet list!
            console.log('Login OK');
            this.setState({loading: false});
            window.location.href = './tweetlist';
        },500);

    };

    render(){
        console.log(this.state);
        return(
            <div className="login">
                <h3>Login</h3>
                <input
                    onChange={this.handlerInput}
                    id="username"
                    placeholder="Ingrese username"
                />
                <input
                    onChange={this.handlerInput}
                    id="password"
                    placeholder="Su Password"
                    type="password"
                />
                <Button
                    onClick={this.login}
                    disabled={!this.isValidButton()}
                    color="secondary"
                    variant="contained"
                >
                    Login
                </Button>
                { this.state.loading ? 'Cargando...' : ''}
            </div>
        )
    }
}

export default Login;