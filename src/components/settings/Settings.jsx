import './Settings.css'

import {
    Link
} from "react-router-dom";

import {
    SignedIn,
    SignedOut,
    UserButton,
    useUser,
    RedirectToSignIn,
    SignOutButton
  } from "@clerk/clerk-react";

export function Settings(){
    return (
        <div className='settings-section'>
            <div className='settings-section-main'>
                <div className='settings-secton-item'>
                    <div className='settings-item-options'>
                        <p>watch history</p>
                        <button className='setting-item-options-btn' onClick={(e)=>{
                            if(e.target.getAttribute('class')=='setting-item-options-btn'){
                                if(e.target.style.justifyContent=='' || e.target.style.justifyContent=='start'){
                                    e.target.style.justifyContent = 'end';
                                    e.target.children[0].style.background = '#5178f0';
                                }
                                else{
                                    e.target.style.justifyContent = 'start';
                                    e.target.children[0].style.background = 'gray'
                                }
                            }
                            console.log(e.target.style.justifyContent)
                        }}>
                            <div></div>
                        </button>
                    </div>
                </div>
                <div className='settings-secton-item'>
                    <div className='settings-item-options'>
                        <p>search history</p>
                        <button className='setting-item-options-btn' onClick={(e)=>{
                            if(e.target.getAttribute('class')=='setting-item-options-btn' && (e.target.style.justifyContent=='' || e.target.style.justifyContent=='start')){
                                e.target.style.justifyContent = 'end';
                                e.target.children[0].style.background = '#5178f0';
                            }
                            else{
                                e.target.style.justifyContent = 'start';
                                e.target.children[0].style.background = 'gray'
                            }
                            console.log(e.target.style.justifyContent)
                        }}>
                            <div></div>
                        </button>
                    </div>
                </div>
                <div className='settings-secton-item'>
                    <div className='settings-item-options clerk-opts'>
                        <SignedIn>
                            <div>
                                <p>User Options from Clerk :</p>
                                <UserButton />
                            </div>
                        </SignedIn>
                        <SignedOut>
                            <Link className='settings-item-auth-btns' to='/signin'>sign-in</Link>
                            <p>to see User Options from Clerk</p>
                        </SignedOut>
                    </div>
                </div>
                <div className='settings-secton-item'>
                    <div className='settings-item-btns'>
                        <button className='delete-history'>Delete History</button>
                    </div>
                </div>
                <div className='settings-secton-item'>
                    <div className='settings-item-btns'>
                        <button className='change-pwd'>Change password</button>
                    </div>
                </div>
                <div className='settings-secton-item'>
                    <div className='settings-item-btns'>
                        <button className='settings-item-delete-acc-btn'>Delete Account</button>
                    </div>
                </div>
                <div className='settings-secton-item'>
                    <div className='settings-item-btns'>
                        <SignedIn>
                            <SignOutButton />
                        </SignedIn>
                        <SignedOut>
                            <Link to='/signin' className='settings-item-auth-btns'>sign-in</Link>
                            <p>/</p>
                            <Link to='/signup' className='settings-item-auth-btns'>sign-up</Link>
                        </SignedOut>
                    </div>
                </div>
            </div>
        </div>
    );
}