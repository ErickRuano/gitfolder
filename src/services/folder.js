import env from './../.env'

import axios from 'axios'
import qs from 'qs'

const fetchRootFoldersService = async (userId, isPublic = false)=>{
    const query = qs.stringify({
		where : {
            AND : [
                {
                    owner : {
                        is : {
                            [isPublic ? 'username' : 'clerkId'] : userId
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

    const response = await axios.get(`${env.HOST}/api/${isPublic ? 'public/' : ''}folder?${query}`)
    return response.data
}

export const fetchRootFolders = fetchRootFoldersService


const fetchFolderContentsService = async (folderId,  isPublic = false)=>{
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

    const response = await axios.get(`${env.HOST}/api/${isPublic ? 'public/' : ''}folder/${folderId}?${query}`)
    return response.data
}

export const fetchFolderContents = fetchFolderContentsService

const createFolderService = async (folder)=>{
    const response = await axios.post(`${env.HOST}/api/folder`, folder)
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