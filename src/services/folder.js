import env from './../.env'

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
            folder : true,
            repos : true
        }
    })

    const response = await axios.get(`http://localhost:5000/api/folder/${folderId}?${query}`)
    return response.data
}

export const fetchFolderContents = fetchFolderContentsService

const createFolderService = async (folder)=>{
    const response = await axios.post(`http://localhost:5000/api/folder`, folder)
    return response.data
}

export const createFolder = createFolderService

const updateFolderService = async (values) =>{
    const folderId = values.id
    delete values.id
    const response = await axios.put(`${env.HOST}/api/folder/${folderId}`, values)
    return response.data
}

export const updateFolder = updateFolderService

const removeFolderService = async (folderId) =>{
    const response = await axios.delete(`${env.HOST}/api/folder/${folderId}`)
    return response.data
}

export const removeFolder = removeFolderService