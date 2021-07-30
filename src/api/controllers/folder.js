import { auth } from './../middlewares/auth'
import { queryParser } from './../middlewares/queryParser'
import { update, destroy, findUnique } from './../services/folder'


export default async (req, res)=>{
	
	// Authenticate user
	const user = await auth(req, res)
	
	// Retrieve resource id
	const folderId = parseInt(req.query.id);

	// Since Vercel attaches route parameters as query parameters I'm removing id to avoid issues with services
	delete req.query.id

	// Check user authorization
	// Get user folders id to determine if folderId belongs to authenticated user
	const userFolders = user.folders.reduce( (acc, folder) =>{
		acc.push(folder.id)
		return acc
	}, [])

	// If it doesn't belong, return 401
	if(!userFolders.includes(folderId)){
		res.status(401).send("Authenticated user does not have access to requested resource")
		return null
	}
	
	// Parse query before passing to services
	const query = queryParser(req.query)

	
	if(req.method === 'GET'){
		const results = await findUnique(folderId, query)
		res.send(results)
	}else if(req.method === 'PUT'){
		const results = await update(folderId, req.body)
		res.send(results)
	}else if(req.method === 'DELETE'){
		const results = await destroy(folderId, req.body)
		res.send(results)
	}else{
		res.send('this method is not supported')
	}
}