import React from 'react';
import users from './userdata.js';
import UserDetail from './UserDetail';


class UserList extends React.Component {
    constructor(props){
        super(props);
        console.log(users);
    }

    render(){
        return(
            <div style={{ marginLeft: '10px', marginRight: '10px'}}>
                <hr/>
                La ficha del primero de la lista es:
                <UserDetail detail={users[0]}/>
                <hr/>
                Listado de usuarios!
                <div>
                    {
                        users.map((u, index) => {
                            return (
                                <UserDetail detail={u} key={index}/>
                            );
                        })
                    }
                </div>
                <hr/>
            </div>
        )
    }
}

export default UserList;