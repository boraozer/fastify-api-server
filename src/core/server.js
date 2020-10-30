class core {

    fastify;

    fastifyOptions = {
        logger: true
    }

    serverOptions = {
        port : 1923
    };

    useOptionsNameSpace = [
        'fastifyOptions',
        'serverOptions'
    ];

    constructor()
    {
        this.fastify = require('fastify')(this.fastifyOptions)
    }

    use(nameSpace, values)
    {
        if(this.useOptionsNameSpace.includes(nameSpace)) this[nameSpace] = {...this[nameSpace], ...values};
    }

    open()
    {
        this.fastify.listen(this.serverOptions.port, (err, address)=>{
            if (err) throw err
            this.fastify.log.info(`server listening on ${address}`)
        });
    }

    loadRoutes(routes)
    {
        for(let prefix in routes){
            routes[prefix].forEach(route => {
                this.fastify.register(route, {prefix: `/${prefix}`}); 
            });
            
        }
    }
}

module.exports = core;