import React from 'react';
import './index.css';
import store from "./redux/state.js";
import ReactDOM from 'react-dom';
import App from './App';

let rerenderEntireTree = (state: any) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()}
                 dispatch={store.dispatch.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
};

store.subscribe(rerenderEntireTree);
rerenderEntireTree(store.getState());
