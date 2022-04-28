import React from "react";
import circleProfilePic from "../assets/circle-profile.png";


export default function ProfileSlide() {

    const [value, setValue] = React.useState(0);

    function nextSlide() {
        setValue(prev => prev - 81);
    }

    function prevSlide() {
        setValue(prev => prev + 81);
    }

    React.useEffect(() => {
        console.log("useEffect ran");
        const profiles = document.getElementById('profiles');
        profiles.style.transition = `transform .5s cubic-bezier(0.34, 0, 0, 0.98)`
        profiles.style.transform = `translateX(${value}rem)`
        document.getElementById('prevBtn').disabled = false;
        document.getElementById('nextBtn').disabled = false;

        if(value === 0) document.getElementById('prevBtn').disabled = true;

        if(value <= -140) document.getElementById('nextBtn').disabled = true;

    }, [value]);


    return (
        <div className="content-4-container">
            <header>
                <button id="prevBtn" onClick={prevSlide} >Previous</button>
                <button id="nextBtn" onClick={nextSlide}>Next</button>
            </header>

            <div id="slider">
                <div className="profile-container" id="profiles">
                    <div className="profile-1">
                        <div className="profile-heading">
                            <h1>Let the right people know <br></br> you're open to work</h1>
                            <p>With the Open To Work feature, you can privately tell recruiters or publicly share with the LinkedIn community that you are looking for new job opportunities.</p>
                        </div>
                        <img src={circleProfilePic} alt="man smiling" width={450}></img>
                    </div>
                    <div className="profile-1">
                        <div className="profile-heading">
                            <h1>Let the right people know <br></br> you're open to work</h1>
                            <p>With the Open To Work feature, you can privately tell recruiters or publicly share with the LinkedIn community that you are looking for new job opportunities.</p>
                        </div>
                        <img src={circleProfilePic} alt="man smiling" width={450}></img>
                    </div>
                    <div className="profile-1">
                        <div className="profile-heading">
                            <h1>Let the right people know <br></br> you're open to work</h1>
                            <p>With the Open To Work feature, you can privately tell recruiters or publicly share with the LinkedIn community that you are looking for new job opportunities.</p>
                        </div>
                        <img src={circleProfilePic} alt="man smiling" width={450}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}