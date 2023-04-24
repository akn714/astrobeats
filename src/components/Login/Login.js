import './Login.css'

export function Login() {
    return (
        <>
            <form className="login-form">
                <input type="text" placeholder="username"/>
                <input type="password" placeholder="password"/>
                <div className='login-form-buttons'>
                    <button>login</button>
                    <button>login as guest</button>
                </div>
            </form>
        </>
    );
}