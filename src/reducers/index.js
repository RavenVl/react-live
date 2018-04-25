const SET_SIZE = 'SET_SIZE';
function reducer(state={}, action) {
    switch (action.type) {
        case SET_SIZE:
            return {...state.table, size: action.size};
        default:
            return state
    }
}
export {SET_SIZE};
export default reducer;