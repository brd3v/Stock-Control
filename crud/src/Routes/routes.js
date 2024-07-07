const express = require('express')
const routes = express.Router()
const User = require('../models/Schema'); // Importar o modelo User


routes.get('/', async (req, res) =>{
    try{
       const users = await User.find()
       res.status(200).json(users)
    }
    catch(e){
       res.status(500).json({message: e.message})
    }
   })

   routes.post('/add', async (req, res) => {
    try {
        const newUser = new User(req.body)
        await newUser.save()
        res.status(201).json(newUser)
    }
    catch(e){
        res.status(400)
    }
})
   

   module.exports = routes