const gateway = require("fast-gateway");
const port = 9001

const server = gateway({

    routes: [
        {
            prefix: '/payment',
            target: 'http://localhost:8082/'
        },
        {
            prefix: '/order',
            target: 'http://localhost:8081/'
        }
    ]
})


// const service = require('restana')()
server.get('/get', (req, res) => res.send('Hello World!'))

server.start(port).then(server => {
    console.log(`running at port ${port}`);
})