import './Navigation.css'

export default function Navigation(props){
    return (
        <>
            <NavBarTop />
            <div className='main'>
                {props.element}
            </div>
            <NavBarBottom />
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