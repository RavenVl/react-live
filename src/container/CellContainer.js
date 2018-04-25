import {connect} from 'react-redux';
import Cell from '../components/Cell';
import {SET_SIZE, SET_LIVE} from '../reducers';

function mapStateToProps(state) {
    return {
        table:state.table
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setLive: (e) => {
            console.log(e.currentTarget.id);
            dispatch({type: SET_LIVE, id: e.currentTarget.id})
        }

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell);