const Yuno = require(`${__dirname}/src/yuno.js`);

new Yuno(require(`${__dirname}/config.json`));

process.on('unhandledRejection', err => {
    console.log(`Unhandled rejection: \n${err.stack}`, 'error');
});

process.on('uncaughtException', err => {
    console.log(`Uncaught exception: \n${err.stack}`, 'error');
});

var server_port = process.env.YOUR_PORT || process.env.PORT || 80;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
server.listen(server_port, server_host, function () {
    console.log('Listening on port %d', server_port);
});