import React from 'react';

class TweetRow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            view: false
        }
    }


    viewMore = () => {
        console.log('ver mas!!!!');
        this.setState({view: !this.state.view});
    };

    createCommentList = () => {
        return this.props.comments.slice(0,2).map( c => {
            return(
                <div>
                    {c.author.username} dijo: {c.message}
                </div>
            )
        })
    };

    render(){
        return(
            <div>
                <h1>{this.props.message}></h1>
                {this.props.author.username}
                <br/>

                <button style={{color: 'blue'}} onClick={this.viewMore}>
                    { this.state.view ? 'Ver menos' : 'Ver mas'}
                </button>

                {
                    this.state.view ?
                            this.createCommentList()
                        :
                        null
                }
            </div>
        )
    }
}

export default TweetRow;