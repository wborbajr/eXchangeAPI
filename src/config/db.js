const fastifyPlugin = require('fastify-plugin')
const mongoose = require('mongoose')

// Connect to DB
async function dbConnector(fastify, options) {
    try {
        const url = "mongodb://127.0.0.1:27017/mycargarage"
        const db = await mongoose
            .connect(url, {
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true,
                useFindAndModify: false
            })
        console.log("Database is connected")
        fastify.decorate('mongo', db)
    } catch (err) {
        console.log(err)
    }

}
module.exports = fastifyPlugin(dbConnector)