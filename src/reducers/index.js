const SET_SIZE = 'SET_SIZE';
const SET_LIVE = 'SET_LIVE';

function resizeTable(size) {
    return new Array(size).fill(new Array(size).fill(0));
}
function setLive(array,id) {
    let rez = [].concat(array);
    let coord = id.split('');
    if(rez[coord[0]][coord[1]]===0){
        rez[coord[0]][coord[1]]=1
    }
    else{
        rez[coord[0]][coord[1]]=0
    }
    return rez;
}

function reducer(state = {}, action) {
    switch (action.type) {
        case SET_SIZE:
            return {table: resizeTable(parseInt(action.size), 10), size: action.size};
        case SET_LIVE:
            return {
                table: setLive(state.table, action.id),
                size: action.size
            };
        default:
            return state
    }
}

export {SET_SIZE, SET_LIVE};
export default reducer;