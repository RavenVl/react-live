import {connect} from 'react-redux';
import Head from '../components/Head';
import {SET_SIZE} from '../reducers';

function mapStateToProps(state) {
    return {
        table:state.table,
        size: state.size
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setSize: (e) => {
            //let inp = e.target.previousElementSibling.children[1];
            e.preventDefault();
            //console.log(e.target.parentElement.firstElementChild.children[1].value);
            let size =e.target.parentElement.firstElementChild.children[1].value;
            dispatch({type: SET_SIZE, size: size})
        }

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Head);