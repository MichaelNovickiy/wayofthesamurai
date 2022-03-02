import React from "react";
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";


const App = (props: any) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path={'/Profile'}
                               element={<Profile store={props.store}
                               />}
                        />
                        <Route path={'/Dialogs/'}
                               element={<DialogsContainer store={props.store}
                               />}
                        />
                        {/*новый синтаксис роутев*/}
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
