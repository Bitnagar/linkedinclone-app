import React from "react";
import Li2 from "./Li2"


export default function Container2() {
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
    )
}