import axios from 'axios'
import qs from 'qs'

const fetchRootFoldersService = async (userId)=>{
    const query = qs.stringify({
		where : {
            AND : [
                {
                    owner : {
                        is : {
                            clerkId : userId
                        }
                    }
                },
                {
                    folderId : {
                        equals : 'null'
                    }
                }
            ]
		}
	})

    const response = await axios.get(`http://localhost:5000/api/folder?${query}`)
    return response.data
}

export const fetchRootFolders = fetchRootFoldersService


const fetchFolderContentsService = async (folderId)=>{
    const query = qs.stringify({
        select : {
            id : true,
            name : true,
            description : true,
            folders : true,
            parentFolder : true,
            repos : true
        }
    })

    const response = await axios.get(`http://localhost:5000/api/folder/${folderId}?${query}`)
    return response.data
}

export const fetchFolderContents = fetchFolderContentsService

const importRepoService = async (repo)=>{
    console.log('repo before send', repo)
    const response = await axios.post(`http://localhost:5000/api/repo`, repo)
    return response.data
}

export const importRepo = importRepoService