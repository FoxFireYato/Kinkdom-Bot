const Yuno = require(`${__dirname}/src/yuno.js`);

new Yuno(require(`${__dirname}/config.json`));

process.on('unhandledRejection', err => {
    console.log(`Unhandled rejection: \n${err.stack}`, 'error');
});

process.on('uncaughtException', err => {
    console.log(`Uncaught exception: \n${err.stack}`, 'error');
});

app.listen(process.env.PORT || 3000, function () {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
