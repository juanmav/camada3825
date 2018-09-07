const request = require('request');

console.log('1');

request('https://jsonplaceholder.typicode.com/users',
    function (error, response, body) {
        console.log('2');
        let users = JSON.parse(body);
        //console.log(users[0].name);
        let user = users[0];
        console.log(user);
        console.log(user.id);
        request('https://jsonplaceholder.typicode.com/posts',
            function (error2, response2, body2 ) {
                let posts = JSON.parse(body2);
                console.log(posts[0]);
                let filtrados = posts.filter( p => user.id === p.userId);
                console.log(posts.length);
                console.log(filtrados.length);
                request('https://jsonplaceholder.typicode.com/cars',
                    function (error2, response2, body2) {
                        request('https://jsonplaceholder.typicode.com/partes',
                            function (error3, response3, body3 ) {
                                request('https://jsonplaceholder.typicode.com/minipartes',
                                    function (error4, response4, body4 ) {
                                        if(error4){
                                            console.log('error');
                                        } else {
                                            request('https://jsonplaceholder.typicode.com/codigos',
                                                function (error5, response5, body5 ) {

                                                })
                                        }
                                    })
                            })
                    })
            })
    });

console.log('3');
