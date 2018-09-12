import React from 'react';

class UserDetail extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        let u = this.props.detail;

        return (
            <div style={{ border: '1px solid black'}}>
                {u.name} - {u.email} <br/>
                { u.company.name }
            </div>
        )
    }

}

export default UserDetail;