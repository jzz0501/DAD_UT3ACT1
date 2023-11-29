const db = require('./db')
const config = require('../config')

async function insertData (req) {
    const result = await db.query(`
        insert into usuarios (nombre, login, password, rol) values ('${req.query.nombre}','${req.query.login}','${req.query.password}','${req.query.rol}')
    `)

    return {
        result 
    }
}

async function getData () {
    const rows = await db.query(`
        select id, nombre, login, password, rol from usuarios
    `)

    return {
        rows 
    }
}

module.exports = {
    insertData,
    getData
}
