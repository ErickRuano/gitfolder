import env from './../.env'

const getGithubCodeFromHrefService = ()=>{
    const str     = window.location.href
    const matches = str.match(/code=([^&]*)/);
    
    if(matches){
        const match = matches[1]
        const code = match.split('#')[0]
        const url = match.split('#')[1]
        window.history.replaceState({}, document.title, `/#${url}`)
        return code
    }else{
        return undefined
    }
}

export const getGithubCodeFromHref = getGithubCodeFromHrefService

const authenticateGithubService = (folderId)=>{
    // Starts import auth flow
    const redirect_uri = `${env.HOST}/#/folder/${folderId}/repo/new`
    const client_id = '04989aadc45ac92c3c42'
    const base_url = 'https://github.com/login/oauth/authorize'
    window.location.href = `${base_url}?client_id=${client_id}&redirect_uri=${redirect_uri}`
}

export const authenticateGithub = authenticateGithubService 

const importReposService = async (code)=>{
    
    
    // Calls own backend to get github repos with auth code
    let requestOptions = {
    method: 'GET',
    redirect: 'follow'
    };

    const response = await fetch(`${env.HOST}/api/github?code=${code}`, requestOptions)

    return await response.json()

}

export const importRepos = importReposService