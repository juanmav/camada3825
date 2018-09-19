import React from 'react';

class UserRow extends React.Component {

    borrarUsuario = () => {
        this.props.deleteUser(this.props.user);
    };

    render(){
        return(
            <div>
                { this.props.user.name }
                <button>Modificar</button>
                <button onClick={this.borrarUsuario}>Borrar</button>
            </div>
        )
    }

}

export default UserRow;