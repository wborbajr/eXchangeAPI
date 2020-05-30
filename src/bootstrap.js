'use strict'

const fastify = require('./server.js')

// Require the fastify framework and instantiate it
// const fastify = require('fastify')({
//   ignoreTrailingSlash: true,
//   logger: true
// })

// Require external modules
// const db = require("./config/db")

// Import Routes
const carRoutes = require('./routes/carRoutes')

// Import Swagger Options
// const swagger = require('./config/swagger')

// Import Swagger Options
const PORT = Number(process.env.PORT) || 5050;
const PREFIX = '/api/v1'

// Register Database
// fastify.register(db)

// Register Swagger Configuration
// fastify.register(require('fastify-swagger'), swagger.options)

// Register Routers
fastify.register(carRoutes, { prefix: PREFIX })

// Register JWT
fastify.register(require('fastify-jwt'), {
  secret: "myS1kt3@&%%#*%", // use .env for this 
});

// Register CORS
fastify.register(require('fastify-cors'), {
  origin: '*'
})

/**
 * Works as a body-parser for request body
 */
fastify.addContentTypeParser('application/json', { parseAs: 'string' }, (req, body, done) => {
  try {
    const json = JSON.parse(body);
    done(null, json);
  } catch (err) {
    err.statusCode = 400;
    done(err, undefined);
  }
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(PORT, '0.0.0.0')
    // fastify.swaggergit()
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()

module.exports = fastify;