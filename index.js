const http = require('http');

const _hostname = '127.0.0.1';
const _port = 3000;

//github query stuff
const repos = require('repos');
const _options = {
    token: '3bbb74e461b8b17556375021913064c99b0c1c71'
};

// repos(['byteoverflow', 'iKameo'], _options)
//     .then(function(repos){
//         //debug remove later
//         //console.log(repos)
//         var sanitizedData = JSON.stringify(repos)
//     })
//     .catch(console.error)

//basic webserver
const server = http.createServer((req, res) => {

    repos(['byteoverflow', 'iKameo'], _options)
        .then(function (repos) {
            //debug remove later
            var sanitizedData = JSON.stringify(repos)
            res.statusCode = 200;
            //post repos to html website
            res.setHeader('Content-Type', 'application/json');
            res.write(JSON.stringify(sanitizedData))
            res.send();
        })
        .catch(console.error)
});

server.listen(_port, _hostname, () => {
    console.log(`🌏Server running at http://${_hostname}:${_port}/`);
});


