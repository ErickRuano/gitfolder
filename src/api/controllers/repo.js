import { update, destroy, findUnique } from './../services/repo'

export default async (req, res)=>{
	if(req.method === 'GET'){
		const results = await findUnique(req.query.id)
		res.send(results)
	}else if(req.method === 'PUT'){
		const results = await update(req.query.id, req.body)
		res.send(results)
	}else if(req.method === 'DELETE'){
		const results = await destroy(req.query.id, req.body)
		res.send(results)
	}else{
		res.send('this method is not supported')
	}
}