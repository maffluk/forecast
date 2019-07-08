export default (state = '', action) => {
    switch(action.type){
        case 'SEARCH': 
            return state = action.citises
        case 'CLEAR_SEARCH': 
            return state = ''
        default: return state
    }
}