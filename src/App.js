import './App.css';
import Login from './components/Login.js'
import Home from './components/Home.js'

function App() {
  return (
    <div className="main">
        <div>Welcome to AstroBeats!</div>
        <Login />
        <Home />
    </div>
  );
}

export default App;
