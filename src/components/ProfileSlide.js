import React from "react";
import circleProfilePic from "../assets/circle-profile.png";

export default function ProfileSlide() {
    return (
        <div className="content-4-container">
            <header>
                <button id="prevBtn">Previous</button>
                <button id="nextBtn">Next</button>
            </header>
            <div className="profile-container" id="profileContainer">
                <div className="profile-1">
                    <div className="profile-heading">
                        <h1>Let the right people know <br></br> you're open to work</h1>
                        <p>With the Open To Work feature, you can privately tell recruiters or publicly share with the LinkedIn community that you are looking for new job opportunities.</p>
                    </div>
                    <img src={circleProfilePic} alt="man smiling" width={450}></img>
                </div>
            </div>
        </div>
    )
}