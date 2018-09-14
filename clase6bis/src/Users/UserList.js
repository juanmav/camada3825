import React from 'react';
import UserRow from './UserRow';

class UserList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            users : [],
            loading: false
        }
    }

    componentDidMount(){
        console.log('Estoy listo!');

        this.setState({loading: true});

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                console.log(users);
                this.setState({
                    users: users,
                    loading: false
                });
            })
    }

    create = () => {
        window.location.href = '/userform'
    };

    render(){
        console.log('renderizo!');
        console.log(this.state.users);

        // let condicion= false;
        //let value = condicion ? 'Verdadero' : 'Falso';

        return (
            <div>
                UserList!
                <button onClick={this.create}>Crear</button>
                <hr/>
                {
                    this.state.loading ?
                        "CARGANDO......"
                        :
                        this.state.users.map(u => {
                            return <UserRow user={u}/>
                        })
                }

            </div>
        );
    }
}

export default UserList;
