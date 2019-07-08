export default (state = '', action) => {
    switch(action.type){
        case 'GET_FORECAST': 
            return state = action.values
        default: return state
    }
}