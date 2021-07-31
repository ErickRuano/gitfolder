import { auth } from './../middlewares/auth'

export default async (req, res)=>{
	
	// Authenticate user
	const user = await auth(req, res)
	
	res.send(`/${user.username}`)
}