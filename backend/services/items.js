const db = require('./db')
const config = require('../config')

async function getData () {
    const rows = await db.query(`
        select id, nombre, marca, tipo, precio from items
    `)

    return {
        rows 
    }
}

async function insertData (req) {
    const result = await db.query(`
        insert into items (nombre, marca, tipo, precio) values ('${req.query.nombre}','${req.query.marca}','${req.query.tipo}','${req.query.precio}')
    `)

    return {
        result 
    }
}

async function deleteData (req) {
    const result = await db.query(`
        delete from items where id = ${req.query.id}
    `)

    return {
        result 
    }
}

module.exports = {
    getData,
    insertData,
    deleteData
}