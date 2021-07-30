const fs = require('fs')
require('dotenv').config()

const variables = {
    HOST :  `https://${process.env.VERCEL_URL}` || process.env.APPLICATION_HOST || 'http://localhost:5000',
    CLERK_FRONTEND_API : process.env.CLERK_FRONTEND_API || ''
}

console.log(variables)

const code = `module.exports = ${JSON.stringify(variables, null, 1)}`


fs.writeFileSync('./src/.env.js', code)
