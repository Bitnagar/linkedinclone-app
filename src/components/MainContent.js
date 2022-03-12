import React from "react";
import ManSitting from "../assets/man-sitting.svg";
import Li from "./Li"

export default function MainContent() {
    return (
        <div className="main-content-container">
            <div className="content-1-container">
                <div className="content-1-main">
                    <h1>Welcome to your professional community</h1>
                    <form>
                        <input
                            placeholder="Email or phone"
                            name="email"
                            type="email"
                            id="email"
                        />
                        <br></br>
                        <input
                            placeholder="Password (6+ characters)"
                            name="password"
                            type="password"
                            id="password"
                        />
                        <p>By clicking Agree & join, you agree to the LinkedIn <a href="$">User Agreement</a>, <a href="$">Privacy Policy</a>, and <a href="$">Cookie Policy</a>
                        </p>
                        <br></br>
                        <button className="button agree-btn">Agree and Join</button>
                        <div className="hr-div">
                            <hr></hr>
                            <p>or</p>
                            <hr></hr>
                        </div>
                        <button className="button already-btn">Already on LinkedIn? <a href="$">Sign in</a></button>
                    </form>
                </div>
                <img src={ManSitting} alt="Man sitting and working" width="700" height="700"/>
            </div>
            <div className="content-2-container">
                <p>Explore topics you <br></br> are interested in</p>
                <div className="buttons-div">
                    <p>CONTENT TOPICS</p>
                    <ul className="ul-1">
                        <Li />
                    </ul>
                </div>
            </div>
        </div>
    )
}