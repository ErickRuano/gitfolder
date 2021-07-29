import { config } from 'dotenv'
config()

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const findUniqueService = async (id, query)=>{
	return await prisma.folder.findUnique({
		...query,
		where : {
			id : parseInt(id)
		}
	})
}

const findManyService = async (query)=>{
	return await prisma.folder.findMany(query)
}

const createService = async(data)=>{
	return await prisma.folder.create({
		data
	})
}

const updateService = async(id, data)=>{
	return await prisma.folder.update({
		where : {
			id : parseInt(id)
		},
		data
	})
}

const deleteService = async(id, params)=>{
	return await prisma.folder.delete({
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