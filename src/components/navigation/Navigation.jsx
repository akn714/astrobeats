import './Navigation.css'

import {
    Link,
    Outlet
} from "react-router-dom";

import { useState } from 'react';

let theme = [
    {
        "path": '',
    },
    {
        "path": '/greenish',
    },
    {
        "path": '/neon',
    }
]

export function Navigation(props) {
    let [n, setN] = useState(0);
    return (
        <>
            <NavBarTop n={n} setN={setN} />
            <Outlet />
            <NavBarBottom theme={theme[n]} />
        </>
    );
}

function NavBarTop(props) {
    return (
        <>
            <div className='navbar-top'>
                <img className='app-logo' src='./app-logo.png' alt='app logo' />
                <p className='app-name'>AsbtoBeats</p>
                <button id='theme-btn' onClick={()=>{
                    if(props.n==0){
                        props.setN(1);
                        document.getElementsByClassName('body')[0].style.background = 'linear-gradient(120deg, #155799db, #159957db)';
                    }
                    else if(props.n==1){
                        props.setN(2);
                        document.getElementsByClassName('body')[0].style.background = 'linear-gradient(120deg, #A02BE4, #7c3aed, #4f46e5)';
                    }
                    else{
                        props.setN(0);
                        document.getElementsByClassName('body')[0].style.background = '#000616cb';
                    }
                }}>theme</button>
            </div>
            <script>
                {
                    window.addEventListener('scroll', () => {
                        if (window.scrollY == 0) {
                            document.getElementsByClassName('navbar-top')[0].style.height = '90px'
                        }
                        else {
                            document.getElementsByClassName('navbar-top')[0].style.height = '60px'
                        }
                    })
                }
            </script>
        </>
    );
}

function NavBarBottom(props) {
    return (
        <>
            <div className='navbar-bottom'>
                <Link to="/">
                    <img src={`./nav icons${props.theme.path}/home.png`} height='35px' />
                </Link>
                <Link to="/search">
                    <img src={`./nav icons${props.theme.path}/search.png`} height='35px' />
                </Link>
                <Link to="/library">
                    <img src={`./nav icons${props.theme.path}/playlists.png`} height='35px' />
                </Link>
                <Link to="/history">
                    <img src={`./nav icons${props.theme.path}/history.png`} height='35px' />
                </Link>
                <Link to="/settings">
                    <img src={`./nav icons${props.theme.path}/settings.png`} height='35px' />
                </Link>
            </div>
        </>
    );
}
