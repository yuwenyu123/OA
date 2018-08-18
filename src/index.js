import React from 'react';
import ReactDOM from 'react-dom';


//全局样式
import './stylesheets/main.scss';
//router相关
import {
    BrowserRouter as Router
} from 'react-router-dom'

//全局配置
import './modules/config'

import App from './App';

import { Provider } from 'react-redux'

import store from './store'

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <Provider store={store} >
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();