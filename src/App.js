import './App.css'
import { Login } from './components/Login/Login'
import { Home } from './components/home-section/Home'
import { Library } from './components/library-section/Library'
import { SongList } from './components/song-list/SongList'
import { Navigation } from './components/navigation/Navigation'

import {
   createBrowserRouter,
   createRoutesFromElements,
   RouterProvider,
   Route,
   Link,
 } from "react-router-dom";

 const router = createBrowserRouter(
   createRoutesFromElements(
     <Route path="/">
       <Route
        path=""
        element={<Home />}
       />
       <Route
         path="login"
        element={<Login />}
       />
       <Route
        path="library"
        element={<Library />}
       />
     </Route>
   )
);

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
            <Navigation element={<RouterProvider router={router} />} />
            
            {/* <Navigation /> */}
        </div>
    );
}

export default App;
