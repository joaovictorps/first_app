const express = require('express')
const routes = express.Router()
const controller = require('./controllers/controller')

// Método Create
routes.post('/users/create', (req, res) => controller.createUser(req.body)
    .then(result => res.send(result))
    .catch(err => console.log(err))
)

// Método Read
routes.get('/users', (req, res) => controller.readUsers()
    .then(result => res.send(result))
    .catch(err => console.error(err))
)

// Método Update
routes.put('/users/update/:id', (req,res) => controller.updateUser(req.params, req.body)
    .then(result => res.send(result))
    .catch(err => console.error(err))
)

// Método Delete
routes.delete('/users/delete/:id', (req,res) => controller.deleteUser(req.params)
    .then(result => res.send(result))
    .catch(err => console.error(err))
)

module.exports = routes