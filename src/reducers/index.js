const SET_SIZE = 'SET_SIZE';

function resizeTable(size) {
    return new Array(size).fill(new Array(size).fill(0));
}

function reducer(state = {}, action) {
    switch (action.type) {
        case SET_SIZE:
            return {table: resizeTable(parseInt(action.size), 10), size: action.size};
        default:
            return state
    }
}

export {SET_SIZE};
export default reducer;