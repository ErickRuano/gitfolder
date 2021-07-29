import { config } from 'dotenv'
config()

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const folderPrismaAdapter = (data)=>{

	if(data.folderId){
		data.folder = {
			connect : {
				id : parseInt(data.folderId)
			}
		}
		delete data.folderId
	}

	return data
	
}

const findUniqueService = async (id)=>{
	return await prisma.repo.findUnique({
		where : {
			id : parseInt(id)
		}
	})
}

const findManyService = async (params)=>{
	return await prisma.repo.findMany(params)
}

const createService = async(data)=>{
	// Transform for prisma
	data = folderPrismaAdapter(data)
	console.log('data before prisma', data)
	return await prisma.repo.create({
		data : data
	})
}

const updateService = async(id, data)=>{
	// Transform for prisma
	data = folderPrismaAdapter(data)
	
	
	return await prisma.repo.update({
		where : {
			id : parseInt(id)
		},
		data
	})
}

const deleteService = async(id, params)=>{
	return await prisma.repo.delete({
		...params,
		where : {
			id : parseInt(id)
		}
	})
}


export const findUnique = findUniqueService
export const findMany = findManyService
export const create = createService
export const update = updateService
export const destroy = deleteService