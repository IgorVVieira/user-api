const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');
const UserMiddleware = require('./middlewares/UserMiddleware');

routes.get('/users', UserController.index);
routes.post('/users', UserMiddleware.checkAgeIsNumber, UserController.store);
routes.get('/users/:id', UserController.show);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.destroy);

module.exports = routes;