import './App.css'
import Login from './components/Login/Login'
import Home from './components/home-section/Home'
import Library from './components/library-section/Library'
import SongList from './components/song-list/SongList'
import Navigation from './components/navigation/Navigation'

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Navigation element={<Home />} />}>
//       <Route path="library" element={<Navigation element={<Library />} />} />
//       <Route
//         path="home"
//         element={<Navigation element={<Home />} />}
//       />
//       <Route
//         path="login"
//         element={<Navigation element={<Login />} />}
//       />
//     </Route>
//   )
// );

// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );

function App() {
  return (
    <div className="body">
        {/* <div>Welcome to AstroBeats!</div> */}
        {/* <Login /> */}
        {/* <Home /> */}
        {/* <Library /> */}
        {/* <SongList /> */}
        <Navigation element={<SongList />} />
        {/* <Navigation /> */}
    </div>
  );
}

export default App;
