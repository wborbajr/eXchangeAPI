'use strict'

// Require the fastify framework and instantiate it
const fastify = require('fastify')({
  logger: true
})

// Require external modules
const db = require("./config/db")

// Import Routes
const carRoutes = require('./routes/carRoutes')

// Import Swagger Options
const swagger = require('./config/swagger')

const PORT = Number(process.env.PORT) || 5050;

// Register Database
fastify.register(db)

// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options)

fastify.register(carRoutes, { prefix: '/api/v1' })

// const opts = {
//   hello: 'world',
//   something: true,
// }

// fastify.register([
//   require('./routes/carRoutes')
//   // require('./yet-another-route'),
// ], opts, (err) => {
//   if (err) throw err
// })

fastify.register(require('fastify-cors'), {
  // put your options here
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(PORT, '0.0.0.0')
    fastify.swagger()
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
