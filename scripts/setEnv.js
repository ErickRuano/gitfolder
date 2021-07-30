const fs = require('fs')
require('dotenv').config()

const variables = {
    HOST : process.env.APPLICATION_HOST || 'http://localhost:5000'
}

const code = `module.exports = ${JSON.stringify(variables, null, 1)}`


fs.writeFileSync('./src/.env.js', code)
