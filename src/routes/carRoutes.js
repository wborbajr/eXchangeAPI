// Import our Controllers
const carController = require('../controllers/carController')

// Import Swagger documentation
// const documentation = require('./documentation/carApi')

async function routes(fastify, options) {
  fastify.get('/api/cars', carController.getCars)
  fastify.get('/api/cars/:id', carController.getSingleCar)
  fastify.post('/api/cars', carController.addCar)
  fastify.put('/api/cars/:id', carController.updateCar)
  fastify.delete('/api/cars/:id', carController.deleteCar)
}

module.exports = routes
