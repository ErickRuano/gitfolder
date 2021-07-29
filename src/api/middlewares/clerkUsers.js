import axios from 'axios';

export default {
    getUser : async (userId, apiKey)=>{

        var config = {
            method: 'get',
            url: `https://api.clerk.dev/v1/users/${userId}`,
            headers: { 
                Authorization: `Bearer ${apiKey}`
            }
        };

        const response = await axios(config);

        return response.data

        
    }
}