import { addDoc, collection } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db, auth } from "../../firebase-config";
import { useNavigate } from 'react-router-dom';
import "./createPost.css";

const CreatePost = ({ isAuth }) => {
    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");

    const postsCollectionRef = collection(db, "posts");
    let navigate = useNavigate();

    const createPost = async() =>{
        await addDoc(postsCollectionRef,{
            title,
            postText, 
            author:{name:auth.currentUser.displayName, id:auth.currentUser.uid},
        });
        setTitle("");
        setPostText("");
        navigate("/");
    };

    useEffect(()=>{
        if(!isAuth){
            navigate("/login");
        }
    },[]);

    return (
        <div className="createPost">
            <div className="cpContainer">
                <h1 className="cpHeading">Write A New Post</h1>
                <div className="inputGp">
                    <label htmlFor="title">Title</label>
                    <input
                        placeholder="Title..."
                        onChange={(e)=>setTitle(e.target.value)}
                    />
                </div>
                <div className="inputGp">
                    <label htmlFor="post">Post</label>
                    <textarea
                        placeholder="Post..." 
                        onChange={(e)=>setPostText(e.target.value)} 
                    />
                </div>
                <div className="btn-box">
                    <button onClick={createPost}>Submit Post</button>
                </div>
            </div>
        </div>
    )
}

export default CreatePost