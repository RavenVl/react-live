import React, {Component} from 'react';
import {Provider} from 'react-redux';
import HeadContainer from './container/HeadContainer';
import BoardContainer from './container/BoardContainer';
import store from './data/store';
import './App.css';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
            <div className="container">
                <HeadContainer/>
                <BoardContainer/>
            </div>
            </Provider>
        );
    }
}

export default App;
