import { config } from 'dotenv'
config()

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import folderPrismaAdapter from './folderPrismaAdapter.js'

const findUniqueService = async (id, query)=>{
	return await prisma.folder.findUnique({
		...query,
		where : {
			id : id
		}
	})
}

const findManyService = async (query)=>{
	return await prisma.folder.findMany(query)
}

const createService = async(data)=>{
	console.log('CREATING FOLDER', data)
	data = folderPrismaAdapter(data)
	return await prisma.folder.create({
		data
	})
}

const updateService = async(id, data)=>{
	return await prisma.folder.update({
		where : {
			id : id
		},
		data
	})
}

const deleteService = async(id, params)=>{
	const query = `delete from public."Folder" where "folderId" = '${id}' or id = '${id}';`

	return await prisma.$queryRaw(query)
}


export const findUnique = findUniqueService
export const findMany = findManyService
export const create = createService
export const update = updateService
export const destroy = deleteService