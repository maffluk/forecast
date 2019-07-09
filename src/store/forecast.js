export default (state = '', {type, values}) => {
    switch(type){
        case 'GET_FORECAST': 
            return state = values
        case 'ERROR': 
            return state = 'error'
        default: return state
    }
}