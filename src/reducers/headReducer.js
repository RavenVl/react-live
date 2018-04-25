const SET_SIZE = 'SET_SIZE';
function headReducer(state={}, action) {
    switch (action.type) {
        case SET_SIZE:
            return {...state.table, size: action.size};
        default:
            return state
    }
}
export default headReducer;
export {SET_SIZE};