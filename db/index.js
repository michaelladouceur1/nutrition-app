// 3rd PARTY IMPORT
const {Client} = require('pg')

// LOCAL IMPORT
const {DB_USER, DB_PASSWORD} = require('../private')

// Add connection string for client
const client = new Client(`postgres://${DB_USER}:${DB_PASSWORD}@localhost:5432/nutrition-app`)



module.exports = {
    client
}