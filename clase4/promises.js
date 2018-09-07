const requestPromise = require('request-promise');

//let promesa = requestPromise('https://jsonplaceholder.typicode.com/posts');

// Lees un listado de posts elegis un post en particular y queres saber
// quien es el autor de ese post.

requestPromise('https://jsonplaceholder.typicode.com/posts')
    .then(function (response) {
        let posts = JSON.parse(response);
        let post = posts[7]; // Elegi el post 7.
        console.log(post);
        return requestPromise('https://jsonplaceholder.typicode.com/users/' + post.userId)
    })
    .then(function(response2){
        let user = JSON.parse(response2);
        console.log(user); // Este es el usuario que es autor del post 7.
    })
    .catch(function(error){
        console.log(error);
    });


// DESAFIO. consultar el listado de posts y a TODOS los posts agregarle el nombre
// del autor.

let promesaUsers = requestPromise('https://jsonplaceholder.typicode.com/users');
let promesaPosts = requestPromise('https://jsonplaceholder.typicode.com/posts');

Promise.all([promesaUsers, promesaPosts])
    .then(function (values) {
        let response1 = values[0]; // String de respuesta de usuarios
        let response2 = values[1]; // string de respuesta de posts.

    });