import axios from 'axios'
import { config } from 'dotenv'
config()

const getGithubTokenService = async (params)=>{

	let data = JSON.stringify({
		client_id: process.env.GITHUB_CLIENT_ID,
		client_secret: process.env.GITHUB_CLIENT_SECRET,
		code: params.code
	});

	let requestOptions = {
		method: 'post',
		url: 'https://github.com/login/oauth/access_token',
		headers: { 
			'Content-Type': 'application/json',
			'Accept' : 'application/json' 
		},
		data : data
	};

	const response = await axios(requestOptions)
	console.log('got token', response.data)
	return response.data.access_token
}

const listGithubReposService = async (params)=>{

	// Get user token

	const token = await getGithubTokenService(params)

	let requestOptions = {
		method: 'get',
		url: 'https://api.github.com/user/repos',
		headers: { 
		  'Authorization': `token ${token}`
		}
	  };

	const response = await axios(requestOptions)
	return response.data
}

export const listGithubRepos = listGithubReposService