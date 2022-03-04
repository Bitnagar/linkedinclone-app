import React from "react";
import logo from "../assets/Li.png"

export default function Header() {
    return (
        <header>
            <nav>
                <img src={logo} alt="linked in logo" width="140" height="35"/>
                <div className="header-btn-container">
                    <button className="join-btn button ">Join now</button>
                    <button className="sign-in-btn button ">Sign in</button>
                </div>
            </nav>
        </header>
    )
}