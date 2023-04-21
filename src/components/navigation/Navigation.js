import './Navigation.css'
// import Login from '../Login/Login'
// import Home from '../home-section/Home'
// import Library from '../library-section/Library'
// import SongList from '../song-list/SongList'


// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   RouterProvider,
//   Route,
//   Link,
// } from "react-router-dom";

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: (
//             <Home />
//         )
//     },
//     {
//         path: "home",
//         element: (
//             <Home />
//         )
//     },
//     {
//         path: "library",
//         element: (
//             <Library />
//         )
//     },
//     {
//         path: "about",
//         element: <div>About</div>
//     }
// ]);


export default function Navigation(props){
    return (
        <>
            <NavBarTop />
            {/* <RouterProvider router={router} /> */}
            {props.element}
            <NavBarBottom />
            {/* <Link to="/home">home</Link>
            <Link to="/library">library</Link> */}
        </>
    );
}

function NavBarTop(){
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

function NavBarBottom(){
    return (
        <>
            <div className='navbar-bottom'>
                {/* <div className='navbar-breaker'></div> */}
                this is navbar bottom
            </div>
        </>
    );
}