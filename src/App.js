import React from "react";
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {updateNewPostDate} from "./redux/state";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path={'/Profile'}
                               element={<Profile profilePage={props.state.profilePage}
                                                 addPost={props.addPost}
                                                 updateNewPostDate={props.updateNewPostDate}
                               />}
                        />
                        <Route path={'/Dialogs/*'}
                               element={<Dialogs state={props.state.messagesPage}
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
