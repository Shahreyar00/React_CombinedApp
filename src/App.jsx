import React, { useState } from 'react';
import "./App.css";
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import CreatePost from './pages/createpost/CreatePost';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/login/Login';
// import { signOut } from 'firebase/auth';
// import { auth } from './firebase-config';
import Coin from './components/coin/Coin';
import Notes from "./components/notes/Notes";

const App = () => {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

    return (
        <Router>
            <div className="app">
                <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />
                <Routes>
                    <Route path="/" element={<Home isAuth={isAuth}/>} />
                    <Route path="/createpost" element={<CreatePost isAuth={isAuth}/>} />
                    <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
                    <Route path="/coins" element={<Coin isAuth={isAuth} />} />
                    <Route path="/notes" element={<Notes />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App