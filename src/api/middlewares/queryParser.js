import qs from 'qs'

const queryParserService = (query)=>{
    // Revive query
    const reviver = (key ,value) => {
        if(value === 'null'){
            return null
        }else if(value === 'true'){
            return true
        }else{
            return value
        }
        
    }

    // Process query
    let parsedQuery = qs.parse(query);
    let stringifiedQuery = JSON.stringify(parsedQuery)
    return JSON.parse(stringifiedQuery, reviver)


}

export const queryParser = queryParserService