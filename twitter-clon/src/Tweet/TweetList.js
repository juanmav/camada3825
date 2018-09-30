import React from 'react';
import TweetRow from './TweetRow';
import tweetServices from '../services/tweetservice';

class TweetList extends React.Component {

    // Tarea para el hogar!
    // 1. Hacer que el tweetlist muestre la data (mock data)
    // 2. Hacer el punto uno un componente TweetRow.

    constructor(props){
        super(props);
        this.state = {
            tweets : []
        }
    }

    // Agregar un boton "Tweetear!" que me lleve al formulario del tweet.
    // window.location.href = '/tweetform'

    tweetear = () => {
        window.location.href = '/tweetform'
    };

    componentDidMount(){
        tweetServices
            .getTweetList()
            .then(tweets => {
                this.setState( { tweets: tweets });
            })
    }

    render() {
        console.log(this.state.tweets);
        return (
            <div>
                <button onClick={this.tweetear}> Tweetear!!!! </button>
                {
                    this.state.tweets.map( t => {
                        return (
                            <TweetRow {...t}/>
                        )
                    })
                }
            </div>
        )
    }
}

export default TweetList;