
	const qs = require('qs')
	
	// let query = qs.stringify({
	// 	where : {
    //         AND : [
    //             {
    //                 owner : {
    //                     is : {
    //                         clerkId : 'user_1vgt3xMQic0octaRV9o90OCoL2m'
    //                     }
    //                 }
    //             },
    //             {
    //                 folderId : {
    //                     equals : 'null'
    //                 }
    //             }
    //         ]
	// 	}
	// })

    let query = qs.stringify(
        {
            include : {
                repos : true,
                parentFolder : true,
                children : true,
            }
        }
    )
	
	console.log(query)