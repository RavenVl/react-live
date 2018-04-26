const SET_SIZE = 'SET_SIZE';
const SET_LIVE = 'SET_LIVE';
const START = 'START';
var timer = null;

function startLive(table) {
    function isInTable(i,j){
        if(i<0||j<0) return 0;
        if(i>table.length-1 || j>table.length-1) return 0;
        console.log(i);
        console.log(j);
        return table[i][j];
    }
    function numberNeib(i, j) {
        let num = 0;
            num+=isInTable(i-1, j-1);
            num+=isInTable(i-1, j);
            num+=isInTable(i-1, j+1);
            num+=isInTable(i, j-1);
            num+=isInTable(i, j+1);
            num+=isInTable(i+1, j-1);
            num+=isInTable(i+1, j);
            num+=isInTable(i+1, j+1);
        return num;
    }
    let newTable = resizeTable(table.length);
        for (let i = 0; i < table.length; i++) {
            for (let j = 0; j < table.length; j++) {
                let num = numberNeib(i, j);
                if (num < 2 || num > 3) {
                    newTable[i][j] = 0;
                }else if(table[i][j]===1){
                    newTable[i][j] = 1;
                }
                else if(num===3){
                    newTable[i][j] = 1;
                }
            }

        }
    return newTable;
}

function resizeTable(size) {
    let rez = [];
    for (let i = 0; i < size; i++) {
        let arr2 = new Array(size).fill(0);
        rez.push(arr2);
    }
    return rez;
}

function setLive(array, id) {
    let rez = Array.from(array);
    let coord = id.split('');
    if (rez[coord[0]][coord[1]] === 0) {
        rez[coord[0]][coord[1]] = 1
    }
    else {
        rez[coord[0]][coord[1]] = 0
    }

    return rez;
}

function reducer(state = {}, action) {
    switch (action.type) {
        case SET_SIZE:
            return {table: resizeTable(parseInt(action.size)), size: action.size};
        case SET_LIVE:
            return {
                table: setLive(state.table, action.id),
                size: action.size
            };
        case START:
            console.log("start");
            return {
                table: startLive(state.table),
                size: action.size
            };
        default:
            return state
    }
}

export {SET_SIZE, SET_LIVE, START};
export default reducer;