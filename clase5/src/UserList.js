import React from 'react';
import users from './userdata.js';


class UserList extends React.Component {
    constructor(props){
        super(props);
        console.log(users);
    }

    render(){
        return(
            <div style={{ marginLeft: '10px', marginRight: '10px'}}>

                <hr/>
                Listado de usuarios!
                <lu>
                    {
                        users.map(u => {
                            return (
                                <li>
                                    {u.name} - {u.email} <br/>
                                    { u.company.name }
                                </li>
                            );
                        })
                    }
                </lu>
                <hr/>
            </div>
        )
    }
}

export default UserList;