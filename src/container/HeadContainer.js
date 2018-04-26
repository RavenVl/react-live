import {connect} from 'react-redux';
import Head from '../components/Head';
import {SET_SIZE,START} from '../reducers';

function mapStateToProps(state) {
    return {
        table:state.table,
        size: state.size
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setSize: (e) => {
            e.preventDefault();
            let size = document.getElementById('sizetable').value;
            dispatch({type: SET_SIZE, size: size})
        },
        start: (e)=> {
            e.preventDefault();
            dispatch({type: START})
    }

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Head);