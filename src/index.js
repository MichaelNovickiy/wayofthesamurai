import React from 'react';
import './index.css';
import store from "./redux/state.js";
import ReactDOM from 'react-dom';
import App from './App';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()}
                 addPost={store.addPost.bind(store)}
                 updateNewPostDate={store.updateNewPostDate.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
};

store.subscribe(rerenderEntireTree);
rerenderEntireTree(store.getState());
