import './App.css';
import {Header} from "./Header";
import {Main} from "./Tecnologies";


const App = () => {
    return (
        <div className="app-wrapper">
            <header className='header'>
                Header
                <img src="https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG16.png"/>
            </header>
            <nav className='nav'>
                <div><a href="#">Profile</a></div>
                <div><a href="#">Messages</a></div>
                <div><a href="#">News</a></div>
                <div><a href="#">Settings</a></div>
            </nav>
            <div className='content'>
                <img src="https://static3.depositphotos.com/1000454/256/i/600/depositphotos_2567474-stock-photo-wide-panorama-of-french-alps.jpg"/>
                <div>Content</div>
            </div>
        </div>
    )
}

export default App;
