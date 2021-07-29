// import users from './clerkUsers'
import { setClerkApiKey,  sessions, clients, users} from '@clerk/clerk-sdk-node';
import Cookies from 'cookies'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const findOrCreateUser = async (user)=>{

	const found = await prisma.user.findUnique({
		where : {
			clerkId : user.id,
		},
		include : {
			folders : true
		}
	})

	if(!found){
		const newUser = {
			clerkId : user.id,
			clerkData : user
		}
		return await prisma.user.create({ data : newUser })
	}else{
		return found
	}
}

const authMiddleware = async(req, res)=>{

    setClerkApiKey('test_ot57kAZJVQOoGGvz4Ig49NHK4fwFQMmEnD')
    
	// Get clientToken from __session cookie
	const cookies = new Cookies(req)
	const clientToken = cookies.get('__session')
    
	// Get sessionId from req.query
	let sessionId = req.query['_clerk_session_id'] || undefined;
    
	// Get sessionId from last active session
	if(!sessionId){
        const client = await clients.verifyClient(clientToken);
		sessionId = client.lastActiveSessionId;
	}
    
	// Get session from Clerk
	let session, user
	
	try{
        session = await sessions.verifySession(sessionId, clientToken);
	}catch(err){
		res.status(401).send('Unauthorized').end()		
		return null
	}
    
	// Get user from Clerk
	user = await users.getUser(session.userId, 'test_ot57kAZJVQOoGGvz4Ig49NHK4fwFQMmEnD')
    
	// Check if user in db, else store
	const dbUser = await findOrCreateUser(user)
    
	// Verify if user should access resource
    
    
	// Remove _clerk_session_id from req.query to avoid conflict with prisma
	delete req.query._clerk_session_id

    return { ...user, ...dbUser }
}

export const auth = authMiddleware