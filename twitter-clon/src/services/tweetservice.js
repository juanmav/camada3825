import mockdata from "../Tweet/mockdata";

function createTweet(tweet){
    // fetch(urlbacken).then(....)
    return Promise.resolve(tweet);
}

function getTweetList(){
    // fetch(urlbacken).then(....)
    return Promise.resolve(mockdata);
}

function getTweetById(id){
    // fetch(urlbacken).then(....)
    let tweet = mockdata.find( t => t.id == id);
    return Promise.resolve(tweet);
}

const deleteTweet = (id) => {

};


export default {
    createTweet,
    getTweetList,
    deleteTweet,
    getTweetById
}