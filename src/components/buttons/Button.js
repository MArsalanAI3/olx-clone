import React from 'react';
import './Button.css'

function LoginButton({text}) {
    return (
        <div>
            <button className='loginBtn'><span className='text-center'>{text}</span></button>
        </div>
    )


}

export default LoginButton;