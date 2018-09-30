const mockdata = [
    {
        id: 1,
        message: 'hola esto es un tweet!',
        author: {
            id: 1,
            username: 'Juancito'
        },
        comments : [
            {
                id: 1-1,
                message: 'Hola que hace!!!!',
                author: {
                    id: 2,
                    username: 'Pedrito'
                },
            },
            {
                id: 1-1,
                message: 'Gatooo',
                author: {
                    id: 2,
                    username: 'Pedrito'
                },
            },
            {
                id: 1-1,
                message: 'Hola que hace!!!!',
                author: {
                    id: 2,
                    username: 'Pedrito'
                },
            },
            {
                id: 1-1,
                message: 'Gatooo',
                author: {
                    id: 2,
                    username: 'Pedrito'
                },
            }
        ]
    },
    {
        id: 2,
        message: 'hola esto es un tweet! 222222',
        author: {
            id: 1,
            username: 'Juancito'
        },
        comments : []
    },
    {
        id: 3,
        message: 'hola esto es un tweet!',
        author: {
            id: 2,
            username: 'Pedrito'
        },
        comments : []
    }
];

export default mockdata;