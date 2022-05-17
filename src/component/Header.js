import React from "react";
import { Link } from "react-router-dom";
import '../css/App.css';

function Header() {

    return(
        <div className="header">
            <div className="menu">
            <div className="logo">BALANCE GAME</div><span>안녕하세여 헤더입니다</span>
            </div>
        </div>
    )

}

export default Header