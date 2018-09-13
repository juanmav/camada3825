import React from 'react';

class UserForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: ''
        }
    }

    onCreate = () => {
        alert(JSON.stringify(this.state, null, 4));
    };

    onUsernameChange = (event) => {
        console.log(event.target.value);
        this.setState({ username: event.target.value});
    };

    onEmailChange = (event) => {
        console.log(event.target.value);
        this.setState({ email: event.target.value});
    };

    render(){
        return(
            <div> User Form <br/>
                <label>Username:</label>
                <input onChange={this.onUsernameChange}/><br/>
                <label>Email:</label>
                <input onChange={this.onEmailChange}/><br/>
                <button onClick={this.onCreate}>Crear</button>
            </div>
        )
    }
}

export default UserForm;