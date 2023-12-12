const express = require('express');
const authRoutes = require('./routes/AuthRoute');
const ConnectToDb = require('./config/databaseConfig')
const app = express();

//connection to database
ConnectToDb();

//convert serialized data to json format
app.use(express.json());

app.use('/api/auth/', authRoutes)

app.use('/', (req, res)=>{
    res.status(200).json({
        message: "hello jii"
    })
})

module.exports = app;

