const fs = require('fs')
require('dotenv').config()

let variables = {
    HOST :  '',
    CLERK_FRONTEND_API : process.env.CLERK_FRONTEND_API || ''
}

if(process.env.VERCEL_ENV){
    if(process.env.VERCEL_ENV === 'production'){
        variables.HOST = 'https://gitfolder.satelite.digital'
    }else{
        variables.HOST = process.env.VERCEL_URL
    }
}else{
    variables.HOST = 'http://localhost:5000'
}

console.log(variables)

const code = `module.exports = ${JSON.stringify(variables, null, 1)}`


fs.writeFileSync('./src/.env.js', code)
