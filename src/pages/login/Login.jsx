import React from 'react';
import "./login.css";
import { auth, provider } from "../../firebase-config";
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuth }) => {
    let navigate = useNavigate();

    const signInWithGoogle = () =>{
        signInWithPopup(auth, provider).then((result)=>{
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate("/");
        });
    };

    return (
        <div className="login-container">
            <div className="login-wrapper">
                <button className="login-btn" onClick={signInWithGoogle}>
                    Sign in
                </button>
            </div>
        </div>
    )
}

export default Login