import './Player.css'

import {
   Link
 } from "react-router-dom";

export default function Player(){
    return (
        <>
            <div className='player'>this is player
              
                <a href="/">home</a>
                <a href="/library">library</a>  
         
            </div>      
        </>
    );
}
