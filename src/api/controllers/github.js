import { listGithubRepos } from './../services/github'

export default async (req, res)=>{
	if(req.method === 'GET'){
		const results = await listGithubRepos(req.query)
		res.send(results)
	}else if(req.method === 'POST'){
		// const results = await getGithubToken(req.body)
		// res.send(results)
		res.send('this is a POST request')
	}else if(req.method === 'PUT'){
		res.send('this is a PUT request')
	}else if(req.method === 'DELETE'){
		res.send('this is a DELETE request')
	}else{
		res.send('this method is not supported')
	}
}