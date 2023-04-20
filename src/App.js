import './App.css';
import Login from './components/Login/Login'
import Home from './components/home-section/Home'
import Library from './components/library-section/Library'
import SongList from './components/song-list/SongList'
import Navibation from './components/navigation/Navigation'

function App() {
  return (
    <div className="body">
        {/* <div>Welcome to AstroBeats!</div> */}
        {/* <Login /> */}
        {/* <Home /> */}
        {/* <Library /> */}
        {/* <SongList /> */}
        <Navibation element={<SongList />} />
    </div>
  );
}

export default App;
