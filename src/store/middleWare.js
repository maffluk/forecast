const getResource = async (url) => {
    const res = await fetch(url)
    if(!res.ok){
        throw new Error('Could not fetch')
    }
    const body = await res.json()
    return body
}


const middleWare = store => next => action => {
    if(action.type === 'GET_FORECAST'){
        getResource(`https://api.apixu.com/v1/forecast.json?key=de88fa7cbc1a4b56a10113046190407&q=${action.val}&days=7`)
            .then(response => {
                if(response.error){
                    return next(action)
                }
                else{
                    action.values = response
                    return next(action)
                }
            })
            .catch(error => console.log(error))
    }
    if(action.type === 'SEARCH'){
        getResource(`https://api.apixu.com/v1/search.json?key=de88fa7cbc1a4b56a10113046190407&q=${action.val}`)
            .then(response => {
                action.citises = response
                return next(action)
            })
            .catch(error => console.log(error))
    }
    if(action.type === 'CLEAR_SEARCH') return next(action)
}

export default middleWare