// local imports
import './Navigation.css'

// imports from react-router-dom
import {
    Link,
    Outlet
} from "react-router-dom";

// imports from @clerk/clerk-react
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  RedirectToSignIn,
  SignOutButton
} from "@clerk/clerk-react";

// imports from react
import { useState } from 'react';

// theme array
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

// main parant object of navigation
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

// top navbar
function NavBarTop(props) {
    return (
        <>
            
            <div className='navbar-top'>
                <img className='app-logo' src='./app-logo.png' alt='app logo' />
                <p className='app-name'>AsbtoBeats</p>
                
                {/* button to change theme */}
                <button id='theme-btn' onClick={() => {
                    let body = document.getElementsByClassName('body')[0];
                    let formSubmitButton = document.getElementsByClassName('cl-formButtonPrimary 🔒️ cl-internal-1fsg6zy')[0];
                    let optionBelowSubmitButton = document.getElementsByClassName('cl-footerActionLink 🔒️ cl-internal-15amzqo')[0];
                    if (props.n == 0) {
                        // greenish
                        props.setN(1);
                        body.style.background = 'linear-gradient(120deg, #155799db, #159957db)';
                        if(formSubmitButton!=undefined){
                            formSubmitButton.style.background = '#58a797';
                            optionBelowSubmitButton.style.color = 'rgb(200 221 224)';
                        }
                    }
                    else if (props.n == 1) {
                        // neon
                        props.setN(2);
                        body.style.background = 'linear-gradient(120deg, #A02BE4, #7c3aed, #4f46e5)';
                        if(formSubmitButton!=undefined){
                            formSubmitButton.style.background = 'rgba(221, 206, 250, 0.54)';
                            optionBelowSubmitButton.style.color = '#ddcefa';
                        }
                    }
                    else {
                        // default
                        props.setN(0);
                        body.style.background = '#000616cb';
                        if(formSubmitButton!=undefined){
                            formSubmitButton.style.background = '#5270ce';
                            optionBelowSubmitButton.style.color = '#5270ce';
                        }
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

// bottom navbar
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
