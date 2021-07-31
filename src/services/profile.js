import env from './../.env'

import axios from 'axios'

const fetchProfileURLService = async ()=>{
    const response = await axios.get(`${env.HOST}/api/public/profile`)
    return response.data
}

export const fetchProfileURL = fetchProfileURLService
