import axios from 'axios'
import env from './../.env'

const createRepoService = async (repo)=>{
    const response = await axios.post(`${env.HOST}/api/repo`, repo)
    return response.data
}

export const createRepo = createRepoService


const removeRepoService = async (repoId)=>{
    const response = await axios.delete(`${env.HOST}/api/repo/${repoId}`)
    return response.data
}

export const removeRepo = removeRepoService