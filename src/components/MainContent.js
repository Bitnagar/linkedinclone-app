import React from "react";
import Container1 from "./Container1";
import Container2 from "./Container2.1";
import ContainerTwo from "./Container2.1";
import Container3 from "./Container3";
import ProfileSlide from "./ProfileSlide";
import Container5 from "./Container5";
import Container6 from "./container6";
import Container7 from "./Container7";
import Footer from "./Footer";

export default function MainContent() {

    return (
        <div className="main-content-container">
            <Container1 />
            <Container2 />
            <ContainerTwo />
            <Container3 />
            <ProfileSlide />
            <Container5 />
            <Container6 />
            <Container7 />
            <Footer />
        </div>
    )
}