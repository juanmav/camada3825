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


        // DESAFIO UNIFICAR en una sola funcion
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

    deleteUser = (user) => {
        let response = window.confirm("Esta seguro que quiere borrar el usuario: " + user.name);

        if (response){
            console.log('me confirmaron! borrarlo.');
            /**
             * fetch(url + user.id, {
             *      method: delete,
             * })
             *
             */
            alert('Usuario Borrado con Exito!!!');
            // DESAFIO UNIFICAR en una sola funcion
            this.setState({ loading: true});
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
                            return <UserRow
                                user={u}
                                deleteUser={this.deleteUser}
                            />
                        })
                }

            </div>
        );
    }
}

export default UserList;
