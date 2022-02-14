import React, { useEffect, useState } from 'react';
import "./coin.css";
import { FaSearch } from 'react-icons/fa';
import { db, auth } from "../../firebase-config";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Coin = ({ isAuth }) => {
    const [searchWord, setSearchWord] = useState("");
    const [listOfCoins, setListOfCoins] = useState([]);
    let navigate = useNavigate();

    useEffect(()=>{
        axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
            (response)=>{
                setListOfCoins(response.data.coins);
                console.log(response);
            }
        );
    },[]);

    useEffect(()=>{
        if(!isAuth){
            navigate("/login");
        }
    },[]);

    const filteredCoins = listOfCoins.filter((coin)=>{
        return coin.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    return (
        <div className="cryptoCont">
            <div className="cryptoHeader">
                <FaSearch className="search-icon" />
                <input 
                    type="text" 
                    placeholder="Search..."
                    onChange={(e)=>{
                        setSearchWord(e.target.value);
                    }}
                />
            </div>
            <div className="cryptoDisplay">
                {filteredCoins.map((coin)=>{
                    return(
                        <div className="coin glow">
                            <h1>{coin.name}</h1>
                            <img src={coin.icon} alt="icon" />
                            <h3>Price: {coin.price.toString().slice(0,12)}</h3>
                            <h3>Symbol: {coin.symbol}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Coin