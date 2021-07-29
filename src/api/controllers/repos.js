import { findMany, create } from './../services/repo'

export default async (req, res)=>{
	if(req.method === 'GET'){
		const results = await findMany(req.query)
		res.send(results)
	}else if(req.method === 'POST'){
		console.log('request', req)
		const results = await create(req.body)
		res.send(results)
	}else{
		res.send('this method is not supported')
	}
}