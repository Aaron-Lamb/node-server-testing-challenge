const express = require('express');
const cors = require('cors');

const server = express();

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    return res.status(200).json({
        message: "Welcome"
    })
})

server.use((err, req, res, next) => {
    console.log(err);
    return res.status(500).json({
        errorMessage: "A server error"
    })
})

module.exports = server;