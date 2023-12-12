const mongoose = require('mongoose');

const MONGODB_URL = process.env.MONGODB_URL || "mongodb://localhost:27017";

const ConnectToDb = ()=>{
    mongoose
    .connect(MONGODB_URL)
    .then((conn)=> console.log(`connected to ${conn.connection.host}`))
    .catch((err)=> console.log(err.message));
}


module.exports = ConnectToDb;