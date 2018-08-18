import React from 'react';
import ReactDOM from 'react-dom';


//全局样式
import './stylesheets/main.scss';

import Router from './router'

//全局配置
import './modules/config'

import { Provider } from 'react-redux'

import store from './store'

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <Provider store={store} >
        <Router />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();