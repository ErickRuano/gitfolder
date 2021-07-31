import { auth } from './../middlewares/auth'
import { queryParser } from './../middlewares/queryParser'
import { update, destroy, findUnique } from './../services/folder'


export default async (req, res)=>{
	
	
	// Retrieve resource id
	const folderId = req.query.id;

	// Since Vercel attaches route parameters as query parameters I'm removing id to avoid issues with services
	delete req.query.id
	
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