import { auth } from './../middlewares/auth'
import { findMany, create } from './../services/folder'


export default async (req, res)=>{
	
	const user = await auth(req, res)

	if(req.method === 'GET'){
		const results = await findMany(req.query)
		res.send(results)
	}else if(req.method === 'POST'){
		const results = await create(req.body)
		res.send(results)
	}else{
		res.send('this method is not supported')
	}
}