import './Navigation.css'
// import Login from '../Login/Login'
import { Home } from '../home-section/Home'
import { Library } from '../library-section/Library'
// import SongList from '../song-list/SongList'
import { Player } from '../player/Player'


 import {
   createBrowserRouter,
   createRoutesFromElements,
   RouterProvider,
   Route,
   Link,
 } from "react-router-dom";

 
export function Navigation(props) {
    return (
        <>
            <NavBarTop />
            {/* <RouterProvider router={router} /> */}
            {props.element}
            {/*    <Player />*/}
            <NavBarBottom />
            {/* <Link to="/home">home</Link>
            <Link to="/library">library</Link> */}
        </>
    );
}

function NavBarTop() {
    return (
        <>
            <div className='navbar-top'>
                <img className='app-logo' src='./app-logo.png' alt='app logo' />
                <p className='app-name'>AsbtoBeats</p>
                {/* <div className='navbar-breaker'></div> */}
            </div>
        </>
    );
}

function NavBarBottom() {
    return (
        <>
            <div className='navbar-bottom'>
                {/* <div className='navbar-breaker'></div> */}
                {/* this is navbar bottom */}
                <Link to="/">home</Link>
                <Link to="/library">library</Link>
            </div>
        </>
    );
}