import React from 'react';
import "./navbar.css";
import { FaBloggerB, FaBtc, FaBuffer, FaHome, FaPen, FaSketch } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase-config';

const Navbar = ({ isAuth, setIsAuth }) => {

    let navigate = useNavigate();

    const signUserOut = () =>{
        signOut(auth).then(()=>{
            localStorage.clear();
            setIsAuth(false);
            navigate("/login");
        });
    };

    return (
        <div className="navbar">
            <div className="navbar-top">
                <FaBloggerB className="logo" />
                <span className="brand">UComb</span>
            </div>
            <div className="navbar-center">
                <ul className="list">
                    <Link className="link-item" to="/">
                        <li className="list-item">
                                <FaHome className="list-item-icon" />
                                <span className="list-item-text">Posts</span>
                        </li>
                    </Link>
                    <Link className="link-item" to="/createpost" >
                        <li className="list-item">
                                <FaPen className="list-item-icon" />
                                <span className="list-item-text">Create Post</span>
                        </li>
                    </Link>
                    <Link className="link-item" to="/coins">
                        <li className="list-item">
                            <FaBtc className="list-item-icon" />
                            <span className="list-item-text">Coin Ranking</span>
                        </li>
                    </Link>
                    <Link className="link-item" to="/notes">
                        <li className="list-item">
                            <FaBuffer className="list-item-icon" />
                            <span className="list-item-text">Notes stack</span>
                        </li>
                    </Link>
                </ul>
            </div>
            <div className="navbar-bottom">
                {!isAuth?(
                    <Link to="/login">
                        <button className="login">
                                <span className="btn-text">Login</span>
                        </button>
                    </Link>
                ):(
                    <>
                    <button onClick={signUserOut} className="logout">
                        <span className="btn-text">Logout</span> 
                    </button>
                    <button className="username">
                        <span className="btn-text">{auth.currentUser.displayName}</span> 
                    </button>
                </>
                )}
                
                
            </div>
        </div>
    )
}

export default Navbar