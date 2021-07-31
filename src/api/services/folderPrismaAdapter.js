export default (data)=>{
	console.log(data)

	if(data.folderId){
		data.folder = {
			connect : {
				id : data.folderId
			}
		}
		delete data.folderId
	}

	if(data.owner){
		data.owner = {
			connect : {
				id : data.owner.id
			}
		}
	}

	return data
	
}