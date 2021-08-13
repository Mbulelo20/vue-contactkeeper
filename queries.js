const connection = require('./knexfile')[process.env.NODE_ENV || 'development']
const database = require('knex')(connection)

module.exports = {
    getAll(){
         return database('contacts')
    },
    
    addContact(database, newcontact){
        return database('contacts')
        .insert(newcontact)
        .into("contacts")
        .returning("*")
        .then(rows => {
            return rows[0]
        })
    }
}