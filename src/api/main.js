import github from './controllers/github'
import publicFolder from './controllers/publicFolder'
import publicFolders from './controllers/publicFolders'
import folders from './controllers/folders'
import folder from './controllers/folder'
import repos from './controllers/repos'
import repo from './controllers/repo'
import publicRoutes from './controllers/public'

export default {
	controllers : {
		github,
		folders,
		folder,
		publicFolder,
		publicFolders,
		repo,
		repos,
		publicRoutes
	}
}