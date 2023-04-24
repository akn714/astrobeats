import './Player.css'

import {
   Link
 } from "react-router-dom";

export default function Player(){
    return (
        <>
            <div className='player'>
                <div>this is player</div>
              
                <Link to='/'>home</Link>
                <Link to='/library'>library</Link>
            </div>
        </>
    );
}