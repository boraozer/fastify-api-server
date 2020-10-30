# fastify-api-server
Simple rest api server using fastify

## Documentation

#### Basic usage
``` javascript
const server = require('./src/core/server.js');

const api = new server();

api.loadRoutes(
    require('./routes.js')
);

api.open();
```

#### New router
All routes in root directory in 'router.js' file. 
``` javascript
const v1Routes = [
    require('./src/routes/v1/home.js')
];
module.exports = {
    v1 : v1Routes
};
```

#### Change default configuration
``` javascript
api.use('serverOptions', {
    port : 3000,
    host : '0.0.0.0'
});

api.use('fastifyOptions', {
        logger: false
});
```
