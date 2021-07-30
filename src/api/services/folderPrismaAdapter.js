export default (data)=>{
	console.log(data)

	if(data.folderId){
		data.folder = {
			connect : {
				id : parseInt(data.folderId)
			}
		}
		delete data.folderId
	}

	if(data.owner){
		data.owner = {
			connect : {
				id : parseInt(data.owner.id)
			}
		}
	}

	return data
	
}