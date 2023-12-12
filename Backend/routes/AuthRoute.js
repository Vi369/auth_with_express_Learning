const express = require('express');
const { signUp } = require('../../controller/AuthController');

const authRoutes = express.Router();

authRoutes.post('/signup', signUp)


module.exports = authRoutes;