import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postData = [
    {id: '1', message: 'Hi, how are you?', likecount: '2' },
    {id: '2', message: 'It is my first post', likecount: '4' },
    {id: '3', message: 'I am a cat', likecount: '7' },
]

let dialogData = [
    {id: 1, name: 'Mike'},
    {id: 2, name: 'Nik'},
    {id: 3, name: 'Lex'},
    {id: 4, name: 'Pop'},
    {id: 5, name: 'Dima'},
]
let messageData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Yhoho'}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={postData} dialog={dialogData} message={messageData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
