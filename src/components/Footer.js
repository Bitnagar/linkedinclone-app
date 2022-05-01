import React from "react";
import Logo from "../assets/Li.png"

export default function Footer() {
    return (
        <footer id="footer">
            <main>
                <img src={Logo} alt="linked in logo" id="footer-logo" width={100}/>
                <div className="div1">
                    <h6>General</h6>
                    <p>Sign Up</p>
                    <p>Sign Up</p>
                    <p>Help Center</p>
                    <p>About</p>
                    <p>Press</p>
                    <p>Blog</p>
                    <p>Careers</p>
                    <p>Developers</p>
                </div>
                <div className="div2">
                    <h6>Browse LinkedIn</h6>
                    <p>Learning</p>
                    <p>Jobs</p>
                    <p>Salary</p>
                    <p>Mobile</p>
                    <p>Services</p>
                    <p>Products</p>
                </div>
                <div className="div3">
                    <h6>Business Solutions</h6>
                    <p>Talent</p>
                    <p>Marketing</p>
                    <p>Sales</p>    
                    <p>Learning</p>
                </div>
                <div className="div4">
                    <h6>Directories</h6>
                    <p>Members</p>
                    <p>Jobs</p>
                    <p>Companies</p>
                    <p>Featured</p> 
                    <p>Learning</p>
                    <p>Posts</p>
                    <p>Articles</p>
                    <p>Schools</p>
                    <p>News</p>
                    <p>News Letters</p>
                    <p>Services</p>
                    <p>Interview Prep</p>
                    <p>Products</p>
                    <p>Content Topics</p>
                </div>
            </main>
            <div id="sub-footer">
                <main id="sub-footer-main">
                    <img src={Logo} alt="linkedin logo black" id="sub-footer-logo"/>
                    <p>&copy; 2022</p>
                    <p>About</p>
                    <p>Accessability</p>
                    <p>User Agreement</p>
                    <p>Privacy Policy</p>
                    <p>Cookie Policy</p>
                    <p>Copyright Policy</p>
                    <p>Brand Policy</p>
                    <p>Guest Controls</p>
                    <p>Community Guidlines</p>
                    <p>Language </p>
                </main>
            </div>
        </footer>
    )
}