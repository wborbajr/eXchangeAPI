// Import our Controllers
const carController = require('../controllers/carController')

// Import Swagger documentation
// const documentation = require('./documentation/carApi')

module.exports = async (fastify, options, done) => {
  fastify.get('/cars', options, carController.getCars)
  fastify.get('/cars/:id', options, carController.getSingleCar)
  fastify.post('/cars', options, carController.addCar)
  fastify.put('/cars/:id', options, carController.updateCar)
  fastify.delete('/cars/:id', options, carController.deleteCar)
  done()
}