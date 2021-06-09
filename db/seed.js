// LOCAL IMPORT
const {client} = require('./index')

async function dropMainTables() {
    try {
        console.log('Dropping users table...')
        await client.query(`
            DROP TABLE IF EXISTS tags;
            DROP TABLE IF EXISTS ingredients;
            DROP TABLE IF EXISTS users;
        `)
    } catch (error) {
        throw error
    }
}

async function createMainTables() {
    try {
        console.log('Creating users table...')
        await client.query(`
            CREATE TABLE users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL
            )
        `)

        console.log('Creating ingredients table...')
        await client.query(`
            CREATE TABLE ingredients (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) UNIQUE NOT NULL,
                quantity FLOAT NOT NULL DEFAULT 1,
                unit VARCHAR(255) NOT NULL,
                alt_quantity TEXT,
                calories INTEGER NOT NULL DEFAULT 0,
                carbs INTEGER NOT NULL DEFAULT 0,
                fat INTEGER NOT NULL DEFAULT 0,
                protein INTEGER NOT NULL DEFAULT 0
            )
        `)

        // RECIPES TABLE

        // TAGS TABLE
        console.log('Creating tags table...')
        await client.query(`
            CREATE TABLE tags (
                id SERIAL PRIMARY KEY,
                tag VARCHAR(255) UNIQUE NOT NULL,
                ingredient_ref INTEGER DEFAULT 0,
                recipe_ref INTEGER DEFAULT 0
            )
        `)
    } catch (error) {
        throw error
    }
}

async function buildDB() {
    try {
        client.connect()
        await dropMainTables()
        await createMainTables()
    } catch (error) {
        throw error
    }
}

buildDB();