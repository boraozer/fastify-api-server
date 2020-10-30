
async function handler(request, reply)
{
    reply.send({ hello: 'world_v1' })
}


module.exports = function (fastify, opts, done) {
    fastify.get('/', handler)
    done()
}