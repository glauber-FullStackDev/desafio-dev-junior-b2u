const db = require('knex')({
    client:'pg',
    connection:{
        host:'localhost',
        password:'88274297A',
        database:'carros',
        user:'postgres',
        port:'5432'
    }
})

module.exports = db