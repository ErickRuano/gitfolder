import { config } from 'dotenv'
config()

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

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
	return await prisma.repo.create({
		data
	})
}

const updateService = async(id, data)=>{
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