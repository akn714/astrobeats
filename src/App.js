import './App.css';
import Login from './components/Login/Login.js'
import Home from './components/home-section/Home.js'
import Library from './components/library-section/Library.js'
import SongList from './components/song-list/SongList'

function App() {
  return (
    <div className="main">
        {/* <div>Welcome to AstroBeats!</div> */}
        {/* <Login /> */}
        <Home />
        {/* <Library /> */}
        {/* <SongList /> */}
    </div>
  );
}

export default App;
