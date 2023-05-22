import './App.css'
import { Login } from './components/Login/Login'
import { Home } from './components/home-section/Home'
import { Library } from './components/library-section/Library'
import { SongList } from './components/song-list/SongList'
import { Navigation } from './components/navigation/Navigation'
import { Player } from './components/player/Player'
import { NotFound404 } from './components/notfoundpage/NotFound404'
import { SearchSection } from './components/search-section/SearchSection'

import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
    Link
} from "react-router-dom";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Navigation />}>
            <Route index element={
                <>
                    <Home />
                    <Player songname='no song selected' artist='unknown' />
                </>
            } />
            <Route
                path="login"
                element={
                    <>
                        <Login />
                        <Player songname='no song selected' artist='unknown' />
                    </>
            } />
            <Route
                path='search'
                element={
                <>
                    <SearchSection />
                    <Player songname='no song selected' artist='unknown' />
                </>
            } />
            <Route
                path="library"
                element={
                    <>
                        <Library />
                        <Player songname='no song selected' artist='unknown' />
                    </>
            } />
            <Route
                path="playlist"
                element={
                    <>
                        <SongList />
                        <Player songname='no song selected' artist='unknown' />
                    </>
            } />
            <Route
                path="*"
                element={<NotFound404 />}
            />
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
