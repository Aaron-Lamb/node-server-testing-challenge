const db = require('../data/config');

function getUsers(){
    return db('tests').select('*')
}

function getUserById(id){
    return db('tests').where('id', id).first();
}

async function addUser(user){
    const [id] = await db('tests').insert(user);
    return getUserById(id); 
}

function deleteUser(id){
    return db('tests').where('id', id).del()
}

module.exports = {
    getUsers,
    getUserById,
    addUser,
    deleteUser,
}