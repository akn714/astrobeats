import './App.css'
import { Login } from './components/Login/Login'
import { Home } from './components/home-section/Home'
import { Library } from './components/library-section/Library'
import { SongList } from './components/song-list/SongList'
import { Navigation } from './components/navigation/Navigation'
import { Player } from './components/player/Player'


import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
    Link
} from "react-router-dom";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={ <Navigation /> }>
            <Route index element={
                    <>
                        <Home />
                        <Player />
                    </>
                } />
            <Route
                path="login"
                element={
                    <>
                        <Login />
                        <Player />
                    </>
                } />
            <Route
                path="library"
                element={
                    <>
                        <Library />
                        <Player />
                    </>
                } />
            <Route
                path="playlist"
                element={
                    <>
                        <SongList />
                        <Player />
                    </>
                } />
        </Route>
    )
);

export function App() {
    return (
        <div className="body">
            {/* <div>Welcome to AstroBeats!</div> */}
            {/* <Login /> */}
            {/* <Home /> */}
            {/* <Library /> */}
            {/* <SongList /> */}
            <RouterProvider router={router} />
            {/* <Navigation /> */}
        </div>
    );
}
