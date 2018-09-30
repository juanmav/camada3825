import mockdata from "../Tweet/mockdata";

function createTweet(tweet){
    // fetch(urlbacken).then(....)
    return Promise.resolve(tweet);
}

function getTweetList(){
    // fetch(urlbacken).then(....)
    return Promise.resolve(mockdata);
}

const deleteTweet = (id) => {

};


export default {
    createTweet,
    getTweetList,
    deleteTweet
}