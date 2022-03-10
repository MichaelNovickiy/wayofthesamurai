import React, {Provider} from 'react';
import './index.css';
import store from "./redux/redux-store";
import ReactDOM from 'react-dom';
import App from './App';
import StoreContext from "./StoreContext";
import { StoreType } from './redux/store';

let rerenderEntireTree = (value: any) => {
    ReactDOM.render(
        <React.StrictMode>
            <StoreContext.Provider value={store}>
                <App />
            </StoreContext.Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state)
});
// store.subscribe(rerenderEntireTree);