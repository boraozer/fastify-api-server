const server = require('./src/core/server.js');

const api = new server();

api.loadRoutes(
    require('./routes.js')
);

api.use('serverOptions', {
    port : 3000,
    host : '0.0.0.0'
});

api.open();