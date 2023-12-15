const express = require('express');
const { signUp, signIn } = require('../controller/AuthController');

const authRoutes = express.Router();

authRoutes.post('/signup', signUp)
authRoutes.post('/signin', signIn)


module.exports = authRoutes;