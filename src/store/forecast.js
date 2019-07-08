export default (state = '', {type, values}) => {
    switch(type){
        case 'GET_FORECAST': 
            return state = values
        default: return state
    }
}