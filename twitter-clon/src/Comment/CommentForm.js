import React from 'react';

class CommentForm extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div> COMMENT FORM! {this.props.tweetId}</div>
        )
    }
}

export default CommentForm;