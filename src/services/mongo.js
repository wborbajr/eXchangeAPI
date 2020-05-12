const mongoose = require('mongoose');

const urlPath = 'mongodb://localhost:27017/ecommerce-api'

mongoose.connect(urlPath, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// const connectDB = async () => {
//     try {
//         await mongoose.connect(urlPath, {
//             useNewUrlParser: true,
//             useCreateIndex: true,
//             useUnifiedTopology: true,
//             useFindAndModify: false
//         });
//         console.log("MongoDB Conected")
//     } catch (err) {
//         console.error(err.message);
//         process.exit(1);
//     }
// };

// module.exports = connectDB;