import React from 'react';

class UserRow extends React.Component {

    render(){
        return(
            <div>
                { this.props.user.name }
                <button>Modificar</button>
                <button>Borrar</button>
            </div>
        )
    }

}

export default UserRow;