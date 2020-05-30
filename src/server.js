// Require the fastify framework and instantiate it
const fastify = require('fastify')({
	ignoreTrailingSlash: true,
	logger: true
})

// Require external modules
const db = require("./config/db")
fastify.register(db)


// Require external modules
// const mongoose = require('mongoose')

// Connect to DB
// mongoose
// 	.connect('mongodb://localhost/mycargarage')
// 	.then(() => console.log('MongoDB connected...'))
// 	.catch(err => console.log(err))

module.exports = fastify
