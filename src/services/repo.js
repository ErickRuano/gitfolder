import axios from 'axios'

const createRepoService = async (repo)=>{
    const response = await axios.post(`http://localhost:5000/api/repo`, repo)
    return response.data
}

export const createRepo = createRepoService