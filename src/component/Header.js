import React from "react";
import { Link } from "react-router-dom";
import '../css/App.css';

function Header() {

    return(
        <div className="header">
            <div className="menu">
                <div className="logo">BALANCE GAME</div>
                <div className="stat">상태창</div>            
            </div>
            <div className="serchbar">
                <input type="text" placeholder="검색"></input>
                </div>

            
        </div>
    )

}

export default Header