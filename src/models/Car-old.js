// External Dependancies
const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  services: {
    type: Map,
    of: String
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Car', carSchema)
