const Users = require('./users-model');
const express = require('express');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try{
        return res.status(200).json(await Users.getUsers())
    } catch(error){
        next(error)
    }
})

router.get('/:id', async (req, res, next) => {
    try{
        const user = await Users.getUserById(req.params.id);

        if(!user){
            return res.status(404).json({
                errorMessage: "Invalid ID"
            })
        }

        return res.status(200).json(user)
    } catch(error){
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try{
        const newUser = await Users.addUser(req.body);
        return res.status(201).json(newUser)
    } catch(error){
        next(error)
    }
})

router.delete('/:id', async (req, res, next) => {
    try{
        Users.deleteUser(req.params.id)
        return res.status(204).json({
            message: "User was deleted"
        })
    } catch(error){
        next(error)
    }
})

module.exports = router;