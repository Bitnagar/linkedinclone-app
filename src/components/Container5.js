import React from "react";
import SofaSitting from "../assets/sofa-sitting.svg";
import WomanWorking from "../assets/women-working.svg";
import Data from "../data";

export default function Container5() {

    const [state, setState] = React.useState(false);

    function toggleState() {
        setState(prev => prev ? false : true);
    }

    const dropdown = Data.data.dropDownData.map(item => {
        return (
            <div>
                <a href="reload" id="dropdown-anchors"><b>{item.courseName}</b><br/>{`${item.courseCount}+ courses`}</a>
                <br/>
                <br/>
            </div>
        )
    })

    return (
        <div className="content-5-container">
            <div className="main-5">
                <div className="left">
                    <img src={SofaSitting} alt="sofa-sitting" width={300}/>
                    <p>Connect with people <br /> who can help</p>
                    <li>Find people you know</li>
                </div>
                <div className="right">
                    <img src={WomanWorking} alt="working woman" width={300}/>   
                    <p>Learn the skills you <br /> need to succeed</p>
                    <div className="dropdown-container">
                        <button id="drop-down-btn" onClick={toggleState}>Choose a topic to learn about ▼</button>
                        {state && <div id="dropdown">
                            {dropdown}
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}