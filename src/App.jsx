import './App.css'
import { Login } from './components/Login/Login'
import { Home } from './components/home-section/Home'
import { Library } from './components/library-section/Library'
import { SongList } from './components/song-list/SongList'
import { Navigation } from './components/navigation/Navigation'
import { Player } from './components/player/Player'
import { NotFound404 } from './components/notfoundpage/NotFound404'
import { SearchSection } from './components/search-section/SearchSection'
import { Settings } from './components/settings/Settings'
import { History } from './components/history-section/History'


import { Signup } from './components/Auth/Signup'
import { Signin } from './components/Auth/Signin'

import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route
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
                path="signup"
                element={
                    <>
                        <Signup />
                    </>
            } />
            <Route
                path="signin"
                element={
                    <>
                        <Signin />
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
                path="history"
                element={
                    <>
                        <History />
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
                path="settings"
                element={
                    <>
                        <Settings />
                        <Player songname='no song selected' artist='unknown' />
                    </>
            } />
            <Route
                path="*"
                element={
                    <>
                        <NotFound404 />
                        <Player songname='no song selected' artist='unknown' />
                    </>
            } />
        </Route>
    )
);

export function App() {
    return (
        <div className="body">
            {/* <img src="./app-poster.jpg" style="position: absolute;width: 100%;height: 100%;z-index: -2"/> */}
            {/* <img src="./app-poster.jpg" style={{"position":"fixed", "height":"100%", "zIndex":"-2"}}/> */}
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
