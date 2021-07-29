import { auth } from './../middlewares/auth'
import { queryParser } from './../middlewares/queryParser'
import { findMany, create } from './../services/folder'


export default async (req, res)=>{
	
	const user = await auth(req, res)
	const query = queryParser(req.query)

	if(req.method === 'GET'){
		const results = await findMany(query)
		res.send(results)
	}else if(req.method === 'POST'){
		const results = await create(req.body)
		res.send(results)
	}else{
		res.send('this method is not supported')
	}
}