const requestPromise = require('request-promise');

// DESAFIO. consultar el listado de posts y a TODOS los posts agregarle el nombre
// del autor.

let promesaUsers = requestPromise('https://jsonplaceholder.typicode.com/users');
let promesaPosts = requestPromise('https://jsonplaceholder.typicode.com/posts');

Promise.all([promesaUsers, promesaPosts])
    .then(function (values) {
        let response1 = values[0]; // String de respuesta de usuarios
        let response2 = values[1]; // string de respuesta de posts.

        let users = JSON.parse(response1); // Array users
        let posts = JSON.parse(response2); // Array posts

        let postsWithAuthorName = posts.map(function (p){
                console.log(`postId: ${p.id} y userId: ${p.userId}`);
                let user = users.find( u => p.userId === u.id);
                p.authorName = user.name;
                return p;
        });

        console.log(postsWithAuthorName[10]);

    });