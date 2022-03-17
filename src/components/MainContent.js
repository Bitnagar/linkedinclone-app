import React from "react";
import ManSitting from "../assets/man-sitting.svg";
import Li from "./Li"
import Li2 from "./Li2"

export default function MainContent() {

    const [showMore, setShowMore] = React.useState(false);
    const [n, setN] = React.useState(8);
    
    function changeShowMore() {
        setShowMore(prevState => !prevState);
    }
    
    function changeN() {
        setN(prevState => {
            if(prevState === 8) {
                return prevState + 6;
            } else {
                return prevState - 6;
            }
        });
    }
    
    function changeShowMoreAndN() {
        changeN();
        changeShowMore();
    }

    //for 2nd buttons list
    const [showMore2, setShowMore2] = React.useState(false);
    const [n2, setN2] = React.useState(10);

    function changeShowMore2() {
        setShowMore2(prevState => !prevState);
    }

    function changeN2() {
        setN2(prevState => {
            if(prevState === 10) {
                return prevState + 19;
            } else {
                return prevState - 19;
            }
        });
    }

    function changeShowMore2AndN2() {
        changeN2();
        changeShowMore2();
    }



    return (
        <div className="main-content-container">
            <div className="content-1-container">
                <div className="content-1-main">
                    <h1>Welcome to your professional community</h1>
                    <form>
                        <input
                            placeholder="Email or phone"
                            type="email"
                            id="email"
                            className="email"
                            autoComplete="email"
                        />
                        <br></br>
                        <input
                            placeholder="Password (6+ characters)"
                            type="password"
                            id="password"
                            className="password"
                            autoComplete="current-password"
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
                        <Li n={n} /> <br></br>
                    <p
                        className="li-set-1"
                        onClick={changeShowMoreAndN}
                    >{showMore ? "Show less" : "Show more"} {showMore ? <>&uarr;</> : <>&darr;</>} </p>
                    </ul>
                </div>
            </div>


            {/* for 2nd buttons list */}
            <div className="content-2-container transparent">
                <p>Find the right job or <br></br> internship for you</p>
                <div className="buttons-div">
                    <p>SUGGESTED SEARCHES</p>
                    <ul className="ul-1">
                        <Li2 n={n2} /> <br></br>
                    <p
                        className="li-set-1"
                        onClick={changeShowMore2AndN2}
                    >{showMore2 ? "Show less" : "Show more"}
                     {showMore2 ? <> &uarr;</> : <> &darr;</>}
                    </p>
                    </ul>
                </div>
            </div>
        </div>
    )
}