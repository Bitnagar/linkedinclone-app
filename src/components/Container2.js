import React from 'react'
import Li from "./Li"

export default function Container2() {
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

  return (
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
  )
}
