import React from 'react';
import tweetServices from '../services/tweetservice';


class TweetDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tweet : {
                author: {},
                comments: []
            }
        }
    }

    componentDidMount(){
        tweetServices.getTweetById(this.props.id)
            .then( tweet => {
                console.log(tweet);
                this.setState({tweet : tweet})
            })
    }

    comment = () => {
        window.location.href = '/tweetcoment/' + this.props.id;
    };

    // Ver el id del tweet.
    render(){
        return <div>
            <h1>{this.state.tweet.message}></h1>
            {this.state.tweet.author.username}
            <br/>
            <br/>
            {
                this.state.tweet.comments.map( c => {
                    return(
                        <div>
                            {c.author.username} dijo: {c.message}
                        </div>
                    )
                })
            }
            <button onClick={this.comment}>Comentar!</button>
        </div>;
    }

}

export default TweetDetail;