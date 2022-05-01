import React from "react";
import Collage from "../assets/collage.png";

export default function Container7() {

    const Styles={
        backgroundImage: `url(${Collage})`,
        height:'50rem',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <div className="content-7-container" style={Styles}>
            <p>Join your colleagues, classmates, and friends on <br/>LinkedIn.</p>
            <button>Get started</button>
        </div>
    )
}